const productButton = document.querySelector('.nav-products');
const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('.header');

productButton?.addEventListener('click', () => {
  const isOpen = productButton.getAttribute('aria-expanded') === 'true';
  productButton.setAttribute('aria-expanded', String(!isOpen));
  header.classList.toggle('mega-open', !isOpen);
});

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  header.classList.toggle('mobile-open', !isOpen);
});

document.querySelector('form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.textContent = 'Demande enregistrée ✓';
  button.disabled = true;
});
