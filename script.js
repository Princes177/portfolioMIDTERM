// Smooth scroll animation for sections
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 200;
  
  sections.forEach((section) => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((link) => link.classList.remove('active'));
      document
        .querySelector(navbar [href="#${section.id}"])
        .classList.add('active');
    }
  });
});

// Fade-in animation on scroll
const revealSections = () => {
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);