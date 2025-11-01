// ===== Mobile hamburger menu toggle =====
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

if (hamburger && menu) {
  hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');

    const isOpen = menu.style.display === 'block';
    menu.style.display = isOpen ? 'none' : 'block';

    if (hamIcon) hamIcon.style.display = isOpen ? 'inline-block' : 'none';
    if (crossIcon) crossIcon.style.display = isOpen ? 'none' : 'inline-block';
  });

  // Close menu when a nav link is clicked
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

// ===== Smooth scroll for in-page anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' }); // smooth anchor jump
    }
  });
});

// ===== Back to Home (scroll-to-top) button =====
const backBtn = document.getElementById('backToTop');
const showAfter = 240; // px threshold before showing button

function onScroll() {
  const y = window.scrollY || document.documentElement.scrollTop;
  if (!backBtn) return;
  if (y > showAfter) {
    backBtn.classList.add('show');
  } else {
    backBtn.classList.remove('show');
  }
}
window.addEventListener('scroll', onScroll, { passive: true });

if (backBtn) {
  backBtn.addEventListener('click', () => {
    // Smoothly scroll to the very top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
