// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id && id.length > 1) {
      e.preventDefault();
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Cert modal
const modal = document.getElementById('certModal');
const certImg = document.getElementById('certImage');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.cert-card').forEach(card => {
  card.addEventListener('click', () => {
    const src = card.getAttribute('data-cert');
    certImg.src = src;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.style.display = 'none';
  certImg.src = '';
  document.body.style.overflow = 'auto';
}

if (closeBtn) closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// Contact form (frontend only)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks! Your message has been sent.');
    form.reset();
  });
}
