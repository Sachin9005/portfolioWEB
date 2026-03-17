    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            tabContents.forEach(c => c.classList.remove('active'));
            document.getElementById(btn.dataset.tab + '-grid').classList.add('active');
        });
    });

let lastScrollY = window.scrollY;
const header = document.querySelector('.header');
const delta = 5;          // minimum scroll amount to react (prevents jitter)
const hideAfter = 120;    // start hiding only after scrolling past this many pixels

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  // Ignore tiny movements
  if (Math.abs(lastScrollY - currentScrollY) <= delta) return;

  if (currentScrollY > lastScrollY && currentScrollY > hideAfter) {
    // scrolling down → hide
    header.classList.add('hidden');
  } else {
    // scrolling up → show
    header.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
}, { passive: true });   // improves scroll performance