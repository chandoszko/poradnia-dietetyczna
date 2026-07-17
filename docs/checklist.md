# Checklist — Poradnia Dietetyczna

## Faza 0: Środowisko (1-2h)
- [ ] Zainstalować Node.js 20+ → https://nodejs.org
  - Sprawdź: `node -v` (powinno być v20.x.x lub wyżej)
- [ ] Zainstalować Git → https://git-scm.com
  - Sprawdź: `git --version`
- [ ] Założyć konto GitHub → https://github.com
- [ ] Założyć konto Cloudflare → https://cloudflare.com
- [ ] Zainstalować OpenSpec: `npm install -g @fission-ai/openspec@latest`
  - Sprawdź: `openspec --version`
- [ ] Stworzyć folder projektu: `mkdir poradnia-dietetyczna && cd poradnia-dietetyczna`
- [ ] Zainicjalizować Astro: `npm create astro@latest .`
- [ ] Zainicjalizować OpenSpec: `openspec init`
- [ ] Skonfigurować Tailwind CSS w Astro
- [ ] Dodać config OpenSpec (z pliku config-openspec.yaml)

## Faza 1: Wywiad z Mamą (1h)
- [ ] Umówić się na rozmowę z Mamą
- [ ] Ustalić listę usług i cennik
- [ ] Ustalić dane kontaktowe (adres, telefon, email, godziny otwarcia)
- [ ] Ustalić kolory/ styl strony (inspiracje)
- [ ] Zapytać o logo (czy Mama ma, czy trzeba zaprojektować)
- [ ] Ustalić kiedy będą zdjęcia (po zmianie biura?)
- [ ] Zapisać notatki z rozmowy

## Faza 2: Strona informacyjna MVP (4-6h)
- [ ] Uruchomić OpenSpec: `/opsx:propose "strona poradni dietetycznej MVP"`
- [ ] Przejrzeć proposal.md i zweryfikować z notatkami z wywiadu
- [ ] Zaimplementować stronę główną (index)
- [ ] Zaimplementować podstronę "Oferta"
- [ ] Zaimplementować podstronę "Kontakt"
- [ ] Dodać nawigację (header) i stopkę (footer)
- [ ] Sprawdzić responsywność (mobile, tablet, desktop)
- [ ] Dodać SEO (title, meta description, Open Graph)
- [ ] Przetestować formularz kontaktowy
- [ ] Archiwizować change: `/opsx:archive`

## Faza 3: Deploy (1-2h)
- [ ] Zainicjalizować Git w projekcie
- [ ] Utworzyć repozytorium na GitHubie
- [ ] Push kodu na GitHub
- [ ] Połączyć repo z Cloudflare Pages
- [ ] Sprawdzić auto-deploy na每一次 push
- [ ] Sprawdzić HTTPS/SSL
- [ ] Wykupić domenę (np. poradnia-dietetyczna.pl)
- [ ] Podłączyć domenę do Cloudflare Pages
- [ ] Przetestować stronę na produkcji

## Faza 4: Wykończenie (2-3h)
- [ ] Dodać favicon
- [ ] Dodać meta tagi (robots.txt, sitemap.xml)
- [ ] Zarejestrować stronę w Google Search Console
- [ ] (Opcjonalnie) Dodać Google Analytics
- [ ] Przejść test Lighthouse (cel: 90+)

## Rozwój (po MVP)
- [ ] Blog porad dietetycznych
- [ ] System rezerwacji wizyt online
- [ ] Galeria zdjęć (po zmianie biura)
- [ ] Sekcja "O nas" z historią poradni
