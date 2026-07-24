## 1. Backend — Cloudflare Pages Function

- [x] 1.1 Instalacja `resend` jako zależność
- [x] 1.2 Utworzenie `functions/api/contact.ts` z obsługą POST
- [x] 1.3 Walidacja pól po stronie serwera (imię, email, temat, wiadomość)
- [x] 1.4 Honeypot — odrzucanie jeśli niewidzialne pole wypełnione
- [x] 1.5 Rate limiting — sprawdzanie IP w KV lub in-memory
- [x] 1.6 Integracja z Resend API do wysyłki maila na elzbietachan@gmail.com
- [x] 1.7 Obsługa błędów (Resend limit, walidacja, 429 rate limit)

## 2. Frontend — formularz w sekcji kontakt

- [x] 2.1 Dodanie formularza HTML w sekcji #kontakt w `index.astro`
- [x] 2.2 Pola: imię (required), email (required, pattern), temat (required), wiadomość (textarea, required)
- [x] 2.3 Stylowanie formularza zgodne z design systemem (TailwindCSS)
- [x] 2.4 Walidacja JS przed submitem (fetch zamiast standardowego submit)
- [x] 2.5 Honeypot — ukryte pole niewidoczne dla użytkownika
- [x] 2.6 Feedback — komunikat sukcesu/błędu po wysłaniu (bez przeładowania)
- [x] 2.7 Czyszczenie pól po pomyślnym wysłaniu

## 3. Konfiguracja i secrets (wymaga ręcznego wykonania)

- [ ] 3.1 Ustawienie zmiennej środowiskowej RESEND_API_KEY w Cloudflare Pages (w dashboardzie Cloudflare → poradnia-dietetyczna → Settings → Environment Variables → dodać RESEND_API_KEY)
- [ ] 3.2 Test wysyłki — po deployu i dodaniu klucza przetestować formularz na produkcji
- [ ] 3.3 Test walidacji — sprawdzić: puste pole, nieprawidłowy email, honeypot (klient + serwer)
