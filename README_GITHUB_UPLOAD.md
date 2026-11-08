# BinhiScan — GitHub Pages package

## Upload structure

I-upload ang **lahat ng laman ng ZIP na ito** sa pinaka-root ng GitHub repository (`binhi_scan_ulit`).
Huwag i-upload ang mismong outer folder na may pangalang `binhiscan`.

Dapat ganito ang structure sa GitHub:

```text
binhi_scan_ulit/
├── index.html
├── app.js
├── seeds.js
├── style.css
├── sw.js
├── manifest.webmanifest
├── icon-192.png
├── icon-512.png
├── .nojekyll
├── model/
│   ├── model.json
│   ├── metadata.json
│   └── weights.bin
├── lib/
└── training/
```

## GitHub Pages

1. Buksan ang repository na `binhi_scan_ulit`.
2. Piliin ang **Add file → Upload files**.
3. I-upload ang lahat ng laman ng ZIP, hindi ang ZIP file mismo.
4. I-commit ang changes sa branch na ginagamit ng GitHub Pages (karaniwan ay `main`).
5. Sa **Settings → Pages**, piliin ang tamang branch at `/ (root)` kung root ang deployment folder.
6. Hintaying matapos ang deployment.

Pagkatapos, dapat mabuksan ang mga URL na ito:

- `https://beruelajohnranie-pixel.github.io/binhi_scan_ulit/`
- `https://beruelajohnranie-pixel.github.io/binhi_scan_ulit/model/metadata.json`
- `https://beruelajohnranie-pixel.github.io/binhi_scan_ulit/model/model.json`

Kung 404 ang metadata URL, mali pa rin ang upload location o hindi pa tapos ang GitHub Pages deployment.

## Tungkol sa kasalukuyang trained model

Napanatili ang kasalukuyang `model/` files. May mahalagang dapat i-check bago umasa sa prediction:
ang `metadata.json` ng kasamang model ay may labels na `atis, chico, avocado, guyabano, melon, pakwan, papaya, rambutan, not_seed`, samantalang ang kasalukuyang `seeds.js` ay may seed IDs na `kamatis, talong, kangkong, sitaw, labanos, okra, pechay`.

Ibig sabihin, maaaring mawala ang metadata 404 pero hindi pa rin maitugma ng app ang predictions sa seed information. Kailangan ang tamang trained model na labels ay kapareho ng IDs sa `seeds.js`, o kailangang i-update ang seed data para tumugma sa model. Huwag palitan o i-edit nang mano-mano ang labels sa metadata; dapat manggaling ang mga ito sa aktuwal na training.

## Retraining (kung kailangan)

Nasa `training/` pa rin ang `train.py`, `check_dataset.py`, requirements at README. Ilagay ang training photos sa `training/dataset/<seed_id>/` at i-train ulit. Pagkatapos, kopyahin ang **lahat** ng files mula `training/out/tfjs/` papunta sa `model/` (palitan ang lumang model files nang sabay-sabay).

Tiyaking ang pangalan ng bawat dataset folder ay eksaktong kapareho ng seed ID sa `seeds.js`. Isama ang `not_seed` class.

## Cache update

Na-update ang service-worker cache version sa `binhiscan-v6` para hindi manatili ang lumang cached files pagkatapos mag-deploy.
