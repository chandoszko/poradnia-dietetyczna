## Why

Strona poradni dietetycznej posiada sekcję kontakt z danymi (telefon, email, adres, mapa), ale brakuje formularza kontaktowego. Odwiedzający muszą ręcznie kopiować dane, aby napisać maila lub zadzwonić — to zwiększa tarcie i może zniechęcać potencjalnych pacjentów.

## What Changes

- Dodanie formularza kontaktowego w sekcji kontakt (obok danych i mapy)
- Integracja z Cloudflare Pages Functions jako backendem do wysyłki maili
- Potwierdzenie wysłania (sukces/błąd) bez przeładowania strony
- Podstawowa walidacja pól po stronie klienta i serwera
- Ochrona przed spamem (honeypot + rate limiting)

## Capabilities

### New Capabilities
- `contact-form`: formularz kontaktowy z walidacją, wysyłką przez Cloudflare Functions i feedbackiem dla użytkownika

### Modified Capabilities
- (brak — sekcja kontakt istnieje wizualnie, ale nie ma zdefiniowanych wymagań w `openspec/specs/`)

## Impact

- `src/pages/index.astro` — dodanie formularza w sekcji #kontakt
- `functions/` — nowy katalog z Cloudflare Pages Function do obsługi wysyłki
- `package.json` — ewentualnie nowa zależność do wysyłki maili (np. `resend` lub `sendgrid`)
- `astro.config.mjs` — brak zmian (Cloudflare Functions działają niezależnie od Astro)
- Deploy: Cloudflare Pages Functions wbudowane w platformę — bez dodatkowej konfiguracji
