// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id && id.length > 1) {
      e.preventDefault();
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Certificates Modal
const modal = document.getElementById('certModal');
const certImg = document.getElementById('certImage');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.cert-card').forEach((card) => {
  function open() {
    certImg.src = card.getAttribute('data-cert');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  card.addEventListener('click', open);
  card.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open();
    }
  });
});

function closeModal() {
  modal.style.display = 'none';
  certImg.src = '';
  document.body.style.overflow = 'auto';
}

if (closeBtn) closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
