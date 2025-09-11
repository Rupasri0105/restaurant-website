// Show alert when button clicked
function showAlert() {
  alert("Welcome to Rupa's Restaurant! 🍽️ Check out our menu below.");
}

// Smooth scroll effect for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

