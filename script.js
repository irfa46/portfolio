// Dark Mode
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Fade-in Animation
const sections = document.querySelectorAll(".fade-in");

const reveal = () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", reveal);
reveal();

