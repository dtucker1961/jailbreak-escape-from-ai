// Background "rotisserie" — cycles through images in the footer strip.
document.addEventListener('DOMContentLoaded', function () {
  const rotisserie = document.querySelector('.bg-rotisserie');
  if (!rotisserie) return;

  const images = rotisserie.querySelectorAll('img');
  if (images.length === 0) return;

  let current = 0;
  images[current].classList.add('active');

  const INTERVAL_MS = 6000; // how long each background shows before crossfading

  setInterval(function () {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, INTERVAL_MS);
});
