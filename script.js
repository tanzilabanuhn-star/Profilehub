// Slide navigation
let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

document.querySelectorAll(".next").forEach(btn => {
  btn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });
});

document.querySelectorAll(".prev").forEach(btn => {
  btn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "✅ Thank you! Your message has been sent.";
  this.reset();
});