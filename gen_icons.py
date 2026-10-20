# توليد أيقونات تطبيق "تفوق مع رقية"
from PIL import Image, ImageDraw, ImageFont
import os

OUT = os.path.join(os.path.dirname(__file__), 'icons')
os.makedirs(OUT, exist_ok=True)

SIZES = [72, 96, 128, 144, 152, 192, 384, 512]

FONT_PATHS = [
    'C:/Windows/Fonts/arialbd.ttf',
    'C:/Windows/Fonts/arial.ttf',
    'C:/Windows/Fonts/segoeuib.ttf',
]


def load_font(size):
    for p in FONT_PATHS:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                continue
    return ImageFont.load_default()


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def make_icon(size):
    img = Image.new('RGB', (size, size))
    d = ImageDraw.Draw(img)

    # تدرّج بنفسجي-وردي مميز
    top = (124, 58, 237)      # #7c3aed
    bottom = (190, 24, 93)    # #be185d
    for y in range(size):
        d.line([(0, y), (size, y)], fill=lerp(top, bottom, y / size))

    cx = size / 2

    # قبعة التخرج
    cap_w = size * 0.62
    cap_h = size * 0.30
    cy = size * 0.40
    diamond = [
        (cx, cy - cap_h * 0.75),
        (cx + cap_w / 2, cy),
        (cx, cy + cap_h * 0.75),
        (cx - cap_w / 2, cy),
    ]
    d.polygon(diamond, fill=(255, 255, 255))
    body_top_w = cap_w * 0.62
    body_h = size * 0.13
    body = [
        (cx - body_top_w / 2, cy),
        (cx + body_top_w / 2, cy),
        (cx + body_top_w / 2 + size * 0.02, cy + body_h),
        (cx - body_top_w / 2 - size * 0.02, cy + body_h),
    ]
    d.polygon(body, fill=(254, 240, 138))
    tassel_y = cy + body_h
    tassel_x = cx + cap_w / 2
    d.line([(tassel_x, cy), (tassel_x, tassel_y + size * 0.12)],
           fill=(254, 240, 138), width=max(2, size // 64))
    r = max(3, size // 36)
    d.ellipse([tassel_x - r, tassel_y + size * 0.12 - r,
               tassel_x + r, tassel_y + size * 0.12 + r], fill=(254, 240, 138))

    # نجمة صغيرة مميزة (التفوق)
    sx = cx - cap_w * 0.42
    sy = size * 0.18
    sr = size * 0.09
    import math
    star = []
    for i in range(10):
        ang = -math.pi / 2 + i * math.pi / 5
        rad = sr if i % 2 == 0 else sr * 0.45
        star.append((sx + rad * math.cos(ang), sy + rad * math.sin(ang)))
    d.polygon(star, fill=(254, 240, 138))

    # النص الإنجليزي "Learn with" و "Rekaia"
    line1 = 'Learn with'
    line2 = 'Rekaia'
    font1 = load_font(int(size * 0.115))
    font2 = load_font(int(size * 0.165))

    bbox1 = d.textbbox((0, 0), line1, font=font1)
    tw1 = bbox1[2] - bbox1[0]
    tx1 = cx - tw1 / 2 - bbox1[0]
    ty1 = size * 0.68 - (bbox1[3] - bbox1[1]) / 2 - bbox1[1]
    d.text((tx1, ty1), line1, font=font1, fill=(255, 255, 255))

    bbox2 = d.textbbox((0, 0), line2, font=font2)
    tw2 = bbox2[2] - bbox2[0]
    tx2 = cx - tw2 / 2 - bbox2[0]
    ty2 = size * 0.85 - (bbox2[3] - bbox2[1]) / 2 - bbox2[1]
    d.text((tx2, ty2), line2, font=font2, fill=(254, 240, 138))

    return img


for s in SIZES:
    icon = make_icon(s)
    icon.save(os.path.join(OUT, f'icon-{s}.png'))
    print(f'icon-{s}.png OK')

print('تم توليد جميع الأيقونات.')
