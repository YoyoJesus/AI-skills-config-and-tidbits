---
name: video-production
description: Produce short product or launch videos from screen and phone recordings with ffmpeg. Covers capture rules for Android and browser footage, a script playbook with on-screen text and voice-over, placeholder and human VO, picture and caption builds, music ducking, and render QA. Use for product demo, launch, or explainer videos built from real app recordings.
---

# Video Production

Build a product video from real recordings in five phases. Keep picture, voice-over cues, and audio mix as separate files, so swapping the voice-over costs seconds and never re-renders the picture.

## Workflow

1. **Script.** Write a playbook table: `Time | Picture | Source | VO | On-screen text`. Give every VO line a stable cue id. Check every claim against the real product; cut anything the footage cannot show.
2. **Capture.** Prep devices: neutral device names, Do Not Disturb, fresh app state, no real personal data. Record short takes, one beat each. Normalize Android footage to constant frame rate before any trim (see Rules).
3. **Voice-over.** For placeholder VO, generate one WAV per cue id with a local TTS (Kokoro is Apache-2.0). For human VO, record several takes per line, transcribe them, and keep the cleanest take per cue id. Trim silence and save one WAV per line, then record each line's duration.
4. **Picture.** Lay out scenes from the playbook. Place each VO line at its scene start and record the start times in a cues file (`id`, `start`, `duration`). Build the picture and captions from those times, without audio.
5. **Mix and review.** Lay the VO lines at their cue times, duck the music under each line, normalize loudness, and mux onto the picture. Then review (see below).

## Rules

- **Never trust a "done" report.** Review every render yourself.
- **Normalize Android footage before trimming.** Android screen recordings are variable frame rate, so a seek into a still stretch lands on the next change and trims drift by seconds:

  ```sh
  ffmpeg -i in.mp4 -vf fps=30 -fps_mode cfr -c:v libx264 -crf 18 -c:a aac cfr.mp4
  ```

- **On Windows, render text as PNG overlays (e.g. with PIL), not ffmpeg `drawtext`.** fontconfig often breaks ffmpeg text filters there. Use absolute paths in every ffmpeg call.
- **Duck music per line, not with one fixed sidechain.** A fixed sidechain under-ducks music that builds. Measure each line and lower the music under it to a target separation (about 15 to 20 dB below VO), with short fades.
- **Keep VO cue ids stable.** The cues file links picture to audio. Renaming an id breaks the link.
- **Captions are short phrases, not word-for-word.** Show each for at least 1.2 s per 10 characters, minimum 1.5 s. Break lines explicitly.
- **Redact at the source.** Cover real names or UI with patches over the footage, then check the patched frame at full size.
- **Confirm environment-specific failures in a second environment.** A WASM app that fails in one headless browser may work in another. Disable the browser cache before re-recording. Record browsers headless; a headed window can stop painting while recording.
- **Licensing.** Music must be CC0, Pixabay, Pexels, or CC BY. Record attribution and put CC BY credits in the video description. Respect the user's voice preference for placeholder VO.
- **Outsourced assets still get reviewed.** Stock, music, graphics, and captures can be gathered in parallel, but every result needs a review pass.

## Review

Run all of these on the picture and on the final mix:

```sh
# Contact sheet, 1 frame per second
ffmpeg -i final.mp4 -vf "fps=1,scale=320:-1,tile=6x6" sheet_%02d.png
# Full-size frame at a scene midpoint
ffmpeg -ss 12.5 -i final.mp4 -frames:v 1 frame_12.5.png
# Black and frozen stretches
ffmpeg -i final.mp4 -vf "blackdetect=d=0.3,freezedetect=d=1" -an -f null -
# Integrated loudness (target about -14 LUFS for web)
ffmpeg -i final.mp4 -af ebur128 -f null -
```

Look at every contact sheet and every midpoint frame. Check that captions stay on screen long enough and that the VO lines up with the action. Compare against a previous render when one exists.
