# BinhiScan (offline PWA)

## Offline setup
1. I-save ang `tf.min.js` sa `lib/` (tingnan ang lib/README.txt).
2. Ilagay ang trained model (`model.json`, `*.bin`, `labels.json`) sa `model/`.
3. I-host nang isang beses (GitHub Pages / Netlify / local server). Buksan sa Chrome sa phone, hintayin mag-load, tapos **Add to Home screen / Install app**.
4. Pagkatapos nito, gumagana na ang app kahit walang internet (naka-cache ang app, TensorFlow.js, at model).
Kapag nag-update ng model o code, palitan ang `V` sa `sw.js` (hal. `binhiscan-v2`).
Hindi gagana ang offline/camera kapag binuksan lang ang index.html bilang file; kailangan ng http://localhost o https.

## Scanner
Live ang scan: kinikilala ang binhi habang nakaharap ang camera at kusang kumukuha kapag 4 na sunod na frame ang pareho at sigurado. Sa final na kuha, 4 na bersyon ng larawan (orig + flips) ang pinag-average. Mas mataas ang `MIN_CONF` sa app.js (0.75), mas maingat.
Wala nang built-in/online AI: kung walang model sa `model/`, hindi mag-i-scan ang app (para hindi manghula).

## Training
Tingnan ang `training/README.md`. (Teachable Machine export ay gumagana rin sa `model/`.)
