// Hamburger menu toggle (mobile)
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

if (hamburger && menu) {
  hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    const isOpen = menu.style.display === 'block';

    if (isOpen) {
      menu.style.display = 'none';
      if (hamIcon) hamIcon.style.display = 'inline-block';
      if (crossIcon) crossIcon.style.display = 'none';
    } else {
      menu.style.display = 'block';
      if (hamIcon) hamIcon.style.display = 'none';
      if (crossIcon) crossIcon.style.display = 'inline-block';
    }
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.links').forEach(link => {
    link.addEventListener('click', () => {
      const hamIcon = hamburger.querySelector('.hamburger-icon');
      const crossIcon = hamburger.querySelector('.cross-icon');
      menu.style.display = 'none';
      if (hamIcon) hamIcon.style.display = 'inline-block';
      if (crossIcon) crossIcon.style.display = 'none';
    });
  });
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
