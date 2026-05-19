/* LAP Landscaping — gallery page module
   PhotoSwipe v5 grid + lightbox. Local prototype only.
*/
import PhotoSwipeLightbox from './photoswipe/photoswipe-lightbox.esm.min.js';

const galImages = [
  /* Pavers & Patios — real LAP project photos */
  { src: 'reference/photos/live-site/20140109_114837.jpg',   w: 1920, h: 2560,
    alt: 'Brick column entry with paver steps and masonry walls',
    en: 'Masonry entry steps and columns — LAP build',
    es: 'Escalones de entrada y columnas de mampostería — LAP' },
  { src: 'reference/photos/live-site/20151013_145132.jpg',   w: 2560, h: 1440,
    alt: 'Flagstone walkway with block retaining walls and pine straw',
    en: 'Flagstone walkway with retaining walls',
    es: 'Camino de piedra irregular con muros de contención' },
  { src: 'reference/photos/live-site/20190806_150610.jpg',   w: 2560, h: 1920,
    alt: 'Curved paver walkway leading to stone patio with mulch beds and plantings',
    en: 'Stone patio and paver path — outdoor living space',
    es: 'Patio de piedra y camino de adoquines — espacio exterior' },
  { src: 'reference/photos/hero-firepit.jpg',         w: 1200, h: 800,
    alt: 'Custom paver fire pit patio with outdoor seating',
    en: 'Fire pit patio — Lake Norman area',
    es: 'Patio con fogata — zona de Lake Norman' },
  { src: 'reference/photos/patio-pavers.jpg',         w: 1200, h: 675,
    alt: 'Residential paver patio installation with clean edges',
    en: 'Paver patio — Troutman, NC',
    es: 'Patio de adoquines — Troutman, NC' },
  { src: 'reference/photos/wall-stone.jpg',           w: 1200, h: 800,
    alt: 'Stone retaining wall beside landscaped bed',
    en: 'Stone retaining wall — residential project',
    es: 'Muro de contención de piedra — proyecto residencial' },
  { src: 'reference/photos/lap-patio-hero.png',       w: 1200, h: 800,
    alt: 'Curved paver patio with stone retaining walls and fire pit',
    en: 'Curved paver patio with fire pit — LAP build',
    es: 'Patio curvo con fogata — construcción LAP' },
  { src: 'reference/photos/proj-1.png',               w: 1200, h: 800,
    alt: 'Completed outdoor living space with pavers',
    en: 'Outdoor living space build',
    es: 'Construcción de espacio exterior' },
  { src: 'reference/photos/proj-2.png',               w: 1200, h: 800,
    alt: 'Paver hardscape project overview',
    en: 'Hardscape build — Lake Norman',
    es: 'Proyecto de hardscape — Lake Norman' },
  { src: 'reference/photos/proj-tile-1.png',          w: 900, h: 675,
    alt: 'Paver patio detail showing edge restraint',
    en: 'Paver detail — base prep and edge restraint',
    es: 'Detalle — preparación de base y bordes' },
  { src: 'reference/photos/proj-tile-2.png',          w: 900, h: 675,
    alt: 'Retaining wall installation in progress',
    en: 'Retaining wall installation',
    es: 'Instalación de muro de contención' },
  { src: 'reference/photos/proj-tile-3.png',          w: 900, h: 675,
    alt: 'Hardscape project overview',
    en: 'Hardscape project — Lake Norman area',
    es: 'Proyecto de hardscape — Lake Norman' },
  { src: 'reference/photos/proj-tile-4.png',          w: 900, h: 675,
    alt: 'Completed paver project',
    en: 'Paver project — completed and clean',
    es: 'Proyecto de adoquines terminado' },
  { src: 'reference/photos/project-1.jpg',            w: 1200, h: 800,
    alt: 'Finished paver patio project',
    en: 'Paver patio — complete build',
    es: 'Patio de adoquines — construcción completa' },
  { src: 'reference/photos/project-2.jpg',            w: 1200, h: 800,
    alt: 'Paver walkway installation',
    en: 'Paver walkway and landscape border',
    es: 'Camino de adoquines y borde de jardín' },
  { src: 'reference/photos/modern-home.jpg',          w: 1200, h: 800,
    alt: 'Finished landscape with mature plantings and paver approach',
    en: 'Landscape build with clean hardscape lines',
    es: 'Paisajismo con líneas de hardscape limpias' },
  /* Sod & Lawn — real LAP project photos */
  { src: 'reference/photos/live-site/20190329_095103.jpg',   w: 2560, h: 1920,
    alt: 'Manicured lawn with striped mowing pattern beside large lakefront home',
    en: 'Lawn care — Lake Norman estate',
    es: 'Cuidado de césped — lago Norman' },
  { src: 'reference/photos/sod-grass.jpg',            w: 1200, h: 675,
    alt: 'Freshly installed sod lawn',
    en: 'Fresh sod installation — Lake Norman',
    es: 'Instalación de césped — Lake Norman' },
  { src: 'reference/photos/mulch-beds.jpg',           w: 1200, h: 800,
    alt: 'Mulched planting beds with clean borders',
    en: 'Mulch beds and planted borders',
    es: 'Canteros con mantillo y bordes plantados' },
  { src: 'reference/photos/project-3.jpg',            w: 1200, h: 800,
    alt: 'Lawn restoration project',
    en: 'Lawn restoration project',
    es: 'Proyecto de restauración de césped' },
  /* Mulch & Pruning — real LAP project photo */
  { src: 'reference/photos/live-site/20190406_181046.jpg',   w: 1920, h: 2560,
    alt: 'Camellia shrub in full bloom on paver surface',
    en: 'Flowering shrub install — camellia',
    es: 'Instalación de arbusto en flor — camelia' },
  /* Lighting */
  { src: 'reference/photos/lighting-dusk.jpg',        w: 1200, h: 800,
    alt: 'Landscape lighting glowing at dusk',
    en: 'Landscape lighting at dusk — outdoor ambiance',
    es: 'Iluminación de jardín al anochecer' },
  { src: 'reference/photos/lap-lighting-hero.png',    w: 1200, h: 800,
    alt: 'Premium LED path and accent lighting on stone walkway',
    en: 'LED path and accent lighting install',
    es: 'Instalación de iluminación LED de senderos y acentos' },
  /* Concrete */
  { src: 'reference/photos/project-4.jpg',            w: 1200, h: 800,
    alt: 'Concrete project — Lake Norman area',
    en: 'Concrete project — Lake Norman',
    es: 'Proyecto de concreto — Lake Norman' },
  { src: 'reference/photos/lap-concrete-hero.png',    w: 1200, h: 800,
    alt: 'Modern concrete driveway and steps with landscape lighting',
    en: 'Concrete driveway and steps with lighting',
    es: 'Entrada de concreto y escalones con iluminación' },
  /* Irrigation — real LAP project photo */
  { src: 'reference/photos/live-site/20190403_111057_LI-2-.jpg', w: 2560, h: 1921,
    alt: 'Active sprinkler system watering residential front lawn',
    en: 'Irrigation system — active sprinkler coverage',
    es: 'Sistema de riego — cobertura de aspersores activos' },
  { src: 'reference/photos/irrigation-sprinkler.jpg', w: 1200, h: 800,
    alt: 'Sprinkler head with active spray',
    en: 'Sprinkler head installation — active spray',
    es: 'Instalación de aspersor — riego activo' },
  { src: 'reference/photos/lap-irrigation-hero.png',  w: 1200, h: 800,
    alt: 'Irrigation system being installed in planted bed',
    en: 'Zoned irrigation system install',
    es: 'Instalación de sistema de riego por zonas' },
  /* Drainage */
  { src: 'reference/photos/drainage-rocks.jpg',       w: 1200, h: 800,
    alt: 'Stone dry-creek drainage channel',
    en: 'Stone drainage channel — grading solution',
    es: 'Canal de drenaje de piedra — solución de nivelación' },
  { src: 'reference/photos/lap-drainage-hero.png',    w: 1200, h: 800,
    alt: 'French drain and grading system with iron grate',
    en: 'French drain and grading system',
    es: 'Drenaje francés y sistema de nivelación' },
  /* Travertine */
  { src: 'reference/photos/lap-travertine-hero.png',  w: 1200, h: 800,
    alt: 'Travertine stone walkway and steps with natural stone walls',
    en: 'Travertine stone walkway and steps — LAP install',
    es: 'Camino y escalones de travertino — instalación LAP' },
];

const currentLang = () => document.documentElement.getAttribute('data-lang') || 'en';

function buildGrid() {
  const grid = document.getElementById('gal-grid');
  if (!grid) return;
  const l = currentLang();
  grid.innerHTML = galImages.map((img) => `
    <a href="${img.src}"
       data-pswp-width="${img.w}"
       data-pswp-height="${img.h}"
       data-pswp-caption="${l === 'es' ? img.es : img.en}"
       class="gal-item reveal">
      <img src="${img.src}" alt="${img.alt}" loading="lazy" />
      <div class="gal-item-cap" data-en="${img.en}" data-es="${img.es}">${l === 'es' ? img.es : img.en}</div>
    </a>
  `).join('');

  /* Hook into scroll reveal — query newly added .reveal nodes */
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    grid.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    grid.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }
}

buildGrid();

/* PhotoSwipe lightbox */
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gal-grid',
  children: 'a',
  pswpModule: () => import('./photoswipe/photoswipe.esm.min.js'),
  padding: { top: 20, bottom: 40, left: 20, right: 20 },
  bgOpacity: 0.95,
  showHideAnimationType: 'zoom',
  imageClickAction: 'next',
  tapAction: 'next',
});

/* Add caption to lightbox UI */
lightbox.on('uiRegister', () => {
  lightbox.pswp.ui.registerElement({
    name: 'caption',
    order: 9,
    isButton: false,
    appendTo: 'root',
    html: '<div class="pswp-caption-content"></div>',
    onInit: (el, pswp) => {
      pswp.on('change', () => {
        const curr = pswp.currSlide.data;
        el.querySelector('.pswp-caption-content').textContent =
          curr.element?.dataset?.pswpCaption || '';
      });
    }
  });
});

lightbox.init();

/* Sync captions on language toggle */
document.querySelectorAll('[data-lang-btn]').forEach(btn => {
  btn.addEventListener('click', () => {
    const l = btn.getAttribute('data-lang-btn');
    document.querySelectorAll('.gal-item-cap').forEach(cap => {
      cap.textContent = l === 'es' ? cap.dataset.es : cap.dataset.en;
    });
    document.querySelectorAll('.gal-item[data-pswp-caption]').forEach(a => {
      a.dataset.pswpCaption = l === 'es' ? a.querySelector('.gal-item-cap').dataset.es
                                         : a.querySelector('.gal-item-cap').dataset.en;
    });
  });
});
