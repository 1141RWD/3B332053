// Accordion
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display =
      content.style.display === 'block' ? 'none' : 'block';
  });
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}
