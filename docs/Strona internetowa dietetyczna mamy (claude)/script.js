/* ========================================
   Elżbieta Chandoszko - Dietetyk
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initBookingForm();
    initSmoothScroll();
    initDatePicker();
});

/* --- Nawigacja --- */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a:not(.btn)');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

/* --- Menu mobilne --- */
function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        links.classList.toggle('active');
    });

    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            links.classList.remove('active');
        });
    });
}

/* --- Smooth scroll --- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* --- Date picker --- */
function initDatePicker() {
    const dateInput = document.getElementById('date');
    if (!dateInput) return;

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = formatDate(tomorrow);

    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 60);
    dateInput.max = formatDate(maxDate);

    dateInput.addEventListener('change', () => {
        generateTimeSlots(dateInput.value);
    });
}

function formatDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

/* --- Generowanie dostępnych godzin --- */
function generateTimeSlots(dateStr) {
    const container = document.getElementById('timeSlots');
    const timeInput = document.getElementById('time');
    timeInput.value = '';

    const date = new Date(dateStr);
    const dayOfWeek = date.getDay();

    // Niedziela - gabinet zamknięty
    if (dayOfWeek === 0) {
        container.innerHTML = '<p class="time-slots-info">W niedziele gabinet jest zamknięty. Wybierz inny dzień.</p>';
        return;
    }

    // Godziny przyjęć: Pon-Pt 9-18, Sob 9-13
    const isSaturday = dayOfWeek === 6;
    const startHour = 9;
    const endHour = isSaturday ? 13 : 18;

    // Generuj sloty co 30 minut
    const slots = [];
    for (let h = startHour; h < endHour; h++) {
        slots.push(`${String(h).padStart(2, '0')}:00`);
        if (h < endHour - 1 || !isSaturday) {
            slots.push(`${String(h).padStart(2, '0')}:30`);
        }
    }

    // Symuluj zajęte terminy
    const seed = hashCode(dateStr);
    const unavailable = new Set();
    for (let i = 0; i < Math.floor(slots.length * 0.3); i++) {
        const idx = Math.abs((seed * (i + 1) * 7) % slots.length);
        unavailable.add(idx);
    }

    container.innerHTML = '';
    slots.forEach((slot, index) => {
        const div = document.createElement('div');
        div.className = 'time-slot';
        div.textContent = slot;

        if (unavailable.has(index)) {
            div.classList.add('unavailable');
            div.title = 'Termin zajęty';
        } else {
            div.addEventListener('click', () => {
                container.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
                div.classList.add('selected');
                timeInput.value = slot;
            });
        }

        container.appendChild(div);
    });
}

function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0;
    }
    return hash;
}

/* --- System rezerwacji wielokrokowy --- */
let currentStep = 1;

function initBookingForm() {
    const form = document.getElementById('bookingForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        submitBooking();
    });
}

function nextStep(from) {
    if (!validateStep(from)) return;

    currentStep = from + 1;
    showStep(currentStep);
    updateSteps();

    if (currentStep === 4) {
        generateSummary();
    }
}

function prevStep(from) {
    currentStep = from - 1;
    showStep(currentStep);
    updateSteps();
}

function showStep(step) {
    document.querySelectorAll('.form-step').forEach(el => el.classList.remove('active'));
    const target = document.getElementById('formStep' + step);
    if (target) target.classList.add('active');
}

function updateSteps() {
    document.querySelectorAll('.booking-steps .step').forEach(el => {
        const stepNum = parseInt(el.dataset.step);
        el.classList.remove('active', 'completed');
        if (stepNum === currentStep) {
            el.classList.add('active');
        } else if (stepNum < currentStep) {
            el.classList.add('completed');
        }
    });
}

/* --- Walidacja --- */
function validateStep(step) {
    clearErrors();

    switch (step) {
        case 1:
            return validateStep1();
        case 2:
            return validateStep2();
        case 3:
            return validateStep3();
        default:
            return true;
    }
}

function validateStep1() {
    let valid = true;
    const service = document.getElementById('service');
    const visitType = document.getElementById('visitType');

    if (!service.value) {
        markError(service, 'Wybierz obszar wizyty');
        valid = false;
    }
    if (!visitType.value) {
        markError(visitType, 'Wybierz typ wizyty');
        valid = false;
    }

    return valid;
}

function validateStep2() {
    let valid = true;
    const date = document.getElementById('date');
    const time = document.getElementById('time');

    if (!date.value) {
        markError(date, 'Wybierz datę');
        valid = false;
    }
    if (!time.value) {
        showAlert('Wybierz godzinę wizyty');
        valid = false;
    }

    return valid;
}

function validateStep3() {
    let valid = true;
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const consent = document.getElementById('consent');

    if (!firstName.value.trim()) {
        markError(firstName, 'Podaj imię');
        valid = false;
    }
    if (!lastName.value.trim()) {
        markError(lastName, 'Podaj nazwisko');
        valid = false;
    }
    if (!email.value.trim() || !isValidEmail(email.value)) {
        markError(email, 'Podaj prawidłowy e-mail');
        valid = false;
    }
    if (!phone.value.trim() || !isValidPhone(phone.value)) {
        markError(phone, 'Podaj prawidłowy numer telefonu');
        valid = false;
    }
    if (!consent.checked) {
        showAlert('Musisz wyrazić zgodę na przetwarzanie danych osobowych');
        valid = false;
    }

    return valid;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');
    return /^\+?\d{9,15}$/.test(cleaned);
}

function markError(element, message) {
    element.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = 'color: #e53935; font-size: 0.8rem; margin-top: 4px;';
    element.parentNode.appendChild(errorDiv);
}

function clearErrors() {
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.field-error').forEach(el => el.remove());
}

function showAlert(message) {
    alert(message);
}

/* --- Podsumowanie --- */
function generateSummary() {
    const summary = document.getElementById('bookingSummary');

    const serviceMap = {
        'ogolna': 'Dietetyka ogólna',
        'kliniczna': 'Dietetyka kliniczna',
        'dziecieca': 'Dietetyka dziecięca'
    };

    const visitTypeMap = {
        'pierwsza': 'Pierwsza wizyta (60 min) - 180 zł',
        'kontrolna': 'Wizyta kontrolna (30 min) - 120 zł',
        'pakiet': 'Pakiet startowy (wizyta + plan) - 320 zł'
    };

    const service = document.getElementById('service').value;
    const visitType = document.getElementById('visitType').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const formattedDate = new Date(date).toLocaleDateString('pl-PL', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    summary.innerHTML = `
        <div class="summary-row">
            <span class="summary-label">Temat wizyty</span>
            <span class="summary-value">${serviceMap[service] || service}</span>
        </div>
        <div class="summary-row">
            <span class="summary-label">Typ wizyty</span>
            <span class="summary-value">${visitTypeMap[visitType] || visitType}</span>
        </div>
        <div class="summary-row">
            <span class="summary-label">Data</span>
            <span class="summary-value">${formattedDate}</span>
        </div>
        <div class="summary-row">
            <span class="summary-label">Godzina</span>
            <span class="summary-value">${time}</span>
        </div>
        <div class="summary-row">
            <span class="summary-label">Miejsce</span>
            <span class="summary-value">Gabinet - ul. Zdrowa 15, lok. 3</span>
        </div>
        <div class="summary-row">
            <span class="summary-label">Pacjent</span>
            <span class="summary-value">${firstName} ${lastName}</span>
        </div>
        <div class="summary-row">
            <span class="summary-label">E-mail</span>
            <span class="summary-value">${email}</span>
        </div>
        <div class="summary-row">
            <span class="summary-label">Telefon</span>
            <span class="summary-value">${phone}</span>
        </div>
    `;
}

/* --- Wysłanie rezerwacji --- */
function submitBooking() {
    const form = document.getElementById('bookingForm');
    const success = document.getElementById('bookingSuccess');
    const details = document.getElementById('successDetails');

    const serviceMap = {
        'ogolna': 'Dietetyka ogólna',
        'kliniczna': 'Dietetyka kliniczna',
        'dziecieca': 'Dietetyka dziecięca'
    };

    const visitTypeMap = {
        'pierwsza': 'Pierwsza wizyta (60 min)',
        'kontrolna': 'Wizyta kontrolna (30 min)',
        'pakiet': 'Pakiet startowy (wizyta + plan)'
    };

    const service = document.getElementById('service').value;
    const visitType = document.getElementById('visitType').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    const formattedDate = new Date(date).toLocaleDateString('pl-PL', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const bookingId = 'EC-' + Date.now().toString(36).toUpperCase();

    details.innerHTML = `
        <strong>Numer rezerwacji: ${bookingId}</strong><br>
        ${serviceMap[service]} - ${visitTypeMap[visitType]}<br>
        ${formattedDate}, godz. ${time}<br>
        Gabinet: ul. Zdrowa 15, lok. 3, Warszawa<br>
        Pacjent: ${firstName} ${lastName}
    `;

    form.style.display = 'none';
    document.querySelector('.booking-steps').style.display = 'none';
    success.style.display = 'block';

    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* --- Reset rezerwacji --- */
function resetBooking() {
    const form = document.getElementById('bookingForm');
    const success = document.getElementById('bookingSuccess');
    const steps = document.querySelector('.booking-steps');

    form.reset();
    form.style.display = 'block';
    steps.style.display = 'flex';
    success.style.display = 'none';

    currentStep = 1;
    showStep(1);
    updateSteps();
    clearErrors();

    document.getElementById('timeSlots').innerHTML = '<p class="time-slots-info">Wybierz datę, aby zobaczyć dostępne godziny.</p>';
}
