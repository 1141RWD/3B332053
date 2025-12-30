// Accordion
const accBtns = document.querySelectorAll('.accordion-btn');

accBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;

    document.querySelectorAll('.accordion-content').forEach(c => {
      if (c !== content) c.style.display = 'none';
    });

    content.style.display =
      content.style.display === 'block' ? 'none' : 'block';
  });
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});
