## Context

Strona poradni dietetycznej jest hostowana na Cloudflare Pages jako statyczny HTML. Obecna sekcja kontakt zawiera dane (telefon, email, adres, mapa Google), ale brak formularza kontaktowego. Dodanie formularza wymaga backendu do wysyłki maili — Cloudflare Pages Functions zapewnia serverless backend bez dodatkowej infrastruktury.

## Goals / Non-Goals

**Goals:**
- Formularz kontaktowy w sekcji kontakt, stylowany zgodnie z design systemem strony (TailwindCSS)
- Walidacja pól po stronie klienta (HTML5 + JS) i serwera (Cloudflare Function)
- Wysyłka treści formularza na email mamy (elzbietachan@gmail.com)
- Feedback dla użytkownika (sukces/błąd) bez przeładowania strony
- Ochrona przed spamem: honeypot + rate limiting na Function

**Non-Goals:**
- Zaawansowany CRM lub baza danych — formularz wysyła tylko maila
- Rejestracja użytkowników ani system logowania
- Przechowywanie historii wysłanych wiadomości

## Decisions

| Decyzja | Opcja | Alternatywy |
|---------|-------|-------------|
| Backend | Cloudflare Pages Functions (serverless, 0 konfiguracji, darmowy limit 100k żądań/dzień) | Formspree (zewnętrzna usługa, limit darmowy 50/miesiąc), Netlify Forms (nie działa na CF) |
| Wysyłka maili | `resend` (proste API, darmowy limit 100/dzień) | `sendgrid`, `nodemailer` — Resend ma najprostsze API i darmowy tier |
| Walidacja klienta | HTML5 `required` + pattern + JS fetch przed submit | Tylko HTML5 (niewystarczające), tylko JS (duplikacja) |
| Antyspam | Honeypot (niewidzialne pole) + rate limit 1/5min per IP na Function | CAPTCHA (gorsze UX), brak (ryzyko spamu) |
| Feedback | Fetch API → innerHTML na tej samej stronie | Page reload (gorsze UX), redirect (niepotrzebny) |

## Risks / Trade-offs

- [Resend darmowy limit] → 100 maili/dzień, po przekroczeniu błąd 429. Na starcie wystarczy.
- [Cloudflare Functions cold start] → Pierwsze żądanie po bezczynności może zająć ~1s. Akceptowalne dla formularza.
- [Brak przechowywania] → Jeśli mail nie dotrze, użytkownik nie ma kopii. Na razie OK — MVP.
