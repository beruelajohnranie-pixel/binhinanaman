"""
BinhiScan - training script (MobileNetV2 transfer learning)

Dataset:  training/dataset/<class_name>/*.jpg   (isang folder bawat klase)
Output:   training/out/tfjs/  (model.json, *.bin, labels.json)  -> kopyahin sa model/

Patakbuhin:  python train.py
"""
import argparse, json, os
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from sklearn.metrics import classification_report, confusion_matrix
import tensorflowjs as tfjs

ap = argparse.ArgumentParser()
ap.add_argument("--data", default="dataset")
ap.add_argument("--out", default="out")
ap.add_argument("--epochs", type=int, default=12)
ap.add_argument("--ft-epochs", type=int, default=8)
ap.add_argument("--img", type=int, default=224)
ap.add_argument("--batch", type=int, default=32)
a = ap.parse_args()
IMG, AUTO = a.img, tf.data.AUTOTUNE
os.makedirs(a.out, exist_ok=True)

def load(subset):
    return keras.utils.image_dataset_from_directory(
        a.data, validation_split=0.2, subset=subset, seed=42,
        image_size=(IMG, IMG), batch_size=a.batch, crop_to_aspect_ratio=True)

train_raw, val_raw = load("training"), load("validation")
classes = train_raw.class_names
n = len(classes)
print("Mga klase:", classes)

# class weights para sa hindi pantay na dami ng larawan
counts = np.zeros(n)
for _, y in train_raw:
    counts += np.bincount(y.numpy(), minlength=n)
cw = {i: float(counts.sum() / (n * max(c, 1))) for i, c in enumerate(counts)}
print("Bilang ng larawan (training):", dict(zip(classes, counts.astype(int))))

# augmentation (nasa data pipeline lang, hindi kasama sa na-export na model)
aug = keras.Sequential([
    layers.RandomFlip("horizontal_and_vertical"), layers.RandomRotation(0.2),
    layers.RandomZoom(0.2), layers.RandomContrast(0.2), layers.RandomBrightness(0.2)])
prep = keras.applications.mobilenet_v2.preprocess_input   # scale sa [-1, 1]
train = train_raw.map(lambda x, y: (prep(aug(x, training=True)), y), num_parallel_calls=AUTO).prefetch(AUTO)
val = val_raw.map(lambda x, y: (prep(x), y), num_parallel_calls=AUTO).prefetch(AUTO)

base = keras.applications.MobileNetV2(input_shape=(IMG, IMG, 3), include_top=False, weights="imagenet")
base.trainable = False
inp = keras.Input((IMG, IMG, 3))
x = base(inp, training=False)
x = layers.GlobalAveragePooling2D()(x)
x = layers.Dropout(0.3)(x)
out = layers.Dense(n, activation="softmax")(x)
model = keras.Model(inp, out)

stop = keras.callbacks.EarlyStopping(patience=4, restore_best_weights=True, monitor="val_accuracy")
model.compile(keras.optimizers.Adam(1e-3), "sparse_categorical_crossentropy", metrics=["accuracy"])
print("\n== Stage 1: top layers lang ==")
model.fit(train, validation_data=val, epochs=a.epochs, class_weight=cw, callbacks=[stop])

print("\n== Stage 2: fine-tuning ==")
base.trainable = True
for l in base.layers[:-30]:
    l.trainable = False
model.compile(keras.optimizers.Adam(1e-5), "sparse_categorical_crossentropy", metrics=["accuracy"])
model.fit(train, validation_data=val, epochs=a.ft_epochs, class_weight=cw, callbacks=[stop])

# pagsusuri sa validation set
yt, yp = [], []
for xb, yb in val:
    yt += yb.numpy().tolist()
    yp += np.argmax(model.predict(xb, verbose=0), 1).tolist()
print("\n== Resulta ==")
print(classification_report(yt, yp, target_names=classes, digits=3))
print("Confusion matrix (row=totoo, column=hula):\n", confusion_matrix(yt, yp))

# i-save at i-export sa TensorFlow.js
model.save(os.path.join(a.out, "binhiscan.h5"))
tfjs_dir = os.path.join(a.out, "tfjs")
tfjs.converters.save_keras_model(model, tfjs_dir)
json.dump(classes, open(os.path.join(tfjs_dir, "labels.json"), "w"))
print("\nTapos na! Kopyahin ang laman ng", tfjs_dir, "sa model/")
