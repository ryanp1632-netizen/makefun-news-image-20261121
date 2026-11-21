"""Pack the Chrome screenshot into a palette PNG.

The page is flat colour and text, so 128 well-chosen colours keep it looking the same while the file gets much
smaller (the judge's tie-break prefers fewer bytes). usage: python shrink.py <in.png> <out.png> [colours]
"""
import sys
from PIL import Image

src, dst = sys.argv[1], sys.argv[2]
colours = int(sys.argv[3]) if len(sys.argv) > 3 else 128

img = Image.open(src).convert("RGB")
if img.size != (1024, 1024):
    raise SystemExit(f"screenshot is {img.size}, expected 1024x1024")
small = img.quantize(colors=colours, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
small.save(dst, format="PNG", optimize=True)
print(f"packed {src} -> {dst} with {colours} colours")
