document.addEventListener("DOMContentLoaded", () => {
  // 1. Header Scroll Effect
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 2. Mobile Menu Toggle
  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".nav");

  mobileBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Close mobile menu on link click
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });

  // 2.5 Theme Toggle
  const themeToggle = document.getElementById("themeToggle");
  const iconSun = document.querySelector(".icon-sun");
  const iconMoon = document.querySelector(".icon-moon");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      if (iconSun) iconSun.style.display = "none";
      if (iconMoon) iconMoon.style.display = "block";
    } else {
      if (iconSun) iconSun.style.display = "block";
      if (iconMoon) iconMoon.style.display = "none";
    }
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (prefersDark.matches) {
    setTheme("dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  prefersDark.addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      setTheme(e.matches ? "dark" : "light");
    }
  });

  // 3. Intersection Observer for Scroll Animations (.reveal)
  const revealElements = document.querySelectorAll(".reveal");

  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach((el) => revealObserver.observe(el));

  // 4. FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-question");
  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      const answer = item.nextElementSibling;
      const isActive = item.classList.contains("active");

      // Close all others
      document.querySelectorAll(".faq-question").forEach((otherItem) => {
        otherItem.classList.remove("active");
        otherItem.nextElementSibling.style.maxHeight = null;
      });

      // Open clicked if it wasn't active
      if (!isActive) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // 5. Anti-Scraping: Obfuscated Contact Info
  const emailLink = document.getElementById("emailLink");
  const emailText = document.getElementById("emailText");
  const phoneLink = document.getElementById("phoneLink");
  const phoneText = document.getElementById("phoneText");

  function revealEmail() {
    if (!emailLink || !emailText) return;
    const u = emailLink.dataset.u;
    const d = emailLink.dataset.d;
    const addr = u + "@" + d;
    emailLink.href = "mai" + "lto:" + addr;
    emailText.textContent = addr;
    emailText.style.textDecoration = "none";
    emailText.style.cursor = "default";
    emailLink.removeEventListener("click", handleEmailClick);
  }

  function revealPhone() {
    if (!phoneLink || !phoneText) return;
    const p = phoneLink.dataset.p;
    const s = phoneLink.dataset.s;
    const full = p + " " + s;
    phoneLink.href = "te" + "l:" + full.replace(/\s/g, "");
    phoneText.textContent = full;
    phoneText.style.textDecoration = "none";
    phoneText.style.cursor = "default";
    phoneLink.removeEventListener("click", handlePhoneClick);
  }

  function handleEmailClick(e) {
    e.preventDefault();
    revealEmail();
  }

  function handlePhoneClick(e) {
    e.preventDefault();
    revealPhone();
  }

  if (emailLink) emailLink.addEventListener("click", handleEmailClick);
  if (phoneLink) phoneLink.addEventListener("click", handlePhoneClick);

  // 6. Modals
  const impressumBtn = document.getElementById("open-impressum");
  const datenschutzBtn = document.getElementById("open-datenschutz");
  const modalImpressum = document.getElementById("modal-impressum");
  const modalDatenschutz = document.getElementById("modal-datenschutz");
  const closeBtns = document.querySelectorAll(".modal-close");

  function openModal(modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling
  }

  function closeModal() {
    document
      .querySelectorAll(".modal-overlay")
      .forEach((m) => m.classList.remove("active"));
    document.body.style.overflow = "";
  }

  if (impressumBtn)
    impressumBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(modalImpressum);
    });
  if (datenschutzBtn)
    datenschutzBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(modalDatenschutz);
    });

  closeBtns.forEach((btn) => btn.addEventListener("click", closeModal));

  // Close modal on outside click
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  });
});
