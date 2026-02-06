// Smooth scroll for navbar links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Simple animation on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 400;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});

// Initial animation state
sections.forEach(sec => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "0.6s ease";
});
