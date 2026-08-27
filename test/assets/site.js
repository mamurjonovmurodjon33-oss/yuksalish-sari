const previewPrefix =
  "https://htmlpreview.github.io/?https://github.com/mamurjonovmurodjon33-oss/yuksalish-sari/blob/test-site/test/";

document.querySelectorAll("[data-page-link]").forEach((link) => {
  if (window.location.hostname === "htmlpreview.github.io") {
    link.href = previewPrefix + link.dataset.pageLink;
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
