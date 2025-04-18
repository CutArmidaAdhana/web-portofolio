// scroll-anim.js
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // hanya sekali animasi
          }
        });
      },
      { threshold: 0.1 }
    );
  
    document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
  });
  