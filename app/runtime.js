/* Heirloom mini runtime: renders the prototype's HTML template with the values from
   Component.renderVals(), patches the page in place on every state change, and routes
   touch, pointer and key events to the handlers the component returns. No dependencies. */
(function () {
  'use strict';

  class DCLogic {
    constructor(props) { this.props = props || {}; this.state = null; }
    setState(o) {
      var next = typeof o === 'function' ? o(this.state || {}, this.props) : o;
      this.state = Object.assign({}, this.state || {}, next);
      if (this.__schedule) this.__schedule();
    }
    forceUpdate() { if (this.__schedule) this.__schedule(); }
  }
  window.DCLogic = DCLogic;

  // ---- template compile -------------------------------------------------------------
  var HOLE = /\{\{\s*([^}]*?)\s*\}\}/g;
  function parts(str) {
    var out = [], last = 0, m;
    HOLE.lastIndex = 0;
    while ((m = HOLE.exec(str))) {
      if (m.index > last) out.push(str.slice(last, m.index));
      out.push({ p: m[1] });
      last = HOLE.lastIndex;
    }
    if (last < str.length) out.push(str.slice(last));
    return out;
  }
  function compile(node) {
    if (node.nodeType === 3) return { t: 'x', v: parts(node.nodeValue) };
    if (node.nodeType !== 1) return null;
    var tag = node.localName;
    var kids = [];
    var src = node.content ? node.content.childNodes : node.childNodes;
    for (var i = 0; i < src.length; i++) { var c = compile(src[i]); if (c) kids.push(c); }
    if (tag === 'sc-if') return { t: 'if', v: parts(node.getAttribute('value') || ''), k: kids };
    if (tag === 'sc-for') return { t: 'for', v: parts(node.getAttribute('list') || ''), as: node.getAttribute('as'), k: kids };
    var attrs = [];
    for (var j = 0; j < node.attributes.length; j++) {
      var a = node.attributes[j];
      if (a.name.indexOf('hint-') === 0) continue;
      attrs.push([a.name, parts(a.value)]);
    }
    return { t: 'e', tag: tag, ns: node.namespaceURI, a: attrs, k: kids };
  }

  // ---- values -------------------------------------------------------------------------
  function get(scope, path) {
    if (path === 'true') return true;
    if (path === 'false') return false;
    if (/^-?\d+(\.\d+)?$/.test(path)) return parseFloat(path);
    var o = scope, ks = path.split('.');
    for (var i = 0; i < ks.length; i++) { if (o == null) return undefined; o = o[ks[i]]; }
    return o;
  }
  function evalParts(ps, scope) {
    if (ps.length === 1 && typeof ps[0] !== 'string') return get(scope, ps[0].p);
    var s = '';
    for (var i = 0; i < ps.length; i++) {
      if (typeof ps[i] === 'string') s += ps[i];
      else { var v = get(scope, ps[i].p); s += v == null ? '' : String(v); }
    }
    return s;
  }

  // ---- render to light virtual nodes ---------------------------------------------------
  function render(list, scope, out) {
    for (var i = 0; i < list.length; i++) {
      var n = list[i];
      if (n.t === 'x') { var tv = evalParts(n.v, scope); out.push({ x: tv == null ? '' : String(tv) }); continue; }
      if (n.t === 'if') { if (evalParts(n.v, scope)) render(n.k, scope, out); continue; }
      if (n.t === 'for') {
        var items = evalParts(n.v, scope) || [];
        for (var q = 0; q < items.length; q++) {
          var sc = Object.create(scope); sc[n.as] = items[q]; sc.$index = q;
          render(n.k, sc, out);
        }
        continue;
      }
      var v = { tag: n.tag, ns: n.ns, at: {}, ev: null, k: [] };
      for (var j = 0; j < n.a.length; j++) {
        var name = n.a[j][0], val = evalParts(n.a[j][1], scope);
        if (name.length > 2 && name[0] === 'o' && name[1] === 'n') {
          if (typeof val === 'function') { v.ev = v.ev || {}; v.ev[name.slice(2).toLowerCase()] = val; }
          continue;
        }
        if (val === false || val == null) continue;
        v.at[name] = String(val);
      }
      render(n.k, scope, v.k);
      out.push(v);
    }
    return out;
  }

  // ---- patch the real DOM ------------------------------------------------------------------
  function create(v) {
    if (v.x != null) return document.createTextNode(v.x);
    var el = v.ns && v.ns !== 'http://www.w3.org/1999/xhtml' ? document.createElementNS(v.ns, v.tag) : document.createElement(v.tag);
    for (var k in v.at) el.setAttribute(k, v.at[k]);
    el.__at = v.at; el.__ev = v.ev;
    for (var i = 0; i < v.k.length; i++) el.appendChild(create(v.k[i]));
    return el;
  }
  function same(real, v) {
    if (v.x != null) return real.nodeType === 3;
    return real.nodeType === 1 && real.localName === v.tag && real.namespaceURI === v.ns;
  }
  function patchKids(parent, vk) {
    var rk = parent.childNodes;
    for (var i = 0; i < vk.length; i++) {
      var real = rk[i], v = vk[i];
      if (!real) { parent.appendChild(create(v)); continue; }
      if (!same(real, v)) { parent.replaceChild(create(v), real); continue; }
      if (v.x != null) { if (real.nodeValue !== v.x) real.nodeValue = v.x; continue; }
      var old = real.__at || {};
      for (var k in v.at) if (old[k] !== v.at[k]) real.setAttribute(k, v.at[k]);
      for (var o in old) if (!(o in v.at)) real.removeAttribute(o);
      real.__at = v.at; real.__ev = v.ev;
      patchKids(real, v.k);
    }
    while (rk.length > vk.length) parent.removeChild(parent.lastChild);
  }

  // ---- events: delegated from the root, handed to the component's handlers ------------------
  function synth(e, el) {
    return {
      type: e.type, target: e.target, currentTarget: el, nativeEvent: e,
      clientX: e.clientX, clientY: e.clientY, pointerId: e.pointerId, pointerType: e.pointerType, key: e.key,
      preventDefault: function () { e.preventDefault(); }, stopPropagation: function () { e.stopPropagation(); }
    };
  }
  function wire(root) {
    ['click', 'pointerdown', 'pointermove', 'pointerup', 'pointercancel', 'keydown'].forEach(function (type) {
      root.addEventListener(type, function (e) {
        var el = e.target;
        while (el && el !== root.parentNode) {
          if (el.__ev && el.__ev[type]) { el.__ev[type](synth(e, el)); return; }
          el = el.parentNode;
        }
      });
    });
    root.addEventListener('pointerleave', function (e) {
      var el = e.target;
      if (el && el.__ev && el.__ev.pointerleave) el.__ev.pointerleave(synth(e, el));
    }, true);
  }

  function mount(root, tpl, Comp, props) {
    // a native image drag would cancel the pointer stream mid-gesture
    document.addEventListener('dragstart', function (e) { e.preventDefault(); });
    var tree = [], src = tpl.content.childNodes;
    for (var i = 0; i < src.length; i++) { var c = compile(src[i]); if (c) tree.push(c); }
    var comp = new Comp(props);
    var pending = false;
    function draw() {
      pending = false;
      patchKids(root, render(tree, comp.renderVals(), []));
    }
    comp.__schedule = function () {
      if (pending) return;
      pending = true;
      window.requestAnimationFrame(draw);
    };
    wire(root);
    draw();
    if (comp.componentDidMount) comp.componentDidMount();
    return comp;
  }

  window.HeirloomRuntime = { mount: mount };
})();
