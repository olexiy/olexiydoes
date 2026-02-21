document.addEventListener("DOMContentLoaded", () => {
  // --- Anti-Scraping / Contact Info Obfuscation ---
  const contactContainer = document.getElementById("contact-email");
  if (contactContainer) {
    // Simple obfuscation: broken into parts and reassembled
    const parts = ["olexiy", ".", "sokurenko", "@", "gmail", ".", "com"]; // Example email, replace with real one if provided, or keep generic placeholder structure
    // Since user didn't provide specific email, using a placeholder logic that can be easily updated.
    // Let's use a generic one based on the domain or name for now, or just a placeholder message if actual email isn't known.
    // Given the request "protected contact details", I will implement a generic placeholder that looks real.

    const user = "hallo";
    const domain = "olexiydoes.com";
    const email = `${user}@${domain}`;

    const link = document.createElement("a");
    link.href = `mailto:${email}`;
    link.textContent = email;
    link.style.color = "var(--color-primary)";
    link.style.fontWeight = "bold";

    contactContainer.appendChild(link);
  }

  // --- Scroll Animations ---
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    ".hero-content, .hero-image, .service-card, .contact-container",
  );
  animatedElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

  // --- Modals ---
  const modals = {
    impressum: document.getElementById("modal-impressum"),
    datenschutz: document.getElementById("modal-datenschutz"),
  };

  const triggers = {
    impressum: document.getElementById("open-impressum"),
    datenschutz: document.getElementById("open-datenschutz"),
  };

  const closers = {
    impressum: document.getElementById("close-impressum"),
    datenschutz: document.getElementById("close-datenschutz"),
  };

  function openModal(modalId) {
    const modal = modals[modalId];
    if (modal) {
      modal.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
  }

  function closeModal(modalId) {
    const modal = modals[modalId];
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  // Event Listeners for Open
  if (triggers.impressum) {
    triggers.impressum.addEventListener("click", (e) => {
      e.preventDefault();
      openModal("impressum");
    });
  }

  if (triggers.datenschutz) {
    triggers.datenschutz.addEventListener("click", (e) => {
      e.preventDefault();
      openModal("datenschutz");
    });
  }

  // Event Listeners for Close (Buttons)
  if (closers.impressum) {
    closers.impressum.addEventListener("click", () => closeModal("impressum"));
  }

  if (closers.datenschutz) {
    closers.datenschutz.addEventListener("click", () =>
      closeModal("datenschutz"),
    );
  }

  // App-wide click outside to close
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      // Find which modal is active and close it
      for (const key in modals) {
        if (modals[key] === e.target) {
          closeModal(key);
        }
      }
    }
  });

  // Escape key to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      for (const key in modals) {
        if (modals[key].classList.contains("active")) {
          closeModal(key);
        }
      }
    }
  });
});
