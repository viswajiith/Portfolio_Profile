// script.js for portfolio website
// Hamburger menu functionality for responsive navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// Certification Image Modal
function openCertificate(imgSrc) {
  const modal = document.getElementById('certModal');
  const certImage = document.getElementById('certImage');
  modal.style.display = 'block';
  certImage.src = imgSrc;
}

const closeModal = document.querySelector('.close');
closeModal.onclick = function() {
    document.getElementById('certModal').style.display = 'none';
};

window.onclick = function(event) {
  const modal = document.getElementById('certModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Simple form submission (no backend)
document.getElementById('contactForm').onsubmit = function(e) {
    e.preventDefault();
    alert('Your message has been sent!');
    this.reset();
};
