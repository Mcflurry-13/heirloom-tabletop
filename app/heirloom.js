/* Heirloom prototype logic: stages, voice rings, warmth, shards, the vase knob and the archive.
   Exported from the Claude Design canvas; the template it fills lives in index.html. */
var GEO = {"dots":[[45.4,194.8,257.4,-2.076],[32.2,216.0,246.2,-2.165],[18.9,237.2,237.2,-2.261],[79.9,186.8,250.0,-1.94],[66.6,208.0,235.8,-2.024],[53.4,229.2,223.6,-2.119],[40.1,250.4,213.6,-2.224],[26.9,271.6,206.2,-2.338],[13.6,292.8,201.6,-2.459],[114.3,178.9,247.5,-1.798],[101.1,200.1,230.5,-1.874],[87.8,221.3,215.1,-1.963],[74.6,242.5,201.6,-2.064],[61.3,263.7,190.4,-2.178],[48.1,284.9,182.0,-2.305],[34.8,306.1,176.8,-2.441],[21.6,327.3,175.0,-2.583],[8.3,348.5,176.8,-2.725],[148.8,170.9,250.0,-1.656],[135.5,192.1,230.5,-1.721],[122.3,213.3,212.1,-1.798],[109.0,234.5,195.3,-1.888],[95.8,255.7,180.3,-1.995],[82.5,276.9,167.7,-2.119],[69.3,298.1,158.1,-2.261],[56.0,319.3,152.1,-2.418],[42.8,340.5,150.0,-2.583],[29.5,361.7,152.1,-2.748],[16.3,382.9,158.1,-2.905],[183.2,162.9,257.4,-1.519],[170.0,184.2,235.8,-1.571],[156.7,205.4,215.1,-1.633],[143.5,226.6,195.3,-1.707],[130.2,247.8,176.8,-1.798],[117.0,269.0,160.1,-1.908],[103.7,290.2,145.8,-2.043],[90.5,311.4,134.6,-2.203],[77.2,332.6,127.5,-2.386],[50.7,375.0,127.5,-2.78],[37.5,396.2,134.6,-2.964],[24.3,417.4,145.8,-3.124],[11.0,438.6,160.1,3.025],[204.4,176.2,246.2,-1.431],[191.2,197.4,223.6,-1.476],[177.9,218.6,201.6,-1.531],[164.7,239.8,180.3,-1.6],[151.4,261.0,160.1,-1.687],[138.2,282.2,141.4,-1.798],[32.2,451.8,141.4,2.915],[19.0,473.0,160.1,2.804],[238.9,168.2,261.0,-1.304],[225.6,189.4,237.2,-1.334],[212.4,210.6,213.6,-1.371],[199.1,231.8,190.4,-1.417],[185.9,253.0,167.7,-1.476],[172.6,274.3,145.8,-1.553],[40.2,486.3,145.8,2.67],[26.9,507.5,167.7,2.593],[13.7,528.7,190.4,2.534],[260.1,181.5,255.0,-1.21],[246.8,202.7,230.5,-1.231],[233.6,223.9,206.2,-1.257],[220.3,245.1,182.0,-1.291],[207.1,266.3,158.1,-1.334],[193.8,287.5,134.6,-1.393],[61.4,499.5,134.6,2.51],[48.1,520.7,158.1,2.451],[34.9,541.9,182.0,2.408],[21.6,563.1,206.2,2.374],[8.4,584.3,230.5,2.348],[281.3,194.7,251.2,-1.112],[268.0,215.9,226.4,-1.123],[254.8,237.1,201.6,-1.137],[241.5,258.3,176.8,-1.154],[228.3,279.5,152.1,-1.177],[215.0,300.7,127.5,-1.21],[82.6,512.8,127.5,2.327],[69.3,534.0,152.1,2.294],[56.1,555.2,176.8,2.271],[42.8,576.4,201.6,2.254],[29.6,597.6,226.4,2.24],[16.3,618.8,251.2,2.229],[302.5,208.0,250.0,-1.012],[289.2,229.2,225.0,-1.012],[276.0,250.4,200.0,-1.012],[262.7,271.6,175.0,-1.012],[249.5,292.8,150.0,-1.012],[90.5,547.2,150.0,2.129],[77.3,568.4,175.0,2.129],[64.0,589.6,200.0,2.129],[50.8,610.8,225.0,2.129],[37.5,632.0,250.0,2.129],[323.7,221.2,251.2,-0.913],[310.4,242.4,226.4,-0.902],[297.2,263.6,201.6,-0.888],[283.9,284.8,176.8,-0.87],[270.7,306.0,152.1,-0.847],[257.4,327.2,127.5,-0.815],[125.0,539.3,127.5,1.932],[111.7,560.5,152.1,1.964],[98.5,581.7,176.8,1.987],[85.2,602.9,201.6,2.005],[72.0,624.1,226.4,2.019],[58.7,645.3,251.2,2.03],[344.9,234.5,255.0,-0.815],[331.6,255.7,230.5,-0.794],[318.4,276.9,206.2,-0.767],[305.1,298.1,182.0,-0.734],[291.9,319.3,158.1,-0.691],[278.6,340.5,134.6,-0.632],[146.2,552.5,134.6,1.749],[132.9,573.7,158.1,1.808],[119.7,594.9,182.0,1.851],[106.4,616.1,206.2,1.884],[93.2,637.3,230.5,1.911],[79.9,658.5,255.0,1.932],[366.1,247.7,261.0,-0.721],[352.8,268.9,237.2,-0.691],[339.6,290.1,213.6,-0.654],[326.3,311.3,190.4,-0.607],[313.1,332.5,167.7,-0.549],[299.8,353.7,145.8,-0.472],[167.4,565.7,145.8,1.589],[154.1,587.0,167.7,1.666],[140.9,608.2,190.4,1.724],[127.6,629.4,213.6,1.771],[114.4,650.6,237.2,1.808],[101.1,671.8,261.0,1.838],[374.0,282.2,246.2,-0.594],[360.8,303.4,223.6,-0.549],[347.5,324.6,201.6,-0.493],[334.3,345.8,180.3,-0.424],[321.0,367.0,160.1,-0.338],[307.8,388.2,141.4,-0.227],[201.8,557.8,141.4,1.344],[188.6,579.0,160.1,1.455],[175.3,600.2,180.3,1.541],[162.1,621.4,201.6,1.61],[148.8,642.6,223.6,1.666],[135.6,663.8,246.2,1.711],[395.2,295.4,257.4,-0.505],[382.0,316.6,235.8,-0.454],[368.7,337.8,215.1,-0.392],[355.5,359.0,195.3,-0.318],[342.2,380.2,176.8,-0.227],[329.0,401.4,160.1,-0.116],[315.7,422.6,145.8,0.018],[302.5,443.8,134.6,0.178],[289.3,465.0,127.5,0.361],[262.8,507.4,127.5,0.756],[249.5,528.6,134.6,0.939],[236.3,549.8,145.8,1.099],[223.0,571.0,160.1,1.233],[209.8,592.2,176.8,1.344],[196.5,613.4,195.3,1.435],[183.3,634.6,215.1,1.509],[170.0,655.8,235.8,1.571],[156.8,677.1,257.4,1.622],[403.2,329.9,250.0,-0.369],[389.9,351.1,230.5,-0.304],[376.7,372.3,212.1,-0.227],[363.4,393.5,195.3,-0.136],[350.2,414.7,180.3,-0.029],[337.0,435.9,167.7,0.095],[323.7,457.1,158.1,0.237],[310.5,478.3,152.1,0.393],[297.2,499.5,150.0,0.559],[284.0,520.7,152.1,0.724],[270.7,541.9,158.1,0.88],[257.5,563.1,167.7,1.022],[244.2,584.3,180.3,1.147],[231.0,605.5,195.3,1.253],[217.7,626.7,212.1,1.344],[204.5,647.9,230.5,1.421],[191.2,669.1,250.0,1.486],[411.1,364.3,247.5,-0.227],[397.9,385.5,230.5,-0.15],[384.6,406.7,215.1,-0.062],[371.4,427.9,201.6,0.039],[358.2,449.1,190.4,0.154],[344.9,470.3,182.0,0.28],[331.7,491.5,176.8,0.417],[318.4,512.7,175.0,0.559],[305.2,533.9,176.8,0.7],[291.9,555.1,182.0,0.837],[278.7,576.3,190.4,0.963],[265.4,597.5,201.6,1.078],[252.2,618.7,215.1,1.179],[238.9,639.9,230.5,1.267],[225.7,661.1,247.5,1.344],[419.1,398.8,250.0,-0.085],[405.8,420.0,235.8,-0.0],[392.6,441.2,223.6,0.095],[379.4,462.4,213.6,0.2],[366.1,483.6,206.2,0.314],[352.9,504.8,201.6,0.434],[339.6,526.0,200.0,0.559],[326.4,547.2,201.6,0.683],[313.1,568.4,206.2,0.803],[299.9,589.6,213.6,0.917],[286.6,610.8,223.6,1.022],[273.4,632.0,235.8,1.117],[260.1,653.2,250.0,1.202],[427.1,433.2,257.4,0.051],[413.8,454.4,246.2,0.14],[400.6,475.6,237.2,0.237],[387.3,496.8,230.5,0.34],[374.1,518.0,226.4,0.448],[360.8,539.2,225.0,0.559],[347.6,560.4,226.4,0.669],[334.3,581.6,230.5,0.777],[321.1,602.8,237.2,0.88],[307.8,624.0,246.2,0.977],[294.6,645.2,257.4,1.066],[421.8,488.9,261.0,0.267],[408.5,510.1,255.0,0.361],[395.3,531.3,251.2,0.459],[382.0,552.5,250.0,0.559],[368.8,573.7,251.2,0.658],[355.5,594.9,255.0,0.756],[342.3,616.1,261.0,0.85]],"ring":[1.0958,1.0985,1.0983,1.0992,1.1014,1.1034,1.104,1.1045,1.1077,1.1165,1.1316,1.1502,1.1668,1.175,1.1702,1.1504,1.1173,1.0747,1.0273,0.9801,0.9377,0.9042,0.8825,0.8743,0.8788,0.8929,0.9122,0.9328,0.9529,0.9738,0.9983,1.0284,1.0633,1.0978,1.1244,1.1365,1.1318,1.114,1.0914,1.0729,1.0636,1.0628,1.0646,1.0627,1.055,1.0465,1.0477,1.0685,1.1118,1.1682,1.2173,1.2346,1.2012,1.1132,0.9843,0.8421,0.7177,0.6344,0.6002,0.6067,0.6355,0.6675,0.6912,0.7068,0.7236,0.7527,0.8009,0.866,0.938,1.004,1.0536,1.0832]};
var MEMS = [{"id":"eve","date":"16 Feb 2026","day":47,"label":"New Year's Eve","dur":"0:10","speaker":"Mom","voice":"f","temp":30.4,"text":"We are wrapping dumplings tonight. Grandpa folded the first one. There is a coin hidden in one of them.","alt":"Sample paper-cut image: a row of dumplings along a torn paper edge, a red paper square and one coin","theta":217.97,"img":"assets/images/new-years-eve.jpg","sx":3.5,"sy":431.0,"sw":147.5,"sh":88.5,"clip":"polygon(0.0% 15.82%, 2.37% 41.24%, 7.12% 59.32%, 26.1% 100.0%, 100.0% 100.0%, 96.61% 62.71%, 89.15% 48.59%, 75.59% 36.72%, 62.71% 11.3%, 54.58% 0.0%, 40.0% 10.73%, 10.51% 10.17%)","emb":{"l":-41.2,"t":-255.44,"w":187.42,"h":520.83},"ph":[{"en":"We are wrapping dumplings tonight.","s":0.6,"d":2.0,"n":6},{"en":"Grandpa folded the first one.","s":3.3,"d":2.0,"n":6},{"en":"There is a coin hidden in one of them.","s":6.0,"d":3.36,"n":11}],"clipT":10.3},{"id":"dw","date":"19 Jun 2026","day":170,"label":"Dragon Boat Festival","dur":"0:10","speaker":"Grandpa","voice":"m","temp":33.1,"text":"Grandma tied the zongzi with red string this year. The kitchen smells of reed leaves. Your cousin ate three.","alt":"Sample paper-cut image: green zongzi tied with red string beside reed leaves","theta":96.66,"img":"assets/images/dragon-boat.jpg","sx":255.5,"sy":384.0,"sw":91.0,"sh":135.5,"clip":"polygon(86.26% 0.0%, 0.0% 19.19%, 3.3% 27.68%, 37.91% 72.69%, 52.75% 100.0%, 58.24% 100.0%, 82.42% 80.07%, 93.41% 67.53%, 98.9% 55.35%, 100.0% 30.63%, 96.15% 26.2%, 95.05% 14.39%)","emb":{"l":-15.96,"t":-71.14,"w":163.99,"h":183.63},"ph":[{"en":"Grandma tied the zongzi with red string this year.","s":0.6,"d":3.36,"n":11},{"en":"The kitchen smells of reed leaves.","s":4.66,"d":2.34,"n":7},{"en":"Your cousin ate three.","s":7.7,"d":1.66,"n":5}],"clipT":10.3},{"id":"jas","date":"8 Aug 2026","day":220,"label":"A summer morning","dur":"0:12","speaker":"Mom","voice":"f","temp":34.6,"text":"The jasmine on the balcony opened this morning. I watered it before work. It is very hot here. How is the weather where you are?","alt":"Sample paper-cut image: small white jasmine flowers among dark leaves above a clay pot","theta":47.34,"img":"assets/images/jasmine.jpg","sx":3.5,"sy":324.5,"sw":102.5,"sh":115.0,"clip":"polygon(69.76% 0.0%, 61.46% 4.78%, 53.17% 15.65%, 35.12% 25.65%, 14.15% 48.7%, 4.88% 68.7%, 0.0% 100.0%, 15.12% 95.65%, 57.56% 96.09%, 76.59% 87.83%, 79.51% 75.65%, 90.73% 61.74%, 100.0% 40.43%, 84.88% 24.78%)","emb":{"l":-32.44,"t":-69.94,"w":175.15,"h":260.29},"ph":[{"en":"The jasmine on the balcony opened this morning.","s":0.6,"d":3.02,"n":10},{"en":"I watered it before work.","s":4.32,"d":2.0,"n":6},{"en":"It is very hot here.","s":7.02,"d":2.0,"n":6},{"en":"How is the weather where you are?","s":9.72,"d":2.68,"n":9}],"clipT":13.3},{"id":"ma","date":"25 Sep 2026","day":268,"label":"Mid-Autumn Festival","dur":"0:13","speaker":"Grandpa","voice":"m","temp":32.6,"text":"Today is the Mid-Autumn Festival. We made mooncakes ourselves. How are you doing in the US? Did you get any mooncakes? We all miss you.","alt":"Paper-cut image: hands shaping rounds of mooncake dough along a torn paper edge; an open hand below holds a finished green mooncake","theta":0.0,"img":"assets/images/mid-autumn.jpg","sx":170.0,"sy":282.0,"sw":82.5,"sh":117.0,"clip":"polygon(12.73% 0.0%, 6.67% 18.8%, 7.27% 44.87%, 0.0% 61.97%, 64.24% 100.0%, 85.45% 100.0%, 89.09% 61.11%, 100.0% 19.66%, 98.79% 8.12%, 92.73% 4.27%, 69.09% 1.71%)","emb":{"l":-85.33,"t":-106.98,"w":185.33,"h":217.89},"ph":[{"en":"Today is the Mid-Autumn Festival.","s":0.6,"d":1.7,"n":6},{"en":"We made mooncakes ourselves.","s":2.8,"d":2.0,"n":8},{"en":"How are you doing in the US?","s":5.7,"d":1.9,"n":7},{"en":"Did you get any mooncakes?","s":8.2,"d":1.6,"n":6},{"en":"We all miss you.","s":11.1,"d":2.3,"n":6}],"clipT":13.9}];
var SLOT = {"w":212,"h":300,"cx":1060,"cy":417,"il":-180.9,"it":-320.9};
var PH = MEMS[MEMS.length - 1].ph;
var CLIP = MEMS[MEMS.length - 1].clipT;
var LATEST = MEMS.length - 1;
var STAGES = ['idle', 'lifted', 'speaking', 'placed', 'open', 'saved', 'archive', 'revisit'];
var SAVED_AT = { saved: 1, archive: 1, revisit: 1 };
var SPINNING = { placed: 1, open: 1, saved: 1, revisit: 1 };
var FROZEN_T = { idle: 2.2, lifted: 2.4, speaking: 7.6, placed: 13.5, open: 2, saved: 2.6, archive: 2, revisit: 7.4 };
var SPIN = 4;
var VCX = 240, VCY = 417;
var TEMP = { cool: 29.8, mild: 32.6, warm: 34.4 };
var UNLIT = ['#AFAADA', '#B4AFDD', '#BAB4E0', '#C0BAE3', '#C7C1E7', '#CFC9EB', '#D7D1EF', '#DFDAF3', '#E8E4F7'];
var G_WARM = ['#C2A9D8', '#D1ACD2', '#E0B0C8', '#EBB5BC', '#F2BFB5', '#F7CDBE', '#FBDCCD', '#FEEDE4', '#FFFFFF'];
var G_MILD = ['#B6AEDE', '#C1B5E2', '#CCBCE5', '#D8C4E8', '#E4CDEB', '#EED8EF', '#F6E4F4', '#FBF1F8', '#FFFFFF'];
var G_COOL = ['#AAACE0', '#B2B8E6', '#BCC3EB', '#C7CEF0', '#D2D9F3', '#DEE3F6', '#E9EEF9', '#F4F6FC', '#FFFFFF'];
var TEXT = '#2F2A55', TEXT2 = '#4E4880', TEXT3 = '#7770A8', PILL_INK = '#5B4FA0';
var NRING = 16, NWAV = 12;
var RI = 0.36, RLIFE = 3.0;
var T_READ0 = 0.5, T_READ1 = 3.6, T_GLOW0 = 3.0, T_BLOOM0 = 6.2, T_PRINT0 = 6.2, T_READY = 8.6;
var BLOBS = [[0.70, 0.17, 0.00, 0.40], [0.40, 0.30, 0.08, 0.42], [0.80, 0.45, 0.12, 0.38], [0.25, 0.12, 0.16, 0.34], [0.45, 0.55, 0.22, 0.42],
  [0.55, 0.05, 0.28, 0.30], [0.15, 0.45, 0.30, 0.36], [0.60, 0.72, 0.35, 0.40], [0.25, 0.78, 0.42, 0.38], [0.92, 0.05, 0.46, 0.28],
  [0.80, 0.88, 0.48, 0.36], [0.05, 0.22, 0.52, 0.30], [0.50, 0.95, 0.56, 0.34], [0.10, 0.95, 0.62, 0.32]];
// the knob: one full turn of the vase is one year; clockwise looks back in time
var DEG_PER_DAY = 360 / 365;
var TL_W = 420, TL_Y = 60, READL = 150, PXD = 2.3;
var RAIL_W = 464;
function railX(day) { return 16 + day / 365 * 432; }
function railY(x) { return 24 + 2.4 * Math.sin(2 * Math.PI * x / RAIL_W * 1.15 + 0.5); }
var MONTHS = [['Jan', 0], ['Feb', 31], ['Mar', 59], ['Apr', 90], ['May', 120], ['Jun', 151], ['Jul', 181], ['Aug', 212], ['Sep', 243], ['Oct', 273], ['Nov', 304], ['Dec', 334], ['Jan', 365]];
var KNOB_R = 195, STRIP_L = 460;
var FROZEN_KNOB = MEMS.length > 1 ? MEMS[1].theta : 0;
var NEXT = { idle: 'lift', lifted: 'speak', speaking: 'place', placed: 'open', open: 'save', saved: 'revisit', archive: '', revisit: 'reset' };

function clamp(x, a, b) { return x < a ? a : (x > b ? b : x); }
function ease(x) { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); }
function hex2rgb(h) { return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)]; }
function mix(a, b, t) {
  var A = hex2rgb(a), B = hex2rgb(b), o = '#';
  for (var i = 0; i < 3; i++) {
    var v = Math.round(A[i] + (B[i] - A[i]) * t);
    o += (v < 16 ? '0' : '') + v.toString(16);
  }
  return o;
}
function rgba(hex, a) { var c = hex2rgb(hex); return 'rgba(' + c[0] + ', ' + c[1] + ', ' + c[2] + ', ' + a + ')'; }
function glowPal(w) {
  var out = [];
  for (var k = 0; k < 9; k++) out.push(w <= 0.5 ? mix(G_COOL[k], G_MILD[k], w / 0.5) : mix(G_MILD[k], G_WARM[k], (w - 0.5) / 0.5));
  return out;
}
function voiceEnvP(ph, ts) {
  for (var p = 0; p < ph.length; p++) {
    var x = (ts - ph[p].s) / ph[p].d;
    if (x > 0 && x < 1) {
      var f = (x * ph[p].n) % 1;
      return 0.45 + 0.55 * Math.sin(Math.PI * f);
    }
  }
  return 0;
}
function smoothEnvP(ph, ts) {
  var m = 0;
  for (var k = 0; k <= 10; k++) {
    var v = voiceEnvP(ph, ts - k * 0.07) * Math.exp(-k * 0.07 / 0.45);
    if (v > m) m = v;
  }
  return m;
}
function voiceEnv(ts) { return voiceEnvP(PH, ts); }
function smoothEnv(ts) { return smoothEnvP(PH, ts); }
function fmtTime(sec) {
  var v = Math.max(0, Math.floor(sec));
  var r = v % 60;
  return Math.floor(v / 60) + ':' + (r < 10 ? '0' : '') + r;
}
function f1(x) { return (Math.round(x * 10) / 10).toString(); }
function f3(x) { return (Math.round(x * 1000) / 1000).toString(); }
function frac(x) { return x - Math.floor(x); }
function lerp(a, b, t) { return a + (b - a) * t; }
function nearestMem(a) {
  var best = 0;
  for (var i = 0; i < MEMS.length; i++) if (Math.abs(MEMS[i].theta - a) < Math.abs(MEMS[best].theta - a)) best = i;
  return best;
}
function fitBox(m, maxW, maxH) {
  var r = m.sw / m.sh;
  var w = maxW, h = maxW / r;
  if (h > maxH) { h = maxH; w = maxH * r; }
  return { w: Math.round(w), h: Math.round(h) };
}
function linesFor(ph, tsT, playing) {
  return ph.map(function (p, idx) {
    var x = (tsT - p.s) / p.d;
    var wordsIn = p.en.split(' ');
    var shown = '';
    if (x >= 1) shown = p.en;
    else if (x > 0) shown = wordsIn.slice(0, Math.min(wordsIn.length, Math.floor(x * wordsIn.length) + 1)).join(' ');
    var until = idx < ph.length - 1 ? ph[idx + 1].s : 99;
    var active = x > 0 && tsT < until;
    return { txt: shown ? shown + ' ' : '', col: (playing && !active) ? TEXT3 : TEXT };
  });
}

function softRing(cx, cy, r, th, col, a) {
  var s = r + th;
  var x = Math.max(0, (r - th) / s * 100), y = r / s * 100;
  var c = hex2rgb(col).join(', ');
  return {
    x: f1(cx - s), y: f1(cy - s), s: f1(2 * s), o: f3(clamp(a, 0, 1)),
    b: 'radial-gradient(circle closest-side, rgba(' + c + ', 0) ' + f1(x) + '%, rgba(' + c + ', 1) ' + f1(y) + '%, rgba(' + c + ', 0) 100%)'
  };
}
var NO_RING = { x: 0, y: 0, s: 0, o: 0, b: 'none' };

// lower voices ripple in a few broad lobes, higher voices in many fine ones
var VOICE = { m: { k1: 3, k2: 5, sp: 1.5, amp: 13, ecc: 9 }, f: { k1: 7, k2: 11, sp: 3.1, amp: 7, ecc: 4 } };
function wavPath(radius, age, A, te, V) {
  V = V || VOICE.f;
  var n = GEO.ring.length, d = '';
  var round = clamp(age / 2.5, 0, 1);
  var amp = A * V.amp * (0.6 + 0.5 * age);
  for (var j = 0; j < n; j++) {
    var th = j * 2 * Math.PI / n;
    var base = radius * (GEO.ring[j] + (1 - GEO.ring[j]) * round);
    var r = base + amp * (0.6 * Math.sin(V.k1 * th + V.sp * te) + 0.4 * Math.sin(V.k2 * th - 0.8 * V.sp * te));
    d += (j ? ' L' : 'M') + f1(VCX + r * Math.cos(th)) + ' ' + f1(VCY + r * Math.sin(th));
  }
  return d + 'Z';
}
// a thin voice ripple around the vase: slightly off-centre, lobed by the voice
function ripplePath(radius, A, te, V, seed) {
  var d = '', n = 72;
  var cx = VCX + V.ecc * A * Math.cos(te * 0.8 + seed), cy = VCY + V.ecc * A * Math.sin(te * 1.1 + seed * 1.7);
  for (var j = 0; j < n; j++) {
    var th = j * 2 * Math.PI / n;
    var r = radius + V.amp * A * (0.65 * Math.sin(V.k1 * th + V.sp * te + seed) + 0.35 * Math.sin(V.k2 * th - 1.3 * V.sp * te));
    d += (j ? ' L' : 'M') + f1(cx + r * Math.cos(th)) + ' ' + f1(cy + r * Math.sin(th));
  }
  return d + 'Z';
}
function wOfTemp(tc) { return tc <= 32.6 ? clamp((tc - 29.8) / 2.8 * 0.5, 0, 0.5) : 0.5 + clamp((tc - 32.6) / 1.8 * 0.5, 0, 0.5); }
function tempWord(tc) { return tc < 31.4 ? 'cool hands' : (tc < 33.6 ? 'mild hands' : 'warm hands'); }

class Component extends DCLogic {
  componentDidMount() {
    this._alive = true;
    if (this.props && this.props.frozen) return;
    var self = this;
    var last = 0;
    var loop = function (ts) {
      if (!self._alive) return;
      if (ts - last > 32) { last = ts; self.tick(ts / 1000); }
      self._raf = window.requestAnimationFrame(loop);
    };
    this._raf = window.requestAnimationFrame(loop);
  }

  componentWillUnmount() {
    this._alive = false;
    if (this._raf) window.cancelAnimationFrame(this._raf);
    this.stopMic();
  }

  componentDidUpdate(prev) {
    var P = this.props || {};
    if (P.frozen || !prev) return;
    if (prev.stage !== P.stage) this.go(P.stage || 'idle', { saved: !!SAVED_AT[P.stage] });
    if (prev.hands !== P.hands) this.setState({ hands: null });
  }

  curStage(s) {
    var st = s.stage || (this.props && this.props.stage) || 'idle';
    return STAGES.indexOf(st) < 0 ? 'idle' : st;
  }

  spinAt(now, stage, s) {
    if (SPINNING[stage] && s.spin0 != null) return SPIN * (now - s.spin0);
    return s.spinHold != null ? s.spinHold : 0;
  }

  // ---- microphone (optional; falls back to the preset voice) -----------------
  stopMic() {
    var m = this._mic;
    this._mic = null;
    if (!m) return;
    try { m.stream.getTracks().forEach(function (tr) { tr.stop(); }); } catch (e) {}
    try { m.ctx.close(); } catch (e) {}
  }

  toggleMic() {
    var self = this;
    var s = this.state || {};
    if (s.mic === 'on') { this.stopMic(); this.setState({ mic: 'off' }); return; }
    try {
      var md = window.navigator && window.navigator.mediaDevices;
      if (!md || !md.getUserMedia) { this.setState({ mic: 'blocked' }); return; }
      md.getUserMedia({ audio: true }).then(function (stream) {
        var AC = window.AudioContext || window.webkitAudioContext;
        var ctx = new AC();
        var an = ctx.createAnalyser();
        an.fftSize = 1024;
        ctx.createMediaStreamSource(stream).connect(an);
        self._mic = { stream: stream, ctx: ctx, an: an, buf: new Float32Array(an.fftSize), hist: [], lvl: 0 };
        self.setState({ mic: 'on' });
      }).catch(function () { self.setState({ mic: 'blocked' }); });
    } catch (e) { this.setState({ mic: 'blocked' }); }
  }

  sampleMic(now) {
    var m = this._mic;
    if (!m) return;
    m.an.getFloatTimeDomainData(m.buf);
    var sum = 0;
    for (var i = 0; i < m.buf.length; i++) sum += m.buf[i] * m.buf[i];
    var rms = Math.sqrt(sum / m.buf.length);
    m.lvl = m.lvl * 0.6 + clamp(rms * 9, 0, 1) * 0.4;
    m.hist.push([now, m.lvl]);
    while (m.hist.length && m.hist[0][0] < now - RLIFE - 0.5) m.hist.shift();
  }

  micSmooth(absT) {
    var m = this._mic;
    if (!m || !m.hist.length) return 0;
    var best = 0;
    for (var i = 0; i < m.hist.length; i++) {
      var dt = absT - m.hist[i][0];
      if (dt < 0 || dt > 0.8) continue;
      var v = m.hist[i][1] * Math.exp(-dt / 0.45);
      if (v > best) best = v;
    }
    return best;
  }

  micAt(absT) {
    var m = this._mic;
    if (!m || !m.hist.length) return 0;
    var best = m.hist[0];
    for (var i = 0; i < m.hist.length; i++) if (Math.abs(m.hist[i][0] - absT) < Math.abs(best[0] - absT)) best = m.hist[i];
    return best[1];
  }


  // ---- knob and draggable shards ------------------------------------------------
  kn() {
    if (!this._kn) this._kn = { a: 0, target: 0, drag: false, last: 0 };
    return this._kn;
  }

  off(id) {
    if (!this._off) this._off = {};
    if (!this._off[id]) this._off[id] = { x: 0, y: 0, vx: 0, vy: 0 };
    return this._off[id];
  }

  hoverTilt(e) {
    var el = e && e.currentTarget;
    if (!el || !el.getBoundingClientRect) return;
    var r = el.getBoundingClientRect();
    if (!r.width || !r.height) return;
    this.setState({ tp: { x: clamp((e.clientX - r.left) / r.width, 0, 1), y: clamp((e.clientY - r.top) / r.height, 0, 1) } });
  }

  dragFns(id, boxW, onTap) {
    var self = this;
    return {
      down: function (e) {
        if (!e || !e.currentTarget) return;
        var el = e.currentTarget;
        var r = el.getBoundingClientRect();
        var sc = r.width ? r.width / boxW : 1;
        var o = self.off(id);
        self._dr = { id: id, x0: e.clientX, y0: e.clientY, ox: o.x, oy: o.y, sc: sc > 0.05 ? sc : 1, moved: false, lx: e.clientX, ly: e.clientY };
        try { el.setPointerCapture(e.pointerId); } catch (err) {}
      },
      move: function (e) {
        var d = self._dr;
        if (!d || d.id !== id) { self.hoverTilt(e); return; }
        var dx = (e.clientX - d.x0) / d.sc, dy = (e.clientY - d.y0) / d.sc;
        if (Math.abs(dx) + Math.abs(dy) > 6) d.moved = true;
        var o = self.off(id);
        o.vx = (e.clientX - d.lx) / d.sc; o.vy = (e.clientY - d.ly) / d.sc;
        d.lx = e.clientX; d.ly = e.clientY;
        o.x = d.ox + dx; o.y = d.oy + dy;
      },
      up: function (e) {
        var d = self._dr;
        if (!d || d.id !== id) return;
        self._dr = null;
        if (d.moved) self._noClick = true;
        try { e.currentTarget.releasePointerCapture(e.pointerId); } catch (err) {}
      },
      click: function () {
        if (self._noClick) { self._noClick = false; return; }
        if (onTap) onTap();
      },
      leave: function () { if (!self._dr) self.setState({ tp: null }); }
    };
  }

  turnTo(i) {
    var k = this.kn();
    i = clamp(i, 0, MEMS.length - 1);
    k.target = MEMS[i].theta;
  }

  knobFns() {
    var self = this;
    var lo = -25, hi = MEMS[0].theta + 25;
    var ang = function (e) {
      var r = e.currentTarget.getBoundingClientRect();
      return Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180 / Math.PI;
    };
    return {
      down: function (e) {
        if (!e || !e.currentTarget) return;
        var k = self.kn();
        k.drag = true; k.last = ang(e);
        try { e.currentTarget.setPointerCapture(e.pointerId); } catch (err) {}
      },
      move: function (e) {
        var k = self.kn();
        if (!k.drag) return;
        var a = ang(e), d = a - k.last;
        if (d > 180) d -= 360;
        if (d < -180) d += 360;
        k.last = a;
        k.a = clamp(k.a + d, lo, hi);
        k.target = k.a;
      },
      up: function (e) {
        var k = self.kn();
        if (!k.drag) return;
        k.drag = false;
        k.target = MEMS[nearestMem(k.a)].theta;
        try { e.currentTarget.releasePointerCapture(e.pointerId); } catch (err) {}
      },
      key: function (e) {
        var i = nearestMem(self.kn().target);
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { self.turnTo(i - 1); e.preventDefault(); }
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { self.turnTo(i + 1); e.preventDefault(); }
      }
    };
  }

  tick(now) {
    var s = this.state || {};
    var stage = this.curStage(s);
    this.sampleMic(now);
    var tgt = s.tp || { x: 0.5 + 0.22 * Math.sin(now * 0.45), y: 0.5 + 0.16 * Math.cos(now * 0.37) };
    var cur = this._tv || tgt;
    this._tv = { x: cur.x + (tgt.x - cur.x) * 0.16, y: cur.y + (tgt.y - cur.y) * 0.16 };
    var k = this.kn();
    if (!k.drag) k.a += (k.target - k.a) * 0.18;
    if (this._off) {
      for (var id in this._off) {
        var o = this._off[id];
        if (!this._dr || this._dr.id !== id) {
          o.x *= 0.84; o.y *= 0.84;
          if (Math.abs(o.x) < 0.2) o.x = 0;
          if (Math.abs(o.y) < 0.2) o.y = 0;
        }
        o.vx *= 0.8; o.vy *= 0.8;
      }
    }
    if (s.t0 == null) {
      var up = { now: now, t0: now };
      if (SPINNING[stage]) up.spin0 = now;
      if (stage === 'revisit') up.play0 = now;
      this.setState(up);
      return;
    }
    if (stage === 'saved' && now - s.t0 > 7.5) { this.go('idle', { saved: true }); return; }
    this.setState({ now: now });
  }

  go(stage, extra) {
    if (this.props && this.props.frozen) return;
    var now = window.performance.now() / 1000;
    var s = this.state || {};
    var cur = this.curStage(s);
    var hold = this.spinAt(now, cur, s);
    var o = { stage: stage, t0: now, now: now, spinHold: hold };
    if (SPINNING[stage]) o.spin0 = (SPINNING[cur] && s.spin0 != null) ? s.spin0 : now - hold / SPIN;
    if (stage === 'revisit') { o.mode = 'listen'; o.play0 = now; }
    if (extra) { for (var k in extra) o[k] = extra[k]; }
    if (extra && extra.back != null) o.t0 = now - extra.back;
    this._dr = null;
    this.setState(o);
    window.dispatchEvent(new CustomEvent('heirloom:stage', { detail: { stage: stage } }));
  }

  renderVals() {
    var self = this;
    var s = this.state || {};
    var P = this.props || {};
    var frozen = !!P.frozen;
    var live = !frozen;
    var stage = this.curStage(s);
    var now, t;
    if (frozen) { t = P.at != null ? parseFloat(P.at) : FROZEN_T[stage]; now = t + 10; }
    else { now = s.now || 0; t = s.t0 == null ? 0 : Math.max(0, now - s.t0); }
    var saved = s.saved != null ? s.saved : !!SAVED_AT[stage];
    var handsKey = s.hands || P.hands || 'mild';
    var w = handsKey === 'cool' ? 0 : (handsKey === 'warm' ? 1 : 0.5);
    var mode = s.mode || 'listen';
    var mi = s.mem != null ? s.mem : LATEST;
    var M = MEMS[mi];
    var pt = frozen ? t - 0.5 : (now - (s.play0 != null ? s.play0 : (s.t0 != null ? s.t0 : now))) - 0.5;
    var spin = frozen ? (SPINNING[stage] ? t * SPIN : 0) : this.spinAt(now, stage, s);
    var act = function (fn) { return frozen ? function () {} : fn; };
    var micOn = live && s.mic === 'on' && !!this._mic;
    var pal = glowPal(w);
    var isP = stage === 'placed';
    var ready = isP && t >= T_READY;
    var listen = stage === 'revisit' && mode === 'listen';
    var breath = 0.5 + 0.5 * Math.sin(now * 2 * Math.PI / 5.5);
    var K = this.kn();
    var kA = frozen ? (stage === 'archive' ? (P.knob != null ? parseFloat(P.knob) : FROZEN_KNOB) : 0) : K.a;
    var inArc = stage === 'archive';
    var sel = nearestMem(kA);
    var dr = this._dr;
    // each record keeps its own warmth and voice; while turning, warmth blends between neighbours
    var tempOf = function (m) { return m.id === 'ma' ? TEMP[handsKey] : m.temp; };
    var tempAt = function (a) {
      for (var i = 0; i < MEMS.length - 1; i++) {
        var hi = MEMS[i], lo = MEMS[i + 1];
        if (a <= hi.theta && a >= lo.theta) return lerp(tempOf(lo), tempOf(hi), ease((a - lo.theta) / (hi.theta - lo.theta)));
      }
      return a > MEMS[0].theta ? tempOf(MEMS[0]) : tempOf(MEMS[LATEST]);
    };
    var tempArc = inArc ? tempAt(kA) : tempOf(M);
    if (inArc || stage === 'revisit') pal = glowPal(wOfTemp(tempArc));
    var curVoice = VOICE[(inArc ? MEMS[sel] : M).voice] || VOICE.m;

    // ---- vase seen from above: soft nested layers lit from inside --------------
    var vaseO = 1;
    if (stage === 'lifted') vaseO = 1 - ease(t / 0.5);
    else if (stage === 'speaking') vaseO = 0;
    else if (isP) vaseO = ease(t / 0.9);
    var env = listen ? voiceEnvP(M.ph, pt) : 0;
    var vl = {};
    for (var k = 0; k < 9; k++) {
      var l;
      if (stage === 'idle') l = (saved ? 0.2 : 0.08) + 0.06 * breath;
      else if (isP) l = ease((t - T_GLOW0 - (8 - k) * 0.2) / 0.8);
      else if (stage === 'open' || stage === 'revisit') l = 0.85 + 0.15 * (listen ? env : breath);
      else if (stage === 'saved') l = 1 - 0.75 * ease(t / 3);
      else if (inArc) l = 0.72 + (K.drag ? 0.2 : 0);
      else l = 0;
      vl['c' + k] = mix(UNLIT[k], pal[k], l);
    }
    var vase = { o: f3(vaseO), rot: f3(inArc ? kA : spin % 360), fill: vl };

    var haze = 0;
    if (stage === 'idle') haze = (saved ? 0.18 : 0.08) + 0.06 * breath;
    else if (isP) haze = ease((t - 0.4) / 1.0) * (1 - 0.35 * ease((t - 6) / 2));
    else if (stage === 'open') haze = 0.6;
    else if (stage === 'saved') haze = 0.6 - 0.4 * ease(t / 3);
    else if (inArc) haze = 0.32;
    else if (stage === 'revisit') haze = 0.55 + 0.3 * env;
    var halo = { o: f3(haze), c1: pal[6], c2: pal[3] };
    var slotGlow = 0;
    if (isP) slotGlow = ease((t - T_BLOOM0 + 0.6) / 1.6);
    else if (stage === 'open' || stage === 'revisit') slotGlow = 0.8;
    else if (stage === 'saved') slotGlow = 0.8 * (1 - ease(t / 1.6));
    var glow2 = { o: f3(slotGlow * 0.75), c1: pal[5], c2: pal[2] };

    // loading dots (GPTea-like), progress arc and warmth reading
    var load = isP ? ease((t - T_READ0) / 0.8) * (1 - ease((t - 4.6) / 1.2)) : 0;
    var dots = {};
    for (var di = 0; di < GEO.dots.length; di++) {
      if (load <= 0.001) { dots['r' + di] = 0; continue; }
      var D = GEO.dots[di];
      var wave = 0.5 + 0.5 * Math.sin(0.05 * D[2] - 5 * t + 2 * Math.cos(D[3] - 0.6));
      var fall = Math.pow(clamp(1 - (D[2] - 126) / 140, 0, 1), 0.7);
      dots['r' + di] = f1((0.4 + 4.6 * wave * fall) * load);
    }
    dots.o = f3(0.9 * load);
    var prog = isP ? ease((t - T_READ0) / (T_READ1 - T_READ0)) : 0;
    var arcO = isP ? ease((t - T_READ0) / 0.4) * (1 - ease((t - 3.9) / 0.8)) : 0;
    var arc = { a: f1(942.5 * prog), o: f3(arcO * 0.9), c: pal[7] };
    var tempNow = 24 + (TEMP[handsKey] - 24) * prog;

    // ---- soft rings: voice only; nothing travels across the screen ------------
    var R = [], WV = [];
    var voiceRings = function (tt, envFn, colFn, gain) {
      var n = Math.ceil(RLIFE / RI);
      for (var i = 0; i < n; i++) {
        var age = (tt % RI) + i * RI;
        var te = tt - age;
        if (tt < 0 || age > RLIFE) continue;
        var A = envFn(te, age);
        if (A == null) continue;
        var rr = 38 + 130 * age;
        var a = Math.pow(1 - age / RLIFE, 2.4) * (0.1 + 0.62 * A) * gain;
        R.push(softRing(VCX, VCY, rr, 3 + 9 * A + 5 * age, colFn(A), a));
        if (i < 7) WV.push({ d: wavPath(rr, age, A, te, curVoice), o: f3(a * 0.6), w: f3(0.6 + 0.8 * A), c: colFn(A) });
      }
    };
    var voiceNow = 0;
    var white = function (A) { return mix('#EEEAFF', '#FFFFFF', A); };
    if (stage === 'lifted') {
      voiceRings(t, function (te, age) { return te < 0 ? null : (micOn ? 0.18 + 0.82 * self.micSmooth(now - age) : 0.2 + 0.05 * Math.sin(te * 2)); }, white, 1);
      voiceNow = (micOn ? 0.18 + 0.82 * this.micSmooth(now) : 0.2) * ease(t / 0.6);
    } else if (stage === 'speaking') {
      voiceRings(t, function (te, age) { return micOn ? 0.18 + 0.82 * self.micSmooth(now - age) : (te >= 0 ? 0.2 + 0.8 * smoothEnv(te) : 0.2); }, white, 1);
      voiceNow = micOn ? 0.18 + 0.82 * this.micSmooth(now) : 0.2 + 0.8 * smoothEnv(t);
    } else if (listen) {
      voiceRings(pt + 0.5, function (te) { return (te < 0.5 || te > 1.3 + M.clipT) ? null : 0.2 + 0.8 * smoothEnvP(M.ph, te - 0.5); },
        function (A) { return mix(pal[5], pal[8], A * 0.6); }, 0.9);
    }
    var vg = { o: 0 };
    if (stage === 'lifted' || stage === 'speaking') vg.o = f3(0.2 + 0.55 * voiceNow);
    else if (isP) vg.o = f3(0.3 * (1 - ease(t / 1.0)));
    if (isP && t < 1.2) voiceRings(t, function (te) { return te < 0 ? 0.2 : null; }, white, 0.8 * (1 - ease(t / 1.2)));
    if (stage === 'idle' || stage === 'open' || (stage === 'revisit' && mode === 'read')) {
      for (var q = 0; q < 2; q++) {
        var pq = frac(now / 5.5 + q / 2);
        var col = stage === 'idle' ? '#FFFFFF' : pal[7];
        var amp = stage === 'idle' ? (saved ? 0.3 : 0.2) : 0.34;
        R.push(softRing(VCX, VCY, KNOB_R + 8 + 64 * pq, 18, col, amp * Math.sin(Math.PI * pq)));
      }
    }
    var rn = {};
    for (var r1 = 0; r1 < NRING; r1++) {
      var rg = R[r1] || NO_RING;
      rn['x' + r1] = rg.x; rn['y' + r1] = rg.y; rn['s' + r1] = rg.s; rn['o' + r1] = rg.o; rn['b' + r1] = rg.b;
    }
    var wv = {};
    for (var w1 = 0; w1 < NWAV; w1++) {
      var wg = WV[w1] || { d: 'M0 0', o: 0, w: 1, c: TEXT };
      wv['d' + w1] = wg.d; wv['o' + w1] = wg.o; wv['w' + w1] = wg.w; wv['c' + w1] = wg.c;
    }

    // ---- words -----------------------------------------------------------------------
    var status = 'Listening';
    if (isP) {
      if (t < 3.6) status = 'Reading warmth · ' + tempNow.toFixed(1) + ' °C';
      else if (t < T_BLOOM0) status = 'Warmth into light';
      else if (t < T_READY) status = 'The image is coming through';
      else status = 'Ready · tap the shard';
    }
    var dotO = 0.5;
    if (stage === 'lifted') dotO = 0.55 + 0.45 * Math.sin(now * 3);
    if (stage === 'speaking') dotO = micOn ? 0.3 + 0.7 * this.micAt(now) : 0.3 + 0.7 * voiceEnv(t);
    var show = {
      prompt: stage === 'idle',
      ready: stage === 'lifted',
      status: stage === 'speaking' || isP,
      kept: stage === 'saved',
      revisit: stage === 'revisit',
      prog: listen && pt <= M.clipT + 0.3,
      again: listen && pt > M.clipT + 0.3,
      card: (isP && t >= T_PRINT0) || stage === 'saved',
      rvcard: stage === 'revisit',
      hint: ready,
      open: stage === 'open',
      archive: inArc,
      knob: inArc,
      turn: inArc && live,
      wizard: live && P.showWizard !== false,
      unused: false
    };
    var words = {
      promptO: f3(ease(t / 0.8)),
      readyO: f3(ease((t - 0.3) / 0.6)),
      status: status,
      dotO: f3(dotO),
      keptO: f3(ease((t - 0.9) / 0.8))
    };
    var tsT = stage === 'speaking' ? t : 99;
    var lines = linesFor(PH, tsT, false);
    var playing = listen && pt < M.clipT;
    var rvLines = linesFor(M.ph, listen ? pt : 99, playing);

    // ---- the image as a shard at the far right --------------------------------------
    var activeId = (isP || stage === 'saved') ? 'slot' : (stage === 'open' ? 'open' : (stage === 'revisit' ? 'rv' : ''));
    var AO = activeId ? this.off(activeId) : { x: 0, y: 0, vx: 0, vy: 0 };
    var dragging = !!(dr && dr.id === activeId);
    var card = { tx: 0, ty: 0, sc: 1, o: 1, fullO: 1,
      img: s.apiImage || 'assets/images/mid-autumn.jpg',
      imageStyle: s.apiImage ? 'left: 0; top: 0; width: 100%; height: 100%; object-fit: cover' : 'left: -85.33%; top: -106.98%; width: 185.33%; height: 217.89%' };
    var blobs = [];
    if (isP) {
      card.o = t >= T_BLOOM0 ? 1 : 0;
      if (s.apiPending) card.o = 0;
      card.fullO = ease((t - T_BLOOM0 - 1.5) / 0.7);
      if (t > T_BLOOM0 && t < T_BLOOM0 + 2.4) {
        BLOBS.forEach(function (b) {
          var qb = clamp((t - T_BLOOM0 - b[2]) / 1.1, 0, 1);
          var r = b[3] * SLOT.w * (1 - Math.pow(1 - qb, 3));
          if (r < 1) return;
          var x = b[0] * SLOT.w, y = b[1] * SLOT.h;
          blobs.push({ x: f1(x - r), y: f1(y - r), s: f1(2 * r), ix: f1(SLOT.il - (x - r)), iy: f1(SLOT.it - (y - r)) });
        });
      }
    } else if (stage === 'saved') {
      var q2 = ease(t / 1.6);
      card.tx = (VCX - SLOT.cx) * q2;
      card.ty = (VCY - SLOT.cy) * q2;
      card.sc = 1 - 0.85 * q2;
      card.o = 1 - Math.pow(q2, 3);
    }
    card.tx += AO.x; card.ty += AO.y;
    // floating 3D: tilt follows touch or drag, otherwise a slow idle sway; light and shadow follow the tilt
    var tv = frozen ? { x: 0.5 + 0.22 * Math.sin(now * 0.45), y: 0.5 + 0.16 * Math.cos(now * 0.37) } : (this._tv || { x: 0.5, y: 0.5 });
    var pfc = Math.min(1, Math.hypot(tv.x - 0.5, tv.y - 0.5) * 2.2);
    var fo = card.fullO;
    var rx = (0.5 - tv.y) * 14, ry = (tv.x - 0.5) * 18;
    if (dragging) { rx = clamp(-AO.vy * 1.4, -22, 22); ry = clamp(AO.vx * 1.4, -22, 22); }
    var tl = {
      rx: f3(rx), ry: f3(ry), s: dragging ? 1.07 : (s.tp ? 1.03 : 1),
      sx1: f1(-(tv.x - 0.5) * 12), sy1: f1((dragging ? 18 : 10) + (0.5 - tv.y) * 8), sx2: f1(-(tv.x - 0.5) * 30), sy2: f1((dragging ? 40 : 26) + (0.5 - tv.y) * 16),
      bx: f1(tv.x * 140), by: f1(tv.y * 100), gx: f1(tv.x * 100), gy: f1(tv.y * 100),
      rain: f3((0.26 + 0.2 * pfc) * fo), glare: f3((0.2 + 0.4 * pfc) * fo), spec: f3((0.18 + 0.3 * pfc + (dragging ? 0.2 : 0)) * fo),
      fy: f1(live ? 4 * Math.sin(now * 0.9) : 0)
    };
    ['tx', 'ty', 'sc', 'o', 'fullO'].forEach(function (key) { card[key] = f3(card[key]); });
    card.ty2 = f1(+card.ty + +tl.fy);
    card.glow = rgba(pal[7], 0.55);
    var hint = { o: f3(ease((t - T_READY) / 0.6)) };
    var slotFns = this.dragFns('slot', SLOT.w, function () { if (self.curStage(self.state || {}) === 'placed') { var st = self.state || {}; var tt = (st.now || 0) - (st.t0 || 0); if (tt >= T_READY) self.go('open', { saved: saved }); } });
    var openFns = this.dragFns('open', 337, null);
    var rvFns = this.dragFns('rv', 250, null);
    var fnsFor = function (f) { return { down: act(f.down), move: act(f.move), up: act(f.up), click: act(f.click), leave: act(f.leave) }; };

    // the revisited memory's shard
    var bx = fitBox(M, 250, 300);
    var rvc = {
      w: bx.w, h: bx.h, l: f1(SLOT.cx - bx.w / 2), t: f1(VCY - bx.h / 2), clip: M.clip, img: M.img,
      il: M.emb.l, it: M.emb.t, iw: M.emb.w, ih: M.emb.h, alt: M.alt
    };

    // ---- open sheet ------------------------------------------------------------------------
    var sheet = { o: f3(ease(t / 0.45)), y: f1(16 * (1 - ease(t / 0.45))) };

    // ---- archive: the vase as a knob, the timeline and the shard vase -----------------------
    var curDay = MEMS[LATEST].day - kA / DEG_PER_DAY;
    var X = function (day) { return READL + (day - curDay) * PXD; };
    var S = MEMS[sel];
    var knots = MEMS.map(function (m, i) {
      var x = X(m.day);
      return { l: f1(x - 3.5), o: i === sel ? 0 : 1 };
    });
    var months = MONTHS.map(function (mo) {
      var x = X(mo[1]);
      return { l: f1(x), lt: f1(x - 16), label: mo[0] };
    });
    // two threads weave through the records: a solid one and a dotted one, crossing at each record
    var nodes = [MEMS[0].day - 80].concat(MEMS.map(function (m) { return m.day; })).concat([MEMS[LATEST].day + 80]);
    var thread = function (k) {
      var d = '';
      for (var x = -12; x <= TL_W + 12; x += 6) {
        var day = curDay + (x - READL) / PXD, j = 0;
        while (j < nodes.length - 2 && day > nodes[j + 1]) j++;
        var a0 = nodes[j], a1 = nodes[j + 1];
        var u = clamp((day - a0) / (a1 - a0), 0, 1);
        var amp = Math.min(22, (a1 - a0) * PXD * 0.14);
        var sg = (j % 2 ? 1 : -1) * (k ? -0.72 : 1);
        var y = TL_Y + sg * amp * Math.sin(Math.PI * u) + (k ? 2.5 * Math.sin(u * 2 * Math.PI) : 0);
        d += (d ? ' L' : 'M') + f1(x) + ' ' + f1(y);
      }
      return d;
    };
    var mX = X(S.day);
    var bandL = clamp(X(MEMS[0].day), -20, TL_W + 20), bandR = clamp(X(MEMS[LATEST].day), -20, TL_W + 20);
    var ex = S.text.length > 92 ? S.text.slice(0, S.text.lastIndexOf(' ', 88)).replace(/[.,?!]+$/, '') + '…' : S.text;
    var tline = {
      threadA: thread(0), threadB: thread(1),
      bandL: f1(bandL), bandW: f1(Math.max(0, bandR - bandL)),
      mL: f1(mX - 10), leadL: f1(mX - 0.5),
      label: S.label, date: S.date, meta: S.speaker + ' · ' + S.dur + ' · ' + tempOf(S).toFixed(1) + ' °C held', ex: ex,
      count: MEMS.length + ' records kept with this vase',
      open: act(function () { self.go('revisit', { saved: true, mem: nearestMem(self.kn().a) }); })
    };

    // ---- record rail: a dot appears once a record is kept; in the archive it follows the vase --------
    var inArchive = inArc || stage === 'revisit';
    var hasKept = saved && !(stage === 'saved' && t < 1.4);
    var rq = stage === 'saved' ? clamp((t - 1.4) / 1.4, 0, 1) : 1;
    var railDay = inArc ? curDay : (stage === 'revisit' ? M.day : MEMS[LATEST].day);
    var rx0 = railX(clamp(railDay, 0, 365));
    var rail = {
      kO: hasKept ? (stage === 'saved' ? f3(ease((t - 1.4) / 0.4)) : 1) : 0,
      mx: f1(rx0), my: f1(railY(rx0)), lx: f1(rx0 - 45),
      date: inArc ? S.date : (stage === 'revisit' ? M.date : MEMS[LATEST].date),
      ringR: f1(5 + 12 * rq),
      ringO: stage === 'saved' ? f3(0.6 * (1 - rq)) : 0,
      label: inArchive ? 'Close' : 'Archive',
      act: act(function () { if (inArchive) self.go('idle'); else self.go('archive', { saved: true }); })
    };
    MEMS.forEach(function (m, i) {
      var x = railX(m.day);
      rail['x' + i] = f1(x); rail['y' + i] = f1(railY(x)); rail['o' + i] = inArchive ? 0.6 : 0;
    });
    var arcv = { o: f3(ease(t / 0.5)), y: f1(-14 * (1 - ease(t / 0.5))) };

    // voice ripples around the vase, the warmth bloom at its centre, and a faint thread into the timeline
    var arcR = {}, NR = 7, RIP_I = 0.45, RIP_L = 2.9;
    var SV = MEMS[sel], VV = VOICE[SV.voice] || VOICE.m, per = SV.clipT + 1.2;
    var envAt = function (tt) { return 0.12 + 0.88 * smoothEnvP(SV.ph, ((tt % per) + per) % per); };
    var ringCol = mix('#FFFFFF', pal[4], 0.35);
    for (var ri = 0; ri < NR; ri++) {
      var ag = (now % RIP_I) + ri * RIP_I, te2 = now - ag;
      var Ar = envAt(te2);
      var on = inArc && ag <= RIP_L;
      arcR['d' + ri] = on ? ripplePath(KNOB_R + 4 + 30 * ag, Ar, te2, VV, ri * 0.9) : 'M0 0';
      arcR['o' + ri] = on ? f3(Math.pow(1 - ag / RIP_L, 1.5) * (0.14 + 0.55 * Ar)) : 0;
      arcR['w' + ri] = f3(0.55 + 0.5 * Ar);
    }
    var Anow = envAt(now);
    for (var oi = 0; oi < 3; oi++) {
      arcR['od' + oi] = inArc ? ripplePath(KNOB_R + 10 + oi * 7, 0.55 + 0.45 * Anow, now * 0.35 + oi * 2.1, VV, oi * 2.3) : 'M0 0';
    }
    arcR.c = ringCol;
    var sx0 = VCX + KNOB_R + 20, sx1 = STRIP_L + mX - 14, dth = '';
    if (sx1 > sx0 + 10) {
      for (var xx = sx0; xx <= sx1; xx += 4) {
        var uu = (xx - sx0) / (sx1 - sx0);
        dth += (dth ? ' L' : 'M') + f1(xx) + ' ' + f1(VCY + 4.5 * Anow * Math.sin((xx - sx0) / (VV.k1 > 4 ? 5 : 9) - now * 4) * Math.sin(Math.PI * uu));
      }
    }
    arcR.thread = dth || 'M0 0';
    arcR.threadO = dth ? 0.26 : 0;
    // warmth bloom: warmer hands give a larger, rounder, coral bloom; cooler hands a smaller, tighter, periwinkle one
    var wT = wOfTemp(tempArc);
    var tb = [];
    for (var bi = 0; bi < 3; bi++) {
      var ang = now * 0.25 + bi * 2.1 + kA * Math.PI / 180;
      var off = 4 + 20 * wT, sz = 118 + 92 * wT - bi * 16, sq = 0.74 + 0.26 * wT;
      tb.push({
        l: f1(VCX + off * Math.cos(ang) - sz / 2), t: f1(VCY + off * Math.sin(ang) - sz * sq / 2), w: f1(sz), h: f1(sz * sq),
        r: f1(ang * 57.3 * 0.3), c: bi === 0 ? pal[7] : pal[5 - bi], o: f3((inArc || stage === 'revisit') ? 0.55 - bi * 0.12 : 0)
      });
    }
    var tread = { t: tempArc.toFixed(1) + ' °C held', word: tempWord(tempArc), c: pal[3], voice: SV.speaker + ' · ' + (SV.voice === 'm' ? 'lower voice' : 'higher voice') };
    var rdots = MEMS.map(function (m, i) {
      var ph = (-90 + (kA - m.theta)) * Math.PI / 180, on = i === sel, rr = on ? 5.5 : 3.5;
      return { l: f1(VCX + (KNOB_R + 16) * Math.cos(ph) - rr), t: f1(VCY + (KNOB_R + 16) * Math.sin(ph) - rr), d: f1(2 * rr), o: on ? 1 : 0.7 };
    });
    var knob = { arrowO: f3(K.drag ? 1 : 0.7), kf: null };
    var KF = this.knobFns();
    knob.down = act(KF.down); knob.move = act(KF.move); knob.up = act(KF.up); knob.key = act(KF.key);
    var mshards = MEMS.map(function (m, i) {
      var id = 'v' + i, o = self.off(id), isDr = !!(dr && dr.id === id);
      var c = clamp(1 - Math.abs(kA - m.theta) / 28, 0, 1);
      var sw = now * 0.7 + i * 1.9;
      var srx = 5 * Math.sin(sw), sry = 6 * Math.cos(sw * 0.8);
      if (isDr) { srx = clamp(-o.vy * 1.4, -24, 24); sry = clamp(o.vx * 1.4, -24, 24); }
      var gx = 50 + sry * 3, gy = 50 - srx * 3;
      var F = self.dragFns(id, m.sw, function () {
        if (nearestMem(self.kn().a) === i) self.go('revisit', { saved: true, mem: i });
        else self.turnTo(i);
      });
      return {
        x: m.sx, y: m.sy, w: m.sw, h: m.sh, clip: m.clip, img: m.img, il: m.emb.l, it: m.emb.t, iw: m.emb.w, ih: m.emb.h,
        tx: f1(o.x), ty: f1(o.y - 7 * c), sc: f3(1 + 0.14 * c + (isDr ? 0.1 : 0)), rx: f3(srx), ry: f3(sry),
        z: isDr ? 40 : (c > 0.5 ? 30 : 10 + i), sy1: f1(4 + 6 * c + (isDr ? 10 : 0)), sy2: f1(10 + 12 * c + (isDr ? 18 : 0)),
        glow: 'rgba(255, 255, 255, ' + f3(0.15 + 0.7 * c) + ')', spec: f3(0.2 + 0.45 * c + (isDr ? 0.2 : 0)), gx: f1(gx), gy: f1(gy),
        label: 'Record from ' + m.date + ', ' + m.label,
        down: act(F.down), move: act(F.move), up: act(F.up), click: act(F.click), leave: act(F.leave)
      };
    });

    // ---- revisit controls ---------------------------------------------------------------------
    var rv = {
      listen: act(function () { self.setState({ mode: 'listen', play0: window.performance.now() / 1000 }); }),
      read: act(function () { self.setState({ mode: 'read' }); }),
      again: act(function () { self.setState({ mode: 'listen', play0: window.performance.now() / 1000 }); }),
      lBg: mode === 'listen' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.42)',
      lFg: mode === 'listen' ? PILL_INK : TEXT,
      lp: mode === 'listen' ? 'true' : 'false',
      rBg: mode === 'read' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.42)',
      rFg: mode === 'read' ? PILL_INK : TEXT,
      rp: mode === 'read' ? 'true' : 'false',
      pw: f1(200 * clamp(pt / M.clipT, 0, 1)),
      pc: '#FFFFFF',
      time: fmtTime(clamp(pt, 0, M.clipT)) + ' / ' + fmtTime(M.clipT),
      hO: f3(ease(t / 0.5)),
      date: M.date,
      meta: M.label + ' · ' + M.speaker
    };

    // ---- wizard strip ---------------------------------------------------------------------------
    var nx = NEXT[stage];
    if (stage === 'speaking' && t < 13.6) nx = '';
    if (isP && !ready) nx = '';
    var stepDefs = [
      ['lift', 'Lift', function () { self.go('lifted', { saved: false }); }],
      ['speak', 'Speak', function () { self.go('speaking', { saved: false }); }],
      ['place', 'Place', function () { self.go('placed', { saved: false }); }],
      ['open', 'Open', function () { self.go('open', { saved: false }); }],
      ['save', 'Save', function () { self.go('saved', { saved: true }); }],
      ['revisit', 'Revisit', function () { self.go('archive', { saved: true }); }]
    ];
    var steps = stepDefs.map(function (d) {
      var on = d[0] === nx;
      return { label: d[1], go: act(d[2]), bg: on ? '#FFFFFF' : 'transparent', fg: on ? PILL_INK : TEXT };
    });
    var hands = [['cool', 'Cool'], ['mild', 'Mild'], ['warm', 'Warm']].map(function (h) {
      var on = h[0] === handsKey;
      return {
        label: h[1],
        go: act(function () { self.setState({ hands: h[0] }); }),
        bg: on ? 'rgba(124, 115, 184, 0.2)' : 'transparent',
        pressed: on ? 'true' : 'false'
      };
    });
    var micLabel = s.mic === 'on' ? 'Mic on' : (s.mic === 'blocked' ? 'No mic' : 'Mic');
    var resetOn = nx === 'reset';
    var turn = {
      cw: act(function () { self.turnTo(nearestMem(self.kn().target) - 1); }),
      ccw: act(function () { self.turnTo(nearestMem(self.kn().target) + 1); })
    };

    return {
      show: show, vase: vase, halo: halo, glow2: glow2, dots: dots, arc: arc, rn: rn, wv: wv, vg: vg,
      words: words, lines: lines, rvLines: rvLines, card: card, blobs: blobs, tl: tl, hint: hint, sheet: sheet, rail: rail, arcv: arcv, rv: rv, rvc: rvc,
      note: { text: s.apiStory || 'Today is the Mid-Autumn Festival. We made mooncakes ourselves. How are you doing in the US? Did you get any mooncakes? We all miss you.' },
      slot: fnsFor(slotFns), opn: fnsFor(openFns), rvf: fnsFor(rvFns),
      knots: knots, months: months, tline: tline, rdots: rdots, knob: knob, mshards: mshards, turn: turn, arcR: arcR, tb: tb, tread: tread,
      steps: steps, hands: hands,
      mic: { label: micLabel, go: act(function () { self.toggleMic(); }), bg: s.mic === 'on' ? 'rgba(124, 115, 184, 0.2)' : 'transparent', pressed: s.mic === 'on' ? 'true' : 'false' },
      resetBg: resetOn ? '#FFFFFF' : 'transparent',
      resetFg: resetOn ? PILL_INK : TEXT,
      reset: act(function () { self.stopMic(); self.go('idle', { saved: false, mic: 'off' }); }),
      keep: act(function () { self.go('saved', { saved: true }); }),
      notNow: act(function () { self.go('placed', { back: 10 }); })
    };
  }
}
