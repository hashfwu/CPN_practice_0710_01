/* ========== DATA ========== */
const artworks = [
  { title: 'Golden Hour', artist: 'Elena Marchetti', price: '$340', bg: '#f5e6d3' },
  { title: 'Urban Rhythm', artist: 'Carlos Vega', price: '$280', bg: '#dce3e8' },
  { title: 'Whispers', artist: 'Aiko Tanaka', price: '$410', bg: '#e8dce8' },
  { title: 'Desert Bloom', artist: 'Liam O\'Connor', price: '$320', bg: '#f0e6d0' },
  { title: 'Tidal', artist: 'Nina Kowalski', price: '$370', bg: '#d0e0ec' },
  { title: 'Fragmentos', artist: 'Sofia Ruiz', price: '$260', bg: '#ece0d8' },
];

/* ========== DOM REFS ========== */
const gridEl = document.getElementById('grid');
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

/* ========== RENDER GALLERY ========== */
artworks.forEach((art, i) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.transitionDelay = `${i * 0.1}s`;
  card.innerHTML = `
    <div class="card__img" style="background:${art.bg}">🖼</div>
    <div class="card__body">
      <div class="card__title">${art.title}</div>
      <div class="card__artist">${art.artist}</div>
      <div class="card__price">${art.price}</div>
    </div>
  `;
  gridEl.appendChild(card);
});

/* ========== SCROLL REVEAL ========== */
const revealEls = () => {
  const els = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .card');
  const windowH = window.innerHeight - 80;
  els.forEach(el => {
    if (el.getBoundingClientRect().top < windowH) el.classList.add('show');
  });
};

/* ========== HAMBURGER ========== */
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
});

/* close nav on link click */
nav.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
  })
);

/* ========== INIT ========== */
revealEls();
window.addEventListener('scroll', revealEls);
