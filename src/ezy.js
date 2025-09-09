// lib/ezy/ezy.js
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Optional: Danach nicht mehr beobachten, damit es nur einmal animiert
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Alle animierbaren Klassen beobachten
  document.querySelectorAll(".slide-up, .slide-left, .slide-right, .fade-in").forEach(el => observer.observe(el));
});
