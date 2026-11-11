import re, os, json, urllib.request
from PIL import Image, ImageDraw

QUERIES = [
    ("ship", "container%20ship"),
    ("plane", "cargo%20plane"),
    ("workers", "dock%20worker"),
    ("harbour", "harbour"),
    ("port", "shipping%20port"),
    ("customs", "customs%20officer"),
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
        req = urllib.request.Request(url, headers=UA)
        data = urllib.request.urlopen(req, timeout=30).read()
        open(path, "wb").write(data)
        return path
    except Exception as e:
        print("fail", pid, e)
        return None

def sheet(names, out):
    cell_w, cell_h, pad, label_h = 300, 200, 6, 22
    cols = 5
    rows = sum((len(picked[n]) + cols - 1) // cols for n in names)
    W = cols * (cell_w + pad) + pad
    H = rows * (cell_h + pad + label_h) + pad
    canvas = Image.new("RGB", (W, H), (245, 245, 245))
    d = ImageDraw.Draw(canvas)
    y = pad
    for n in names:
        for i, pid in enumerate(picked[n]):
            p = fetch(pid)
            col = i % cols
            x = pad + col * (cell_w + pad)
            if col == 0 and i:
                y += cell_h + pad + label_h
            if p is None:
                continue
            try:
                im = Image.open(p).convert("RGB")
            except Exception:
                continue
            im.thumbnail((cell_w, cell_h))
            canvas.paste(im, (x + (cell_w - im.width) // 2, y + (cell_h - im.height) // 2))
            d.rectangle([x, y, x + cell_w - 1, y + cell_h - 1], outline=(200, 200, 200))
            d.text((x + 3, y + cell_h + 4), f"{n}:{pid}", fill=(20, 20, 20))
        y += cell_h + pad + label_h
    canvas.save(out)
    print(out, canvas.size)

sheet(["ship", "plane", "workers"], ".tmpimg/sheet1.png")
sheet(["harbour", "port", "customs"], ".tmpimg/sheet2.png")
