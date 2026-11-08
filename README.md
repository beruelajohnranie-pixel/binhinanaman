# Paano mag-train ng BinhiScan model

## 1. Ihanda ang Python
Gamitin ang **Python 3.10 o 3.11** (hindi 3.12+).
```
cd training
python -m venv venv
venv\Scripts\activate          (Windows)   |   source venv/bin/activate   (Mac/Linux)
pip install -r requirements.txt
```
Kung may problema sa install o mabagal ang computer, gamitin ang **Google Colab** (libreng GPU): i-upload ang `train.py` at ang `dataset/`, tapos `!pip install tensorflow==2.15.1 tensorflowjs==4.17.0 "numpy<2" scikit-learn` at `!python train.py`.

## 2. Ilagay ang larawan
Isang folder bawat klase sa `training/dataset/`:
```
dataset/
  mais/ kamatis/ talong/ ampalaya/ sitaw/ ...   <- pangalan ng folder = id ng binhi sa seeds.js (maliit na titik, walang space)
  not_seed/      <- mesa, kamay, lupa, ibang butil, walang laman (kailangan ito!)
```
- Hindi bababa sa **150-300 larawan bawat klase**, mas marami mas maganda.
- Iba't ibang background, liwanag, distansya, at anggulo. Mas maganda ang sariling kuha gamit ang phone.
- **Huwag magkopya ng parehong larawan**, at huwag gumamit ng halos magkakaparehong kuha lang.
- Tingnan: `python check_dataset.py`

- Hindi kailangang i-train lahat ng 31 binhi. Pero kapag may model na sa `model/`, ang mga binhing na-train lang ang makikilala ng app.

## 3. I-train
```
python train.py
```
Makikita ang accuracy, ang bawat klase (precision/recall), at ang confusion matrix. Basahin ang matrix: kung madalas mahalo ang dalawang klase (hal. Pechay at Labanos), dagdagan ang larawan nila.
- Kung ~100% agad ang accuracy, **maghinala**: baka magkakahawig lang ang lahat ng larawan. Subukan sa bagong kuha.
- Kung mababa (<85%): dagdagan ang larawan o pagandahin ang pagkakaiba-iba ng kuha.

## 4. Ilagay sa app
Kopyahin ang LAHAT ng laman ng `training/out/tfjs/` (model.json, group1-shard*.bin, labels.json) sa `model/`. Tapos:
```
```
Buksan ang `index.html` gamit ang **Live Server** sa VS Code, o `node server.js` kung nasa mode ang server. Kapag nasa `model/` ang model, iyon na ang gagamitin ng app.

## 5. Ayusin ang pagiging maingat
Sa `app.js`, ang `MIN_CONF=0.6` ay ang pinakamababang kumpiyansa. Itaas sa `0.75` o `0.8` kung madalas pa ring mali.
