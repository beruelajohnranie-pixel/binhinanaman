"""Tingnan ang dataset: bilang bawat klase, at tanggalin ang sirang larawan. Patakbuhin: python check_dataset.py"""
import os, sys
from PIL import Image
root = sys.argv[1] if len(sys.argv) > 1 else "dataset"
for c in sorted(os.listdir(root)):
    d = os.path.join(root, c)
    if not os.path.isdir(d): continue
    ok = bad = 0
    for f in os.listdir(d):
        p = os.path.join(d, f)
        try:
            Image.open(p).convert("RGB").verify(); ok += 1
        except Exception:
            bad += 1; os.remove(p); print("Tinanggal ang sirang file:", p)
    flag = "  <-- dagdagan (mas mababa sa 100)" if ok < 100 else ""
    print(f"{c:12s} {ok:5d} larawan{flag}")
