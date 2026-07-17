# Design System — Poradnia Dietetyczna

**Paleta:** Modern Greenery & Slate
**Stworzono:** 2026-07-17

---

## Paleta Kolorystyczna

| Kolor | Rola | HEX | Opis |
|-------|------|-----|------|
| Głęboki Granat | Primary / Nagłówki | #1D2B42 | Główny kolor tekstu i akcentów budujących zaufanie |
| Świeża Limonka | Action / Akcent | #B5C935 | Przyciski (CTA), ikony zdrowia, wyróżnienia |
| Morska Zieleń | Secondary | #88B2A1 | Uzupełnienie, tła sekcji, elementy dekoracyjne |
| Jasny Miętowy | Soft Background | #B2D4C7 | Delikatne tła kart, podświetlenia wierszy |
| Czysta Biel | Surface | #FFFFFF | Główne tło strony (white space) |

---

## Zasada 60-30-10

- **60%** — Czysta Biel (tło główne)
- **30%** — Głęboki Granat (tekst, nagłówki)
- **10%** — Świeża Limonka (akcje, przyciski)

---

## Typografia

- **Nagłówki (H1-H3):** Głęboki Granat (#1D2B42)
- **Tekst główny:** Ciemnoszary (niższe nasycenie granatu)
- **Linki:** Morska Zieleń (#88B2A1)

---

## Elementy UI

### Przyciski
- **Primary:** Świeża Limonka (#B5C935) + biały lub granatowy tekst
- **Hover:** Morska Zieleń (#88B2A1)
- **Uwaga:** Zielony limonkowy na białym tle może mieć niski kontrast — używaj granatowego tekstu na limonkowym tle

### Tła sekcji
- **Sekcje główne:** Czysta Biel (#FFFFFF)
- **Sekcje alternatywne:** Jasny Miętowy (#B2D4C7)
- **Separatory:** Geometryczne skosy (jak na wizytówce)

---

## Zastosowanie w Astro + Tailwind

Kolory zostaną dodane do `tailwind.config.mjs` jako customowe klasy:
- `granat` — #1D2B42
- `limonka` — #B5C935
- `morska-ziel` — #88B2A1
- `mietowy` — #B2D4C7
