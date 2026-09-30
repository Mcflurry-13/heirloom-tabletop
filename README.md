# Heirloom · iPad tabletop prototype

A Wizard of Oz prototype for an 11-inch iPad Pro (2021) lying flat as a tabletop, with a ceramic vase standing on the left of the screen. It is a plain static site: no build step, no framework, no server code.

## Files

- `index.html`: the page, the screen template and the styles.
- `app/runtime.js`: a small renderer that fills the template and routes touch, pointer and key events.
- `app/heirloom.js`: the prototype logic (stages, voice rings, warmth, shards, vase knob, archive).
- `app/boot.js`: mounts the prototype and scales the 1194 × 834 stage to the window.
- `assets/images/`: the four memory images and the paper grain. These are final; do not regenerate, recompress or crop them.
- `assets/fonts/`: Instrument Sans, Newsreader and Caveat, self-hosted under the SIL Open Font License (see `assets/fonts/licenses/`).
- `manifest.webmanifest`, `assets/icon-512.png`, `assets/apple-touch-icon.png`: home screen install.
- `.nojekyll`: keeps GitHub Pages from skipping any files.

## Deploy

1. Publish the folder as it is, with `index.html` at the site root, on any static host with HTTPS: GitHub Pages, Netlify or Vercel (framework preset "Other", no build command, output directory = this folder).
2. Keep every path relative; the site also works from a subfolder.
3. HTTPS is required for the optional live microphone (Wizard strip → Mic).
4. Quick local check: `python3 -m http.server 8000` in this folder, then open http://localhost:8000.

## On the iPad

- Screen: the stage is 1194 × 834 pt, the landscape size of the 11-inch iPad Pro (2021).
- True size: at scale 1 the ring around the vase dock is 390 pt across, which is 7.5 cm on this screen; ripples spread just outside the vase base.
- Full screen: open the site in Safari, Share → Add to Home Screen, then launch it from the icon in landscape. Inside the Safari tab the toolbars shrink the page slightly, so the ring is smaller than 7.5 cm there.
- No scaling: add `?fit=0` to the URL to keep the stage at 1:1 on any screen.

## URL options

- `?wizard=0`: hides the facilitator strip (Wizard of Oz controls).
- `?stage=idle|lifted|speaking|placed|open|saved|archive|revisit`: starts in a given stage.
- `?hands=cool|mild|warm`: palm warmth for the new record.
- Options combine, for example `?wizard=0&stage=archive`.

## Test checklist

- Lift, Speak, Place: voice rings appear, the transcript types in, warmth turns into light, the shard seeps in and invites a tap.
- Shard: drags and springs back; a tap opens the diary page; Keep saves it and a dot appears on the Family Threads line.
- Revisit: the archive opens; turning around the vase (or the ↺ ↻ buttons, or arrow keys) moves the timeline, the rail dot, the voice ripples and the warmth bloom together.
- Open this record: plays the record's words; Read and Listen switch modes.
