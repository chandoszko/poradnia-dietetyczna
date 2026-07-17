# STATUS — Poradnia Dietetyczna (kontynuacja po restarcie terminala)

**Data ostatniej aktualizacji:** 2026-07-17

---

## Aktualny stan

| Element | Status |
|---------|--------|
| Node.js | ✅ Zainstalowany (v24.15.0) |
| Git | ✅ Zainstalowany (v2.55.0) |
| VS Code | ✅ Zainstalowany (v1.126.0) |
| Konto GitHub | ✅ Założone (chandoszko) |
| Repozytorium | ✅ https://github.com/chandoszko/poradnia-dietetyczna |
| Konto Cloudflare | ❌ Do założenia (faza 3) |
| OpenSpec | ❌ Do zainstalowania |
| Astro + Tailwind | ✅ Zainicjalizowane i na GitHubie |

---

## Instrukcja po restarcie

### Krok 1: Zainstaluj Git
1. Pobierz: https://git-scm.com/download/win
2. Zainstaluj (domyślne opcje OK)
3. Zamknij i otwórz ponownie terminal
4. Sprawdź: `git --version`

### Krok 2: Załóż konta
- **GitHub:** https://github.com (do version control)
- **Cloudflare:** https://cloudflare.com (do hostingu strony)

### Krok 3: Wróć do opencode
1. Otwórz terminal w folderze: `D:\ai\01 projekty\poradnia-dietetyczna`
2. Uruchom opencode
3. Napisz: **"Kontynuujemy fazę 0 — dalej"**
4. Podpowiem dalej krok po kroku

---

## Fazy projektu (plan)

| Faza | Opis | Status |
|------|------|--------|
| **0** | Środowisko (Node, Git, GitHub, VS Code) | ✅ Zakończona |
| **1** | Wywiad z Mamą (usługi, cennik, dane, styl) | ⏳ Do zrobienia |
| **2** | Strona informacyjna MVP (Astro + Tailwind) | ⏳ Do zrobienia |
| **3** | Deploy na Cloudflare Pages | ⏳ Do zrobienia |
| **4** | Wykończenie (favicon, SEO, Lighthouse) | ⏳ Do zrobienia |
| **5** | Wykupienie domeny | ⏳ Do zrobienia |

---

## Struktura projektu

```
D:\ai\01 projekty\poradnia-dietetyczna\
├── src/
│   ├── pages/
│   │   └── index.astro        ← Główna strona
│   └── styles/
│       └── global.css         ← Style Tailwind
├── public/                    ← Statyczne pliki (favicon)
├── docs/
│   ├── checklist.md           ← Szczegółowy checklist
│   └── config-openspec.yaml   ← Config OpenSpec
├── astro.config.mjs           ← Konfiguracja Astro
├── package.json               ← Zależności
├── README.md
└── STATUS.md
```

---

## Co zrobiono wcześniej (kontekst)

- Wysłano maila do mBanku z pytaniami o promocję eKonta do usług (17.07) — czekamy na odpowiedź
- Projekt "Założy IKE/IKZE" ma nowy flow: mBank konto → premia → eMakler → IKE
- Dla Magdy: PKO IKE Obligacje
- Zdrowie na Start: badania krwi, moczu, kału, RTG zrobione, pozostałe wizyty umówione
- LinkedIn i CV zaktualizowane (13.07)

---

## Stack technologiczny

| Element | Technologia |
|---------|-------------|
| Framework | Astro 7.x |
| Stylowanie | Tailwind CSS 4.x |
| Język | TypeScript |
| Edytor | VS Code |
| Hosting | Cloudflare Pages (darmowy) |
| Repozytorium | GitHub |
| AI | opencode (Claude) |
