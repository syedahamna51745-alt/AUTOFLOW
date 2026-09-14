const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const target = +counter.getAttribute("data-target")
  let count = 0;

  const updateCounter = () => {

    const increment = target / 100;


    if (count < target) {

      count += increment;
      counter.innerHTML = Math.ceil(count);
      requestAnimationFrame(updateCounter)
    }
    else {
      if (target === 50000) {
        counter.innerHTML = "50K+";
      } else if (target === 49) {
        counter.innerHTML = "4.9★";
      } else {
        counter.innerHTML = target + "+";
      }
    }
  };
  updateCounter();
})