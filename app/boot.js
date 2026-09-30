/* Mounts the prototype and keeps the 1194 x 834 stage at true size on an 11-inch iPad Pro.
   URL options: ?wizard=0 hides the facilitator strip, ?stage=archive starts in a stage,
   ?hands=cool|mild|warm sets the palm warmth, ?fit=0 never scales the stage. */
(function () {
  var W = 1194, H = 834;
  var q = new URLSearchParams(window.location.search);
  var stages = ['idle', 'lifted', 'speaking', 'placed', 'open', 'saved', 'archive', 'revisit'];
  var props = {
    stage: stages.indexOf(q.get('stage')) >= 0 ? q.get('stage') : 'idle',
    hands: ['cool', 'mild', 'warm'].indexOf(q.get('hands')) >= 0 ? q.get('hands') : 'mild',
    showWizard: q.get('wizard') !== '0',
    frozen: false
  };
  var stage = document.getElementById('stage');
  var fit = q.get('fit') !== '0';
  function layout() {
    var s = fit ? Math.min(window.innerWidth / W, window.innerHeight / H) : 1;
    var x = Math.max(0, (window.innerWidth - W * s) / 2), y = Math.max(0, (window.innerHeight - H * s) / 2);
    stage.style.transform = 'translate(' + x + 'px, ' + y + 'px) scale(' + s + ')';
  }
  window.addEventListener('resize', layout);
  window.addEventListener('orientationchange', layout);
  document.addEventListener('gesturestart', function (e) { e.preventDefault(); });
  document.addEventListener('dblclick', function (e) { e.preventDefault(); });
  layout();
  window.heirloom = window.HeirloomRuntime.mount(stage, document.getElementById('heirloom-template'), Component, props);
})();
