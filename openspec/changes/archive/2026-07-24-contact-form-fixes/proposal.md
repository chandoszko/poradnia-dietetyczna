## Why

Przycisk "Wyślij wiadomość" cały czas pokazuje animację ładowania (kręcące się kółko), a komunikat o sukcesie/błędzie pozostaje widoczny bez ograniczenia czasowego, co dezorientuje użytkownika.

## What Changes

- Ikona spinera (kręcące się kółko) na przycisku "Wyślij" jest całkowicie niewidoczna przed kliknięciem, pojawia się DOPIERO po kliknięciu i znika po otrzymaniu odpowiedzi z serwera
- Komunikat sukcesu lub błędu znika automatycznie po 2 minutach (zamiast pozostawać do odświeżenia strony)

## Capabilities

### New Capabilities

*(none — żadna nowa capability nie jest wprowadzana)*

### Modified Capabilities

- `contact-form`: Dodanie wymagań dotyczących zachowania przycisku (spinner tylko podczas wysyłania) oraz auto-ukrywania komunikatu po 2 minutach

## Impact

- `src/pages/index.astro` — modyfikacja skryptu klienckiego: warunkowe pokazywanie spinnera, dodanie `setTimeout` dla komunikatu
- Opcjonalnie: przegląd CSS w poszukiwaniu przyczyny stałej widoczności animacji
