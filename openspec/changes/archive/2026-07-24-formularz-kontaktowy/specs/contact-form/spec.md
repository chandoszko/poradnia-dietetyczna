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
