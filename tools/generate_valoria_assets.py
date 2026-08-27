from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "test" / "assets" / "images"
OUT.mkdir(parents=True, exist_ok=True)


def font(size, bold=False):
    candidates = [
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
    ]
    for candidate in candidates:
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    return ImageFont.load_default()


NAVY = (8, 20, 37)
BLUE = (16, 84, 201)
TEAL = (13, 188, 189)
LIME = (132, 222, 34)
WHITE = (255, 255, 255)
MUTED = (151, 164, 184)


def gradient(size, c1, c2, diagonal=True):
    w, h = size
    img = Image.new("RGB", size, c1)
    pix = img.load()
    denom = max(1, w + h if diagonal else w)
    for y in range(h):
        for x in range(w):
            t = (x + y) / denom if diagonal else x / max(1, w - 1)
            pix[x, y] = tuple(int(c1[i] * (1 - t) + c2[i] * t) for i in range(3))
    return img


def save_logo():
    img = Image.new("RGBA", (900, 300), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    cx, cy = 145, 145
    v = [(42, 74), (92, 74), (145, 202), (198, 74), (248, 74), (164, 236), (126, 236)]
    d.polygon(v, fill=(7, 20, 38, 255))
    inner = [(92, 90), (130, 90), (160, 176), (196, 90), (226, 90), (166, 208), (142, 208)]
    d.polygon(inner, fill=(13, 188, 189, 255))
    bars = [(210, 174, 232, 210), (242, 142, 264, 210), (274, 112, 296, 210)]
    for box in bars:
        d.rounded_rectangle(box, radius=4, fill=(23, 112, 221, 230))
    d.line([(206, 168), (237, 138), (267, 110), (305, 68)], fill=(132, 222, 34, 255), width=12)
    d.polygon([(305, 68), (288, 70), (305, 46), (312, 75)], fill=(132, 222, 34, 255))
    d.text((330, 82), "VALORIA", font=font(72, True), fill=(8, 20, 37, 255))
    d.text((334, 170), "IT SERVICES", font=font(22, True), fill=(13, 126, 142, 255))
    img.save(OUT / "valoria-logo.png")


def draw_dashboard(draw, x, y, w, h, title, accent):
    draw.rounded_rectangle((x, y, x + w, y + h), radius=18, fill=(247, 250, 253), outline=(213, 223, 235), width=2)
    draw.rounded_rectangle((x, y, x + w, y + 44), radius=18, fill=(18, 34, 58))
    draw.text((x + 20, y + 12), title, font=font(18, True), fill=WHITE)
    for i in range(3):
        draw.ellipse((x + w - 78 + i * 22, y + 16, x + w - 66 + i * 22, y + 28), fill=(80 + i * 55, 220 - i * 25, 180))
    chart_x, chart_y = x + 32, y + 78
    points = []
    for i in range(7):
        px = chart_x + i * (w - 90) / 6
        py = chart_y + 90 - math.sin(i * 0.85) * 22 - i * 6
        points.append((px, py))
    draw.line(points, fill=accent, width=5)
    for px, py in points:
        draw.ellipse((px - 5, py - 5, px + 5, py + 5), fill=accent)
    for i, bh in enumerate([56, 76, 48, 95, 70]):
        bx = x + 44 + i * 44
        draw.rounded_rectangle((bx, y + h - 52 - bh, bx + 22, y + h - 52), radius=5, fill=(18, 84, 180))
    for i, label in enumerate(["Traffic", "Leads", "Sales"]):
        lx = x + w - 178
        ly = y + 82 + i * 52
        draw.rounded_rectangle((lx, ly, lx + 128, ly + 34), radius=7, fill=(232, 241, 250))
        draw.text((lx + 12, ly + 7), label, font=font(13, True), fill=(30, 47, 71))


def save_hero():
    img = gradient((1600, 950), (5, 14, 29), (13, 74, 94))
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    for r, alpha in [(420, 38), (300, 44), (170, 68)]:
        od.ellipse((980 - r, 160 - r, 980 + r, 160 + r), fill=(13, 188, 189, alpha))
    for r, alpha in [(360, 40), (220, 56)]:
        od.ellipse((1280 - r, 760 - r, 1280 + r, 760 + r), fill=(132, 222, 34, alpha))
    img = Image.alpha_composite(img.convert("RGBA"), overlay)
    d = ImageDraw.Draw(img)
    draw_dashboard(d, 820, 250, 560, 370, "Growth Command Center", TEAL)
    d.rounded_rectangle((720, 660, 1460, 696), radius=14, fill=(6, 16, 29, 210))
    d.rounded_rectangle((1010, 696, 1168, 730), radius=4, fill=(6, 16, 29, 220))
    img.save(OUT / "hero-dashboard.png")


def save_case_image(filename, title, subtitle, accent, variant):
    img = gradient((900, 620), (246, 249, 252), (225, 238, 247), diagonal=False).convert("RGBA")
    d = ImageDraw.Draw(img)
    d.rounded_rectangle((70, 70, 830, 550), radius=28, fill=WHITE, outline=(208, 219, 232), width=2)
    d.rounded_rectangle((70, 70, 830, 138), radius=28, fill=NAVY)
    d.text((105, 92), title, font=font(26, True), fill=WHITE)
    d.text((105, 155), subtitle, font=font(18), fill=(76, 91, 113))
    if variant == "seo":
        for i, h in enumerate([130, 165, 124, 220, 250, 284]):
            x = 132 + i * 95
            d.rounded_rectangle((x, 472 - h, x + 42, 472), radius=8, fill=accent)
        d.line([(130, 420), (230, 360), (330, 378), (430, 302), (530, 270), (630, 215)], fill=LIME, width=7)
    elif variant == "ads":
        for i in range(5):
            x = 120 + i * 130
            d.rounded_rectangle((x, 220, x + 90, 365), radius=16, fill=(237, 245, 250))
            d.ellipse((x + 24, 245, x + 66, 287), fill=accent)
            d.rounded_rectangle((x + 22, 312, x + 68, 326), radius=5, fill=(191, 207, 224))
        d.rounded_rectangle((265, 410, 635, 455), radius=20, fill=NAVY)
        d.text((328, 421), "ROAS +148%", font=font(24, True), fill=WHITE)
    elif variant == "web":
        d.rounded_rectangle((130, 210, 490, 455), radius=20, fill=(18, 34, 58))
        d.rounded_rectangle((520, 210, 748, 455), radius=20, fill=(235, 243, 248))
        d.rectangle((160, 255, 460, 273), fill=accent)
        for i in range(5):
            d.rectangle((160, 302 + i * 28, 410 - i * 18, 314 + i * 28), fill=(83, 104, 130))
        d.rounded_rectangle((560, 250, 710, 348), radius=16, fill=accent)
    else:
        draw_dashboard(d, 140, 205, 620, 260, "Performance Snapshot", accent)
    img.save(OUT / filename)


def main():
    save_logo()
    save_hero()
    save_case_image("case-seo.png", "SEO Growth", "Organic visibility program", TEAL, "seo")
    save_case_image("case-ads.png", "Paid Media", "Meta and Google campaigns", (23, 112, 221), "ads")
    save_case_image("case-web.png", "Website Build", "Conversion-led web experience", (13, 188, 189), "web")
    save_case_image("case-ecommerce.png", "E-commerce", "Storefront and analytics setup", (132, 222, 34), "dash")
    save_case_image("case-branding.png", "Brand System", "Identity and landing content", (199, 164, 83), "web")
    save_case_image("case-automation.png", "Automation", "CRM and email workflows", (110, 88, 255), "dash")


if __name__ == "__main__":
    main()
