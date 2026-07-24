## ADDED Requirements

### Requirement: Formularz kontaktowy — widoczność ikony spinera
System SHALL wyświetlać ikonę spinera na przycisku "Wyślij wiadomość" dopiero po kliknięciu i ukrywać ją po otrzymaniu odpowiedzi z serwera.

#### Scenario: Spinner widoczny po kliknięciu
- **WHEN** użytkownik kliknie "Wyślij wiadomość"
- **AND** formularz przejdzie walidację klienta
- **THEN** ikona spinera (kręcące się kółko) staje się widoczna
- **AND** przycisk jest wyłączony (disabled)
- **AND** tekst "Wyślij wiadomość" jest ukryty

#### Scenario: Spinner znika po odpowiedzi
- **WHEN** serwer zwróci odpowiedź (sukces lub błąd)
- **THEN** ikona spinera znika
- **AND** przycisk jest włączony
- **AND** tekst "Wyślij wiadomość" jest widoczny

### Requirement: Formularz kontaktowy — auto-ukrywanie komunikatu
System SHALL automatycznie ukrywać komunikat sukcesu lub błędu po 2 minutach od jego wyświetlenia.

#### Scenario: Komunikat znika po 2 minutach
- **WHEN** formularz wyświetli komunikat sukcesu lub błędu
- **THEN** po 120 sekundach komunikat znika bez interakcji użytkownika

#### Scenario: Nowe wysłanie resetuje timer
- **WHEN** użytkownik wyśle formularz ponownie przed upływem 2 minut
- **THEN** poprzedni komunikat jest ukrywany natychmiast
- **AND** timer auto-ukrywania jest resetowany dla nowego komunikatu
