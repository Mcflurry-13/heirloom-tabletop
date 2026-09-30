/* Optional live generation for the static prototype. The API key stays on the
   existing HTTPS image service; this public file contains no credentials. */
(function () {
  'use strict';
  var API_URL = 'https://liuguang-midautumn.wavy-elm-8920.chatgpt.site/api/generate-memory';
  var app = window.heirloom;
  var wizard = document.getElementById('wizard-mode');
  var api = document.getElementById('api-mode');
  var panel = document.getElementById('api-panel');
  var story = document.getElementById('api-story');
  var record = document.getElementById('api-record');
  var generate = document.getElementById('api-generate');
  var status = document.getElementById('api-status');
  var original = JSON.parse(JSON.stringify(MEMS[LATEST]));
  var mode = new URLSearchParams(location.search).get('mode') === 'api' ? 'api' : 'wizard';
  var recorder = null, parts = [], audio = null, pending = false;

  function say(message) { status.textContent = message; }
  function setMode(next) {
    if (recorder && recorder.state === 'recording') recorder.stop();
    if (app._mic) app.stopMic();
    recorder = null; parts = []; audio = null;
    mode = next;
    Object.assign(MEMS[LATEST], JSON.parse(JSON.stringify(original)));
    app.go('idle', { saved: false, mic: 'off', apiImage: null, apiStory: null, apiPending: false });
    wizard.setAttribute('aria-pressed', String(mode === 'wizard'));
    api.setAttribute('aria-pressed', String(mode === 'api'));
    panel.classList.toggle('is-open', mode === 'api');
    say(mode === 'api' ? 'Type a memory or record a voice, then generate.' : '');
  }

  async function startRecording() {
    if (pending || mode !== 'api') return;
    if (!window.MediaRecorder || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      say('This browser cannot record voice. You can still type a memory.'); return;
    }
    try {
      if (!app._mic) {
        app.toggleMic();
        for (var i = 0; i < 35 && !app._mic; i++) await new Promise(function (r) { setTimeout(r, 100); });
      }
      if (!app._mic) throw new Error('Microphone permission was not granted.');
      var types = ['audio/mp4', 'audio/webm', 'audio/ogg'];
      var mime = types.find(function (t) { return MediaRecorder.isTypeSupported(t); });
      if (!mime) throw new Error('This browser does not offer a supported audio format.');
      parts = []; audio = null;
      recorder = new MediaRecorder(app._mic.stream, { mimeType: mime });
      recorder.ondataavailable = function (e) { if (e.data && e.data.size) parts.push(e.data); };
      recorder.onstop = function () {
        audio = new Blob(parts, { type: mime });
        record.textContent = 'Record voice';
        app.stopMic();
        app.setState({ mic: 'off' });
        app.go('placed', { saved: false });
        submit();
      };
      recorder.start();
      app.go('speaking', { saved: false });
      record.textContent = 'Stop & create';
      say('Recording. Speak while holding the vase, then stop.');
    } catch (e) { say(e.message || 'Could not start recording.'); }
  }

  async function submit() {
    if (mode !== 'api' || pending) return;
    var words = story.value.trim();
    if (!words && !audio) { say('Add a memory or record your voice first.'); return; }
    if (words.length > 700) { say('Please keep the story under 700 characters.'); return; }
    pending = true;
    if ((app.state || {}).stage !== 'placed') app.go('placed', { saved: false });
    generate.disabled = true; record.disabled = true;
    app.setState({ apiPending: true, apiImage: null, apiStory: words });
    say('Making a new memory image. This may take a minute…');
    try {
      var body = new FormData();
      body.set('story', words || 'A small family moment remembered through a voice.');
      if (audio) body.set('audio', audio, audio.type === 'audio/mp4' ? 'memory.mp4' : 'memory.webm');
      var response = await fetch(API_URL, { method: 'POST', body: body });
      var data = await response.json();
      if (!response.ok || !data.image) throw new Error(data.error || 'Image generation failed.');
      if (mode !== 'api') return;
      var latest = MEMS[LATEST];
      latest.img = data.image;
      latest.alt = 'Newly generated family-memory artwork';
      latest.emb = { l: 0, t: 0, w: 100, h: 100 };
      latest.text = words || latest.text;
      latest.ph = [{ en: latest.text, s: 0.6, d: Math.max(5, Math.min(18, latest.text.length / 5)), n: 10 }];
      app.setState({ apiImage: data.image, apiStory: latest.text, apiPending: false });
      say('Your image is ready. Tap the image to open it, then Keep it.');
    } catch (e) {
      app.setState({ apiPending: false });
      say('Could not generate: ' + (e.message || 'Please try again.'));
    } finally {
      pending = false; audio = null; generate.disabled = false; record.disabled = false;
    }
  }

  wizard.addEventListener('click', function () { setMode('wizard'); });
  api.addEventListener('click', function () { setMode('api'); });
  record.addEventListener('click', function () {
    if (recorder && recorder.state === 'recording') recorder.stop();
    else startRecording();
  });
  generate.addEventListener('click', submit);
  window.addEventListener('heirloom:stage', function (e) {
    if (mode === 'api' && e.detail.stage === 'placed' && !pending && !audio && story.value.trim()) submit();
  });
  setMode(mode);
})();
