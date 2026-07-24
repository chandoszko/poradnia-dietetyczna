## 1. Naprawa spinnera na przycisku

- [x] 1.1 Usuń stałą klasę `animate-spin` z HTML spinnera w `index.astro`
- [x] 1.2 Usuń `inline-block` z HTML spinnera (konflikt z `hidden` w Tailwind v4)
- [x] 1.3 W `setLoading()` dodaj/usuń `inline-block`, `hidden` i `animate-spin` dynamicznie
- [x] 1.4 Zweryfikuj, że spinner jest niewidoczny przed kliknięciem i po otrzymaniu odpowiedzi

## 2. Auto-ukrywanie komunikatu po 2 minutach

- [x] 2.1 Dodaj zmienną `feedbackTimeout` do przechowywania ID timera
- [x] 2.2 W `showFeedback()` wyczyść istniejący timer (`clearTimeout`) przed ustawieniem nowego
- [x] 2.3 Ustaw `setTimeout` na 120000ms, który ukrywa `formFeedback` (dodaje `hidden`, usuwa komunikaty)
- [x] 2.4 W miejscu ukrywania feedbacku przed wysłaniem (linia przed `setLoading(true)`) również czyść timer
- [x] 2.5 Zweryfikuj działanie: wysłanie → komunikat → znika po 2 min; nowe wysłanie resetuje timer
