# STATUS — Poradnia Dietetyczna

**Data ostatniej aktualizacji:** 2026-07-21 (noc)

---

## Aktualny stan

| Element | Status |
|---------|--------|
| Node.js | ✅ Zainstalowany (v24.15.0) |
| Git | ✅ Zainstalowany (v2.55.0) |
| VS Code | ✅ Zainstalowany (v1.126.0) |
| Konto GitHub | ✅ Założone (chandoszko) |
| Repozytorium | ✅ https://github.com/chandoszko/poradnia-dietetyczna |
| Konto Cloudflare | ✅ Założone |
| Astro + Tailwind | ✅ Zainicjalizowane i na GitHubie |
| Ankieta mamy | ✅ Odpowiedzi odebrane (20.07.2026) |

---

## Fazy projektu

| Faza | Opis | Status |
|------|------|--------|
| **0** | Środowisko (Node, Git, GitHub, VS Code) | ✅ Zakończona |
| **1** | Wywiad z Mamą (ankieta, kolory, dane) | ✅ Zakończona (20.07.2026) |
| **2** | Strona informacyjna MVP — design Claude na branchu `test-claude-design` | ✅ Zakończona (21.07.2026) |
| **3** | Deploy na Cloudflare Pages | ✅ Zakończona (21.07.2026) — https://poradnia-dietetyczna.pages.dev |
| **4** | Wykończenie (favicon, SEO, Lighthouse) | 🔧 W trakcie — dodane: robots.txt, sitemap, Open Graph, Google Analytics, Google Search Console |
| **5** | Wykupienie domeny | ⏳ Do zrobienia |

---

## Dane z ankiety (20.07.2026)

| Element | Wartość |
|---------|---------|
| Imię | Elżbieta Chandoszko |
| Tytuł | Dietetyk w chorobach wewnętrznych i metabolicznych |
| Email | elzbietachan@gmail.com |
| Telefon | 577 210 402 |
| Adres (obecny) | Dworcowa 25a, Płock |
| Adres (przyszły) | Wyszogrodzka 144, Płock (galeria) |
| Usługi | 9 (konsultacje, analiza składu ciała, jadłospisy, diety redukcyjne/metaboliczne/cukrzycowe) |
| Cennik | NIE publikować — ceny ustalane indywidualnie |
| Godziny | NIE podawać |
| Styl | Nowoczesny + ciepły |
| Zdjęcia | Portret jutro (21.07), gabinet systematycznie |
| Logo | Do wypracowania |
| Instagram | Tak (do działania) |
| Facebook | Nie — do założenia |

---

## Plan pracy — Faza 2 (MVP)

### Design single-page (branch `test-claude-design`) — ✅ Zrobione 20.07

| # | Zadanie | Status |
|---|---------|--------|
| 2a | Strona główna — hero z danymi mamy | ✅ Gotowe |
| 2b | Sekcja "O mnie" — imię, tytuł, opis, wykształcenie | ✅ Gotowe |
| 2c | Sekcja "Usługi" — 9 usług w kartach | ✅ Gotowe |
| 2d | Sekcja "Jak pracuję" — 4 kroki | ✅ Gotowe |
| 2e | Sekcja "Kontakt" — tel, email, adres, mapa | ✅ Gotowe |
| 2f | Navbar sticky + mobile hamburger | ✅ Gotowe |
| 2g | Footer — 4 kolumny | ✅ Gotowe |
| 2h | Design system (CSS variables, paleta, fonty) | ✅ Gotowe |
| — | Podmienić zdjęcie portretowe | ⏳ Czekamy na mamę (21.07) |
| — | Dodać logo | ⏳ Czekamy na mamę |
| — | Merge do main | ✅ Zrobione (21.07.2026) |
| — | Export statyczny (ZIP) do wysłania | ✅ Zrobione (21.07.2026) |
| — | Deploy na Cloudflare Pages | ✅ Zrobione (21.07.2026) |

### Następne kroki (22.07.2026)

1. Polityka prywatności (podstrona)
2. Polityka RODO (podstrona)
3. Formularz kontaktowy
4. Poprawić Accessibility do 95+ (Lighthouse)
5. Strona 404 (błąd)
6. Podmiana zdjęcia portretowego (jak mama dostarczy)
7. Dodać logo (jak mama dostarczy)
8. Wykupienie domeny (opcjonalnie)

---

## Instrukcja po restarcie

### Krok 1: Wróć do projektu
1. Otwórz terminal w folderze: `D:\ai\01 projekty\poradnia-dietetyczna`
2. Uruchom opencode
3. Napisz: **"Kontynuujemy fazę 2 — jesteśmy na branchu test-claude-design"**

### Aktualna sytuacja
- Branch `main` — design single-page gotowy (5 sekcji)
- Strona online: https://poradnia-dietetyczna.pages.dev
- Auto-deploy z GitHuba na Cloudflare Pages
- SEO: robots.txt ✅, sitemap.xml ✅, Open Graph ✅, Google Search Console ✅, Google Analytics ✅
- Lighthouse: Performance 99, Accessibility 93, Best Practices 100, SEO 100
- Czekamy na zdjęcie portretowe mamy
- Czekamy na logo
- Jutro: Polityka prywatności, RODO, formularz kontaktowy, Accessibility

### Stack technologiczny

| Element | Technologia |
|---------|-------------|
| Framework | Astro 7.x |
| Stylowanie | Tailwind CSS 4.x |
| Język | TypeScript |
| Edytor | VS Code |
| Hosting | Cloudflare Pages (darmowy) |
| Repozytorium | GitHub |
| AI | opencode (Claude) |
