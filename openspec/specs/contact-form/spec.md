## ADDED Requirements

### Requirement: Formularz kontaktowy — wyświetlanie
System SHALL wyświetlać formularz kontaktowy w sekcji kontakt strony głównej, obok danych kontaktowych i mapy.

#### Scenario: Formularz widoczny w sekcji kontakt
- **WHEN** użytkownik przewija do sekcji #kontakt
- **THEN** formularz jest widoczny z polami: imię, email, temat, wiadomość

### Requirement: Formularz kontaktowy — walidacja klienta
System SHALL walidować pola formularza przed wysłaniem, używając HTML5 i JavaScript.

#### Scenario: Puste wymagane pole
- **WHEN** użytkownik kliknie "Wyślij" z pustym polem email
- **THEN** formularz pokazuje błąd walidacji i nie wysyła żądania

#### Scenario: Nieprawidłowy email
- **WHEN** użytkownik wpisze niepoprawny adres email
- **THEN** formularz pokazuje błąd "Podaj prawidłowy adres email"

### Requirement: Formularz kontaktowy — wysyłka
System SHALL wysyłać treść formularza na email elzbietachan@gmail.com przez Cloudflare Pages Function.

#### Scenario: Pomyślne wysłanie
- **WHEN** użytkownik wypełni wszystkie pola i kliknie "Wyślij"
- **THEN** formularz wysyła żądanie POST do /api/contact
- **AND** po sukcesie pokazuje komunikat "Wiadomość wysłana! Odpowiem najszybciej jak to możliwe."
- **AND** pola formularza zostają wyczyszczone

#### Scenario: Błąd serwera
- **WHEN** Function zwróci błąd (np. limit Resend wyczerpany)
- **THEN** użytkownik widzi komunikat "Przepraszamy, wystąpił błąd. Spróbuj ponownie później lub zadzwoń."

### Requirement: Formularz kontaktowy — antyspam
System SHALL chronić formularz przed spamem za pomocą honeypot i rate limitingu.

#### Scenario: Bot wypełnia honeypot
- **WHEN** niewidzialne pole honeypot zostanie wypełnione
- **THEN** żądanie jest odrzucane bez wysyłki maila
- **AND** bot nie widzi żadnego komunikatu błędu

#### Scenario: Rate limit przekroczony
- **WHEN** użytkownik wyśle więcej niż 1 formularz w ciągu 5 minut z tego samego IP
- **THEN** Function zwraca błąd 429 z komunikatem "Za dużo żądań. Spróbuj za kilka minut."

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
