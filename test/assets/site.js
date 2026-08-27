const defaultPreviewPrefix =
  "https://htmlpreview.github.io/?https://github.com/mamurjonovmurodjon33-oss/yuksalish-sari/blob/test-site/test/";

const getPreviewPrefix = () => {
  const marker = "/test/";
  const markerIndex = window.location.href.indexOf(marker);
  if (window.location.hostname === "htmlpreview.github.io" && markerIndex !== -1) {
    return window.location.href.slice(0, markerIndex + marker.length);
  }
  return defaultPreviewPrefix;
};

document.querySelectorAll("[data-page-link]").forEach((link) => {
  if (window.location.hostname === "htmlpreview.github.io") {
    link.href = getPreviewPrefix() + link.dataset.pageLink;
  }
});

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", nav.classList.contains("is-open"));
  });
}

const year = document.querySelector("[data-year]");
if (year) {
  year.textContent = new Date().getFullYear();
}

const progress = document.createElement("div");
progress.className = "scroll-progress";
document.body.appendChild(progress);

const revealTargets = document.querySelectorAll(
  ".section-head, .card, .service-card, .portfolio-card, .about-band, .grid-2, .policy-card, .contact-card"
);

revealTargets.forEach((target, index) => {
  target.dataset.reveal = "";
  target.style.transitionDelay = `${Math.min(index % 6, 5) * 55}ms`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealTargets.forEach((target) => observer.observe(target));

document.querySelectorAll(".card, .service-card, .portfolio-card, .hero-panel").forEach((card) => {
  card.dataset.tilt = "";
  card.addEventListener("pointermove", (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 6}deg) translateY(-7px)`;
  });
  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

const updateMotion = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  document.documentElement.style.setProperty("--scroll-progress", ratio.toString());
};

window.addEventListener("scroll", updateMotion, { passive: true });
window.addEventListener("pointermove", (event) => {
  document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
  document.documentElement.style.setProperty("--my", `${event.clientY}px`);
});

updateMotion();

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const name = data.get("name") || "";
    const service = data.get("service") || "IT services";
    const message = data.get("message") || "";
    const text = `Hello VALORIA, my name is ${name}. I am interested in ${service}. ${message}`;
    window.open(`https://wa.me/998940563533?text=${encodeURIComponent(text)}`, "_blank");
  });
}
