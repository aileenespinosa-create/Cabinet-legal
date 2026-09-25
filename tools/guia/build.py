import base64, importlib, sys, html
from pathlib import Path

ROOT = Path(__file__).parent
REPO = ROOT.parent.parent
PUBLIC = REPO / "public"
OUT = ROOT / "out"
IMG = OUT / "img"

# Source photos live in public/; they are resized here for the PDF, and the
# white logo for the back cover is derived from the colour logo.
SIZES = {"hero-legal.jpg": 1800, "blog-legal.jpg": 1400, "aileen.jpg": 376, "ellis-beato.jpg": 375, "logo-cabinet-legal.jpg": 1001}

def prepare_images():
    from PIL import Image
    IMG.mkdir(parents=True, exist_ok=True)
    for name, width in SIZES.items():
        im = Image.open(PUBLIC / name).convert("RGB")
        if im.width > width:
            im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
        im.save(IMG / name, quality=86, optimize=True)
    logo = Image.open(PUBLIC / "logo-cabinet-legal.jpg").convert("RGB")
    white = Image.new("RGBA", logo.size)
    px, out = logo.load(), white.load()
    for y in range(logo.height):
        for x in range(logo.width):
            r, g, b = px[x, y]
            if r - b > 40:  # gold arch
                a = max(0, min(255, round((255 - b) * 255 / 255)))
                out[x, y] = (224, 197, 0, a)
            else:  # navy lettering becomes white
                a = max(0, min(255, round((255 - r) * 255 / (255 - 18))))
                out[x, y] = (255, 255, 255, a)
    white.save(IMG / "logo-white.png")

def b64(name):
    ext = "png" if name.endswith(".png") else "jpeg"
    return f"data:image/{ext};base64," + base64.b64encode((IMG / name).read_bytes()).decode()

import re as _re
import pyphen as _pyphen
_HY = {"es": _pyphen.Pyphen(lang="es", left=2, right=3), "en": _pyphen.Pyphen(lang="en_US", left=2, right=3), "fr": _pyphen.Pyphen(lang="fr", left=2, right=3)}
_CUR = {"h": None}

def e(text):
    """Escape and add soft hyphens (browsers here lack hyphenation dictionaries),
    so justified text breaks words instead of opening gaps."""
    out = html.escape(str(text))
    h = _CUR["h"]
    if h is None:
        return out
    return _re.sub(r"[A-Za-zÀ-ÿ]{7,}", lambda m: h.inserted(m.group(0), hyphen="\u00ad"), out)


CSS = """
@page { size: A4; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
:root { --navy:#0f2740; --navy2:#16324f; --gold:#c8a46a; --gold-d:#a8834a; --gold-soft:#efe2c8; --cream:#f8f5ef; --ink:#16202a; --muted:#5f6b76; --line:#e5dccb; }
body { font-family: 'Poppins', sans-serif; font-weight: 300; color: var(--ink); font-size: 10.3pt; line-height: 1.6; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.page { width: 210mm; height: 297mm; position: relative; overflow: hidden; page-break-after: always; background: #fff; }
.page:last-child { page-break-after: auto; }
.pad { padding: 20mm 18mm 22mm 18mm; }
p, li, .t, .intro, .sub, .lead { text-align: justify; text-align-last: left; hyphens: auto; -webkit-hyphens: auto; hyphenate-limit-chars: 7 3 3; }
.stat .t, .usstats .t, .disc, .src { text-align: left; }
h1, h2, h3, .kicker, .web, .year, .n, .num, .nm, .bn, th, .l, .v, .appt { hyphens: none !important; -webkit-hyphens: none !important; }
h1, h2, h3 { font-family: 'Lora', serif; font-weight: 600; color: var(--navy); letter-spacing: -0.01em; }
h2 { font-size: 25pt; line-height: 1.12; margin-bottom: 5mm; }
h3 { font-size: 12pt; line-height: 1.25; margin-bottom: 1.5mm; }
strong, b { font-weight: 600; }
.kicker { font-size: 7.6pt; letter-spacing: .22em; text-transform: uppercase; color: var(--gold-d); font-weight: 600; margin-bottom: 3mm; }
.rule { width: 16mm; height: 1.2mm; background: var(--gold); margin-bottom: 6mm; }
.intro { font-size: 11.2pt; color: var(--muted); max-width: 150mm; margin-bottom: 8mm; line-height: 1.6; }
.foot { position: absolute; left: 18mm; right: 18mm; bottom: 9mm; display: flex; justify-content: space-between; font-size: 7pt; color: #9aa3ab; border-top: 0.3mm solid var(--line); padding-top: 2.5mm; letter-spacing: .03em; }
.foot.dark { color: rgba(255,255,255,.55); border-top-color: rgba(255,255,255,.18); }

/* cover */
.cover { background: var(--navy); color: #fff; }
.cover .photo { position: absolute; inset: 0 0 38% 0; background-size: cover; background-position: center 40%; }
.cover .shade { position: absolute; inset: 0 0 38% 0; background: linear-gradient(180deg, rgba(15,39,64,.25) 0%, rgba(15,39,64,.55) 60%, var(--navy) 100%); }
.cover .logo { position: absolute; top: 16mm; left: 18mm; width: 48mm; background: rgba(255,255,255,.96); padding: 3.2mm 4.5mm; border-radius: 1.5mm; }
.cover .body { position: absolute; left: 18mm; right: 18mm; bottom: 26mm; }
.cover .kicker { color: var(--gold); }
.cover h1 { color: #fff; font-size: 40pt; line-height: 1.04; margin: 2mm 0 6mm; font-weight: 600; }
.cover .year { display: inline-block; border: 0.35mm solid var(--gold); color: var(--gold); padding: 1.6mm 4mm; font-size: 8.5pt; letter-spacing: .18em; text-transform: uppercase; font-weight: 500; margin-bottom: 7mm; }
.cover .sub { font-size: 11.2pt; line-height: 1.6; color: rgba(255,255,255,.82); max-width: 150mm; }
.cover .bar { position: absolute; left: 0; right: 0; bottom: 0; height: 3mm; background: var(--gold); }
.cover .web { position: absolute; right: 18mm; bottom: 9mm; font-size: 8pt; letter-spacing: .15em; color: rgba(255,255,255,.6); text-transform: uppercase; text-align: right; line-height: 1.3; }
.cover .web .since { display: block; margin-top: 1.2mm; font-size: 7pt; letter-spacing: .32em; color: var(--gold); font-weight: 500; }

/* letter */
.letter p { font-size: 11pt; margin-bottom: 5mm; line-height: 1.75; color: #2b3640; }
.letter .sig { margin-top: 7mm; font-family: 'Lora', serif; font-style: italic; font-size: 13pt; color: var(--navy); }
.letter .sigr { font-size: 8.5pt; color: var(--muted); letter-spacing: .05em; }
.toc { margin-top: 14mm; background: var(--cream); border-left: 1.2mm solid var(--gold); padding: 7mm 8mm; }
.toc h3 { margin-bottom: 4mm; }
.toc ol { list-style: none; columns: 2; column-gap: 10mm; }
.toc li { font-size: 10.2pt; padding: 2.4mm 0; border-bottom: 0.25mm solid var(--line); break-inside: avoid; }
.toc li span { color: var(--gold-d); font-weight: 600; margin-right: 3mm; font-size: 8.5pt; }

/* stats */
.stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3.5mm; margin-bottom: 3mm; }
.stat { background: var(--navy); color: #fff; padding: 5.5mm 4.5mm; border-radius: 1.5mm; }
.stat .n { font-family: 'Lora', serif; font-size: 18pt; font-weight: 600; color: var(--gold); line-height: 1.1; margin-bottom: 2mm; white-space: nowrap; }
.stat .t { font-size: 8.2pt; line-height: 1.4; color: rgba(255,255,255,.82); }
.src { font-size: 7pt; color: #9aa3ab; margin-bottom: 8mm; }
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 6mm 8mm; }
.pt h3 { font-size: 11.6pt; }
.pt p { color: #3a4550; }
.pt { border-top: 0.35mm solid var(--gold); padding-top: 3mm; }
.bars { margin-top: 3mm; }
.barrow { display: grid; grid-template-columns: 38mm 1fr 13mm; align-items: center; gap: 3mm; margin-bottom: 3mm; font-size: 9.2pt; }
.barrow .track { height: 3.2mm; background: #eef0f2; border-radius: 1mm; overflow: hidden; }
.barrow .fill { height: 100%; background: var(--navy); border-radius: 1mm; }
.barrow .fill.g { background: var(--gold); }
.barrow .v { text-align: right; font-weight: 600; color: var(--navy); }
.sect-title { font-family: 'Lora', serif; font-size: 12pt; font-weight: 600; color: var(--navy); margin: 9mm 0 4mm; }

/* laws */
.laws { display: grid; grid-template-columns: 1fr 1fr; gap: 4.5mm; }
.law { border: 0.3mm solid var(--line); border-radius: 1.5mm; padding: 5mm 5mm; background: #fff; }
.law .num { font-family: 'Lora', serif; font-size: 16pt; font-weight: 600; color: var(--navy); }
.law .nm { font-size: 7.4pt; text-transform: uppercase; letter-spacing: .14em; color: var(--gold-d); font-weight: 600; margin: 1mm 0 2.5mm; }
.law p { font-size: 9.8pt; color: #3a4550; }
.callout { margin-top: 7mm; background: var(--navy); color: #fff; padding: 6mm 7mm; border-radius: 1.5mm; font-size: 10pt; line-height: 1.6; display: flex; gap: 5mm; align-items: flex-start; }
.callout .ic { font-family: 'Lora', serif; font-size: 26pt; color: var(--gold); line-height: .9; }

/* steps */
.steps { position: relative; }
.step { display: grid; grid-template-columns: 13mm 1fr; gap: 4mm; margin-bottom: 4.6mm; }
.step .c { width: 11mm; height: 11mm; border-radius: 50%; background: var(--navy); color: var(--gold); font-family: 'Lora', serif; font-weight: 600; font-size: 13pt; display: flex; align-items: center; justify-content: center; }
.step h3 { font-size: 12pt; margin-bottom: 1mm; margin-top: 1mm; }
.step p { color: #3a4550; }
.box { background: var(--cream); border-left: 1.2mm solid var(--gold); padding: 5mm 6mm; margin-top: 5mm; }
.box h3 { font-size: 11pt; }
.note { font-size: 8.8pt; color: var(--muted); margin-top: 4mm; font-style: italic; }

/* table */
table.costs { width: 100%; border-collapse: collapse; margin-bottom: 6mm; }
table.costs th { text-align: left; background: var(--navy); color: #fff; font-weight: 500; font-size: 8pt; letter-spacing: .12em; text-transform: uppercase; padding: 3mm 4mm; }
table.costs td { padding: 4.6mm 4.5mm; border-bottom: 0.3mm solid var(--line); vertical-align: top; font-size: 10pt; }
table.costs td:first-child { width: 58mm; font-weight: 600; color: var(--navy); }
table.costs tr:nth-child(even) td { background: #fbf9f5; }

/* confotur */
.cards3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4mm; margin-bottom: 8mm; }
.card { background: var(--navy); color: #fff; border-radius: 1.5mm; padding: 6mm 5mm; }
.card h3 { color: var(--gold); font-size: 11pt; }
.card p { font-size: 9.4pt; color: rgba(255,255,255,.85); }
.card .big { font-family: 'Lora', serif; font-size: 15.5pt; white-space: nowrap; color: #fff; font-weight: 600; margin: 1mm 0 2.5mm; }
.warn li { list-style: none; position: relative; padding-left: 8mm; margin-bottom: 4mm; font-size: 10.4pt; }
.warn li:before { content: ""; position: absolute; left: 0; top: 1.2mm; width: 3.4mm; height: 3.4mm; border: 0.45mm solid var(--gold); border-radius: .6mm; }
.halfimg { height: 62mm; background-size: cover; background-position: center; border-radius: 1.5mm; margin-bottom: 8mm; }

.band { display: grid; grid-template-columns: 42mm 1fr; align-items: center; gap: 6mm; background: var(--cream); border: 0.3mm solid var(--line); border-radius: 1.5mm; padding: 7mm 8mm; margin-bottom: 7mm; }
.band .bn { font-family: 'Lora', serif; font-size: 64pt; line-height: .9; color: var(--gold-d); font-weight: 600; text-align: center; }
.band .bl { font-size: 8pt; letter-spacing: .2em; text-transform: uppercase; color: var(--navy); font-weight: 600; margin-bottom: 2mm; }
.band .bt { font-size: 10.6pt; color: #3a4550; line-height: 1.6; }
/* company */
.types { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; margin-bottom: 7mm; }
.type { border: 0.3mm solid var(--line); border-radius: 1.5mm; padding: 6.5mm 5.5mm; display: grid; grid-template-columns: 17mm 1fr; gap: 3mm; }
.type .ab { font-family: 'Lora', serif; font-size: 15pt; font-weight: 600; color: var(--gold-d); }
.type h3 { font-size: 11pt; }
.type p { font-size: 9.6pt; color: #3a4550; }
.flow { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3.5mm; counter-reset: f; }
.flow div { background: var(--cream); padding: 5mm 4mm 5mm 12mm; position: relative; font-size: 9.8pt; border-radius: 1.2mm; min-height: 22mm; display: flex; align-items: center; }
.flow div:before { counter-increment: f; content: counter(f); position: absolute; left: 4mm; top: 50%; transform: translateY(-50%); font-family: 'Lora', serif; font-weight: 600; color: var(--gold-d); font-size: 13pt; }

/* errors */
.errs { display: grid; grid-template-columns: 1fr 1fr; gap: 7mm 8mm; margin-bottom: 10mm; }
.err { display: grid; grid-template-columns: 9mm 1fr; gap: 2mm; }
.err .x { width: 7mm; height: 7mm; border-radius: 50%; background: #f4e6e2; color: #a0473a; font-weight: 600; display: flex; align-items: center; justify-content: center; font-size: 10pt; }
.err h3 { font-size: 11.2pt; margin-top: .6mm; }
.err p { font-size: 9.8pt; color: #3a4550; }
.checklist { background: var(--navy); color: #fff; padding: 9mm 9mm; border-radius: 1.5mm; }
.checklist h3 { color: #fff; margin-bottom: 4mm; }
.checklist ul { list-style: none; columns: 2; column-gap: 8mm; }
.checklist li { position: relative; padding-left: 7mm; margin-bottom: 4mm; font-size: 10pt; break-inside: avoid; color: rgba(255,255,255,.9); }
.checklist li:before { content: "\\2713"; position: absolute; left: 0; color: var(--gold); font-weight: 600; }

/* us */
.usstats { display: grid; grid-template-columns: repeat(4,1fr); border-top: 0.3mm solid var(--line); border-bottom: 0.3mm solid var(--line); margin-bottom: 7mm; }
.usstats div { padding: 6mm 3mm; text-align: center; border-right: 0.3mm solid var(--line); }
.usstats div:last-child { border-right: 0; }
.usstats .n { font-family: 'Lora', serif; font-size: 22pt; color: var(--navy); font-weight: 600; line-height: 1.1; }
.usstats .t { font-size: 8.4pt; color: var(--muted); }
.partners { display: grid; grid-template-columns: 1fr 1fr; gap: 6mm; margin-top: 10mm; }
.partner { display: grid; grid-template-columns: 34mm 1fr; gap: 5mm; align-items: center; background: var(--cream); border-radius: 1.5mm; padding: 4mm; }
.partner .ph { width: 34mm; height: 44mm; background-size: cover; background-position: center top; border-radius: 1mm; }
.partner h3 { font-size: 12pt; margin-bottom: .5mm; }
.partner .r { font-size: 7.4pt; letter-spacing: .15em; text-transform: uppercase; color: var(--gold-d); font-weight: 600; margin-bottom: 2mm; }
.partner p { font-size: 9.4pt; color: #3a4550; }

/* back */
.back { background: var(--navy); color: #fff; }
.back .photo { position: absolute; left: 0; right: 0; top: 0; height: 95mm; background-size: cover; background-position: center; opacity: .9; }
.back .shade { position: absolute; left: 0; right: 0; top: 0; height: 95mm; background: linear-gradient(180deg, rgba(15,39,64,.2), var(--navy)); }
.back .body { position: absolute; left: 18mm; right: 18mm; top: 62mm; }
.back .arch { position: absolute; right: -40mm; top: -30mm; width: 160mm; opacity: .07; }
.back h2 { color: #fff; font-size: 30pt; }
.back .lead { font-size: 11.4pt; color: rgba(255,255,255,.85); line-height: 1.65; max-width: 150mm; margin-bottom: 10mm; }
.contact { display: grid; grid-template-columns: 1fr 1fr; gap: 5mm 8mm; margin-bottom: 8mm; }
.contact div { border-top: 0.35mm solid var(--gold); padding-top: 3mm; }
.contact .l { font-size: 7.4pt; letter-spacing: .18em; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 1.2mm; }
.contact .v { font-size: 10.4pt; color: #fff; font-weight: 400; }
.appt { display: inline-block; background: var(--gold); color: var(--navy); font-weight: 600; font-size: 8pt; letter-spacing: .16em; text-transform: uppercase; padding: 2.4mm 5mm; border-radius: .8mm; }
.back .logo { position: absolute; left: 18mm; bottom: 28mm; width: 50mm; }
.disc { position: absolute; left: 18mm; right: 18mm; bottom: 10mm; font-size: 6.8pt; color: rgba(255,255,255,.5); line-height: 1.5; }
"""

def foot(c, n, dark=False):
    return f'<div class="foot{" dark" if dark else ""}"><span>{e(c["footer"])}</span><span>{n:02d}</span></div>'

def render(c):
    _CUR["h"] = _HY[c["lang"]]
    hero, blog = b64("hero-legal.jpg"), b64("blog-legal.jpg")
    logo, logow = b64("logo-cabinet-legal.jpg"), b64("logo-white.png")
    P = []
    # 1 cover
    P.append(f'''<section class="page cover">
<div class="photo" style="background-image:url({hero})"></div><div class="shade"></div>
<img class="logo" src="{logo}">
<div class="body"><div class="kicker">{e(c["cover_kicker"])}</div><h1>{e(c["cover_title"])}</h1>
<div class="year">{e(c["cover_year"])}</div><p class="sub">{e(c["cover_sub"])}</p></div>
<div class="web">cabinetlegal.com.do<span class="since">{e(c["since"])}</span></div><div class="bar"></div></section>''')
    # 2 letter + toc
    toc = "".join(f'<li><span>{i+1:02d}</span>{e(t)}</li>' for i, t in enumerate(c["toc"]))
    P.append(f'''<section class="page"><div class="pad letter">
<div class="kicker">{e(c["letter_kicker"])}</div><h2>{e(c["letter_title"])}</h2><div class="rule"></div>
{"".join(f"<p>{e(p)}</p>" for p in c["letter"])}
<div class="sig">{e(c["sign"])}</div><div class="sigr">{e(c["sign_role"])}</div>
<div class="toc"><h3>{e(c["toc_title"])}</h3><ol>{toc}</ol></div></div>{foot(c,2)}</section>''')
    # 3 why
    stats = "".join(f'<div class="stat"><div class="n">{e(a)}</div><div class="t">{e(b)}</div></div>' for a, b in c["stats"])
    pts = "".join(f'<div class="pt"><h3>{e(a)}</h3><p>{e(b)}</p></div>' for a, b in c["why_points"])
    mx = max(v for _, v in c["sectors"])
    bars = "".join(f'<div class="barrow"><span>{e(n)}</span><div class="track"><div class="fill{" g" if n in ("Inmobiliario","Real estate","Immobilier") else ""}" style="width:{v/mx*100:.1f}%"></div></div><span class="v">{str(v).replace(".", "," if c["lang"]=="fr" else ".")} %</span></div>' for n, v in c["sectors"])
    P.append(f'''<section class="page"><div class="pad">
<div class="kicker">{e(c["why_kicker"])}</div><h2>{e(c["why_title"])}</h2><div class="rule"></div>
<p class="intro">{e(c["why_intro"])}</p><div class="stats">{stats}</div><div class="src">{e(c["stats_source"])}</div>
<div class="grid2">{pts}</div>
<div class="sect-title">{e(c["sectors_title"])}</div><div class="bars">{bars}</div>
</div>{foot(c,3)}</section>''')
    # 4 legal
    laws = "".join(f'<div class="law"><div class="num">{e(a)}</div><div class="nm">{e(b)}</div><p>{e(t)}</p></div>' for a, b, t in c["laws"])
    P.append(f'''<section class="page"><div class="pad">
<div class="kicker">{e(c["legal_kicker"])}</div><h2>{e(c["legal_title"])}</h2><div class="rule"></div>
<p class="intro">{e(c["legal_intro"])}</p><div class="laws">{laws}</div>
<div class="callout"><div class="ic">!</div><div>{e(c["legal_note"])}</div></div>
</div>{foot(c,4)}</section>''')
    # 5 buy
    steps = "".join(f'<div class="step"><div class="c">{i+1}</div><div><h3>{e(a)}</h3><p>{e(b)}</p></div></div>' for i, (a, b) in enumerate(c["steps"]))
    P.append(f'''<section class="page"><div class="pad">
<div class="kicker">{e(c["buy_kicker"])}</div><h2>{e(c["buy_title"])}</h2><div class="rule"></div>
<p class="intro">{e(c["buy_intro"])}</p><div class="steps">{steps}</div>
<div class="box"><h3>{e(c["buy_box_title"])}</h3><p>{e(c["buy_box"])}</p></div>
<p class="note">{e(c["buy_time"])}</p>
</div>{foot(c,5)}</section>''')
    # 6 costs
    rows = "".join(f'<tr><td>{e(a)}</td><td>{e(b)}</td></tr>' for a, b in c["cost_rows"])
    after = "".join(f'<div class="pt"><h3>{e(a)}</h3><p>{e(b)}</p></div>' for a, b in c["cost_after"])
    th = {"es": ("Concepto", "Referencia 2026"), "en": ("Item", "2026 reference"), "fr": ("Poste", "Référence 2026")}[c["lang"]]
    P.append(f'''<section class="page"><div class="pad">
<div class="kicker">{e(c["cost_kicker"])}</div><h2>{e(c["cost_title"])}</h2><div class="rule"></div>
<p class="intro">{e(c["cost_intro"])}</p>
<table class="costs"><tr><th>{th[0]}</th><th>{th[1]}</th></tr>{rows}</table>
<div class="sect-title" style="margin-top:4mm">{e(c["cost_after_title"])}</div>
<div class="grid2" style="grid-template-columns:1fr 1fr 1fr">{after}</div>
<p class="note">{e(c["cost_note"])}</p>
</div>{foot(c,6)}</section>''')
    # 7 confotur
    cards = "".join(f'<div class="card"><h3>{e(a)}</h3><p>{e(b)}</p></div>' for a, b in c["conf_points"])
    warn = "".join(f"<li>{e(w)}</li>" for w in c["conf_warn"])
    P.append(f'''<section class="page"><div class="pad">
<div class="kicker">{e(c["conf_kicker"])}</div><h2>{e(c["conf_title"])}</h2><div class="rule"></div>
<p class="intro">{e(c["conf_intro"])}</p>
<div class="band"><div class="bn">15</div><div><div class="bl">{e(c["conf_band_l"])}</div><div class="bt">{e(c["conf_band_t"])}</div></div></div>
<div class="cards3">{cards}</div>
<div class="sect-title" style="margin-top:0">{e(c["conf_warn_title"])}</div><ul class="warn">{warn}</ul>
</div>{foot(c,7)}</section>''')
    # 8 company
    types = "".join(f'<div class="type"><div class="ab">{e(a)}</div><div><h3>{e(b)}</h3><p>{e(t)}</p></div></div>' for a, b, t in c["co_types"])
    flow = "".join(f"<div>{e(s)}</div>" for s in c["co_steps"])
    P.append(f'''<section class="page"><div class="pad">
<div class="kicker">{e(c["co_kicker"])}</div><h2>{e(c["co_title"])}</h2><div class="rule"></div>
<p class="intro">{e(c["co_intro"])}</p><div class="types">{types}</div>
<div class="sect-title" style="margin-top:0">{e(c["co_steps_title"])}</div><div class="flow">{flow}</div>
<p class="note">{e(c["co_time"])}</p>
</div>{foot(c,8)}</section>''')
    # 9 residency
    rc = "".join(f'<div class="card"><h3>{e(a)}</h3><div class="big">{e(b)}</div><p>{e(t)}</p></div>' for a, b, t in c["res_cards"])
    rp = "".join(f"<li>{e(w)}</li>" for w in c["res_points"])
    P.append(f'''<section class="page"><div class="pad">
<div class="kicker">{e(c["res_kicker"])}</div><h2>{e(c["res_title"])}</h2><div class="rule"></div>
<p class="intro">{e(c["res_intro"])}</p><div class="cards3">{rc}</div>
<ul class="warn">{rp}</ul>
<div class="halfimg" style="background-image:url({blog});margin-top:6mm;height:70mm"></div>
<p class="note">{e(c["res_note"])}</p>
</div>{foot(c,9)}</section>''')
    # 10 errors
    errs = "".join(f'<div class="err"><div class="x">&#x2715;</div><div><h3>{e(a)}</h3><p>{e(b)}</p></div></div>' for a, b in c["errs"])
    chk = "".join(f"<li>{e(w)}</li>" for w in c["checks"])
    P.append(f'''<section class="page"><div class="pad">
<div class="kicker">{e(c["err_kicker"])}</div><h2>{e(c["err_title"])}</h2><div class="rule"></div>
<div class="errs">{errs}</div>
<div class="checklist"><h3>{e(c["check_title"])}</h3><ul>{chk}</ul></div>
</div>{foot(c,10)}</section>''')
    # 11 us
    us = "".join(f'<div><div class="n">{e(a)}</div><div class="t">{e(b)}</div></div>' for a, b in c["us_stats"])
    upts = "".join(f'<div class="pt"><h3>{e(a)}</h3><p>{e(b)}</p></div>' for a, b in c["us_points"])
    pics = [b64("aileen.jpg"), b64("ellis-beato.jpg")]
    prt = "".join(f'<div class="partner"><div class="ph" style="background-image:url({pics[i]})"></div><div><h3>{e(n)}</h3><div class="r">{e(r)}</div><p>{e(t)}</p></div></div>' for i, (n, r, t) in enumerate(c["partners"]))
    P.append(f'''<section class="page"><div class="pad">
<div class="kicker">{e(c["us_kicker"])}</div><h2>{e(c["us_title"])}</h2><div class="rule"></div>
<p class="intro">{e(c["us_intro"])}</p><div class="usstats">{us}</div>
<div class="grid2">{upts}</div><div class="partners">{prt}</div>
</div>{foot(c,11)}</section>''')
    # 12 back
    ct = "".join(f'<div><div class="l">{e(a)}</div><div class="v">{e(b)}</div></div>' for a, b in c["cta_items"])
    P.append(f'''<section class="page back">
<svg class="arch" viewBox="0 0 200 240"><path d="M20 240 V100 A80 80 0 0 1 180 100 V240" fill="none" stroke="#c8a46a" stroke-width="10"/><path d="M52 240 V104 A48 48 0 0 1 148 104 V150" fill="none" stroke="#c8a46a" stroke-width="10"/><path d="M84 175 V240" fill="none" stroke="#c8a46a" stroke-width="10"/></svg>
<div class="body"><div class="kicker" style="color:var(--gold)">Cabinet Legal</div><h2>{e(c["cta_title"])}</h2><div class="rule"></div>
<p class="lead">{e(c["cta_text"])}</p><div class="contact">{ct}</div><span class="appt">{e(c["cta_by_appt"])}</span></div>
<img class="logo" src="{logow}"><p class="disc">{e(c["disclaimer"])}</p></section>''')
    return f'<!doctype html><html lang="{c["lang"]}"><head><meta charset="utf-8"><title>{e(c["cover_title"])}</title><style>{CSS}</style></head><body>{"".join(P)}</body></html>'

if __name__ == "__main__":
    sys.path.insert(0, str(ROOT))
    prepare_images()
    for lang in sys.argv[1:] or ["es", "en", "fr"]:
        c = importlib.import_module(f"content_{lang}").C
        (OUT / f"guia-{lang}.html").write_text(render(c), encoding="utf-8")
        print("ok", lang)
