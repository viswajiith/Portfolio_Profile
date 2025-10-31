// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
const hamIcon = this.querySelector('.hamburger-icon');
const crossIcon = this.querySelector('.cross-icon');

if (hamIcon.style.display === "none") {
hamIcon.style.display = "inline-block";
menu.style.display = "none";
crossIcon.style.display = "none";
} else {
crossIcon.style.display = "inline-block";
hamIcon.style.display = "none";
menu.style.display = "block";
}
});

// Close menu when a link is clicked
const links = document.querySelectorAll('.links');
links.forEach(link => {
link.addEventListener('click', function () {
const hamIcon = hamburger.querySelector('.hamburger-icon');
hamIcon.style.display = "inline-block";
menu.style.display = "none";
const crossIcon = hamburger.querySelector('.cross-icon');
crossIcon.style.display = "none";
});
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({
behavior: 'smooth'
});
}
});
});
