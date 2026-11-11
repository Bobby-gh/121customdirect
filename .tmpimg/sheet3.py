import re, os, urllib.request
from PIL import Image, ImageDraw

QUERIES = [
    ("aircargo", "air%20cargo"),
    ("planeload", "cargo%20plane%20loading"),
    ("crane", "crane%20operator"),
]
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36"}
os.makedirs(".tmpimg/t", exist_ok=True)

picked = {}
for name, q in QUERIES:
    html = open(f".tmpimg/html/p_{q}.html", encoding="utf-8", errors="ignore").read()
    ids = []
    for m in re.finditer(r"images\.pexels\.com/photos/(\d+)/pexels-photo-\1", html):
        pid = m.group(1)
        if pid not in ids:
            ids.append(pid)
    picked[name] = ids[:10]

def fetch(pid):
    path = f".tmpimg/t/{pid}.jpg"
    if os.path.exists(path) and os.path.getsize(path) > 2000:
        return path
    url = f"https://images.pexels.com/photos/{pid}/pexels-photo-{pid}.jpeg?auto=compress&cs=tinysrgb&w=420"
    try:
        data = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30).read()
        open(path, "wb").write(data)
        return path
    except Exception as e:
        print("fail", pid, e)
        return None

cell_w, cell_h, pad, label_h, cols = 300, 200, 6, 22, 5
rows = sum((len(picked[n]) + cols - 1) // cols for n in picked)
W = cols * (cell_w + pad) + pad
H = rows * (cell_h + pad + label_h) + pad
canvas = Image.new("RGB", (W, H), (245, 245, 245))
d = ImageDraw.Draw(canvas)
y = pad
for n in picked:
    for i, pid in enumerate(picked[n]):
        col = i % cols
        x = pad + col * (cell_w + pad)
        if col == 0 and i:
            y += cell_h + pad + label_h
        p = fetch(pid)
        if not p:
            continue
        im = Image.open(p).convert("RGB")
        im.thumbnail((cell_w, cell_h))
        canvas.paste(im, (x + (cell_w - im.width) // 2, y + (cell_h - im.height) // 2))
        d.rectangle([x, y, x + cell_w - 1, y + cell_h - 1], outline=(200, 200, 200))
        d.text((x + 3, y + cell_h + 4), f"{n}:{pid}", fill=(20, 20, 20))
    y += cell_h + pad + label_h
canvas.save(".tmpimg/sheet3.png")
canvas.thumbnail((1200, 1200))
canvas.convert("RGB").save(".tmpimg/sheet3_s.jpg", quality=72)
print("ok")
