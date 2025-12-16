// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal on scroll
const els = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("is-visible");
    });
  },
  { threshold: 0.12 }
);
els.forEach((el) => io.observe(el));

// Mobile nav (simple toggle)
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.style.display === "flex";
    nav.style.display = open ? "none" : "flex";
    nav.style.flexDirection = "column";
    nav.style.gap = "0.9rem";
    nav.style.padding = "1rem 0";
    toggle.setAttribute("aria-expanded", String(!open));
  });
}
