document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = entry.target.dataset.delay || "0s";
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1, rootMargin: "0px", });
  document.querySelectorAll(".slide-up, .slide-left, .slide-right, .fade-in").forEach(el => observer.observe(el));
});
