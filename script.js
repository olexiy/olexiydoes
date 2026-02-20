// --- Mobile Navigation ---
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.classList.toggle('open');
});

// Close mobile menu on link click
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.classList.remove('open');
  });
});

// --- Theme Toggle ---
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Initialize: check saved preference, then system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else if (prefersDark.matches) {
  setTheme('dark');
}

themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// Listen for system theme changes
prefersDark.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});

// --- Scroll Animations ---
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Add fade-in class to animatable elements
document.querySelectorAll(
  '.problems__card, .services__card, .packages__card, .process__step, .faq__item, .about__content, .about__image'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// --- Smooth scroll for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});

// --- Nav background on scroll ---
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 1px 8px rgba(0,0,0,0.06)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// --- Anti-Scraping: Obfuscated Contact Info ---
// Email and phone are assembled from data attributes on click — not in the HTML source
const emailLink = document.getElementById('emailLink');
const emailText = document.getElementById('emailText');
const phoneLink = document.getElementById('phoneLink');
const phoneText = document.getElementById('phoneText');

function revealEmail() {
  const u = emailLink.dataset.u;
  const d = emailLink.dataset.d;
  const addr = u + '@' + d;
  emailLink.href = 'mai' + 'lto:' + addr;
  emailText.textContent = addr;
  emailLink.removeEventListener('click', handleEmailClick);
}

function revealPhone() {
  const p = phoneLink.dataset.p;
  const s = phoneLink.dataset.s;
  const full = p + ' ' + s;
  phoneLink.href = 'te' + 'l:' + full.replace(/\s/g, '');
  phoneText.textContent = full;
  phoneLink.removeEventListener('click', handlePhoneClick);
}

function handleEmailClick(e) { e.preventDefault(); revealEmail(); }
function handlePhoneClick(e) { e.preventDefault(); revealPhone(); }

emailLink?.addEventListener('click', handleEmailClick);
phoneLink?.addEventListener('click', handlePhoneClick);

// --- Contact Form with Honeypot Anti-Spam ---
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', async function(e) {
  e.preventDefault();

  // Honeypot check: if the hidden field is filled, it's a bot
  const honeypot = this.querySelector('input[name="website"]');
  if (honeypot?.value) { this.reset(); return; }

  const name = this.querySelector('#name').value.trim();
  const email = this.querySelector('#email').value.trim();
  const message = this.querySelector('#message').value.trim();

  if (!name || !email) return;

  const btn = this.querySelector('button[type="submit"]');
  btn.disabled = true;
  const originalText = btn.textContent;
  btn.textContent = 'Wird gesendet…';

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      btn.textContent = 'Anfrage gesendet ✓';
      this.reset();
    } else {
      btn.textContent = 'Fehler — bitte per E-Mail schreiben';
      btn.disabled = false;
    }
  } catch {
    btn.textContent = 'Fehler — bitte per E-Mail schreiben';
    btn.disabled = false;
  }
});
