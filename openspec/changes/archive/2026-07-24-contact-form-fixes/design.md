## Context

Obecnie spinner (`animate-spin` + `hidden` class) na przycisku "Wyślij wiadomość" jest widoczny przez cały czas (błąd w szablonie — class `animate-spin` jest zawsze obecna, a `hidden` nie jest poprawnie aplikowane). Komunikat sukcesu/błędu (`formFeedback` div) wyświetla się bez mechanizmu auto-ukrywania.

## Goals / Non-Goals

**Goals:**
- Spinner pojawia się tylko podczas wysyłania żądania (od kliknięcia do odpowiedzi)
- Komunikat auto-ukrywa się po 2 minutach
- Timer jest resetowany przy każdym nowym wysłaniu

**Non-Goals:**
- Nie zmieniamy istniejącej walidacji ani logiki wysyłki
- Nie zmieniamy wyglądu komunikatu ani przycisku (tylko zachowanie)

## Decisions

1. **Całkowite ukrycie spinera przed kliknięciem**
   - Spinner jest domyślnie ukryty w HTML (`class="hidden"`, bez `inline-block`). W `setLoading(true)`: usuwane `hidden`, dodawane `inline-block` i `animate-spin`. W `setLoading(false)`: dodawane `hidden`, usuwane `inline-block` i `animate-spin`.
   - **Kluczowe:** `inline-block` NIE może być w statycznym HTML, bo Tailwind v4 nadpisuje `display: none` z `hidden` — wtedy spinner byłby widoczny jako statyczne kółko przed kliknięciem.
   - *Alternatywa rozważana:* Zostawić `animate-spin` stale i tylko toggle `hidden`. Odrzucona — Tailwind v4 ma konflikt `display` między `hidden` a `inline-block`.

2. **`setTimeout` w `showFeedback()` z zapisem referencji**
   - `showFeedback()` ustawia `setTimeout(fn, 120000)` i zapisuje jego ID w zmiennej. Przed każdym nowym `showFeedback()` istniejący timer jest czyszczony (`clearTimeout`).
   - *Alternatywa:* Licznik w interwale — odrzucona, niepotrzebnie skomplikowana.

## Risks / Trade-offs

- 2 minuty to długi czas — użytkownik może opuścić stronę, ale to nie problem (timer ginie z session).
- Jeśli użytkownik wyśle formularz wiele razy, każdy poprzedni timer jest czyszczony — tylko ostatni komunikat pozostaje widoczny.
