// ── Vimeo deferred load ──
let _vimeoLoaded = false;
let _vimeoFadedIn = false;
const fadeInVimeo = () => {
  if (_vimeoFadedIn) return;
  _vimeoFadedIn = true;
  document.querySelectorAll('.hero-vimeo-desktop, .hero-vimeo-mobile').forEach(el => {
    el.classList.add('vimeo-loaded');
  });
};
const loadVimeo = () => {
  if (_vimeoLoaded) return;
  _vimeoLoaded = true;
  document.querySelectorAll('iframe[data-src]').forEach(iframe => {
    iframe.src = iframe.dataset.src;
  });
  window.addEventListener('message', function onVimeoMsg(e) {
    if (e.origin !== 'https://player.vimeo.com') return;
    try {
      const d = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
      if (!d) return;
      if (d.event === 'ready') {
        window.removeEventListener('message', onVimeoMsg);
        setTimeout(fadeInVimeo, 400);
      } else if (d.event === 'play' || d.event === 'playProgress') {
        window.removeEventListener('message', onVimeoMsg);
        fadeInVimeo();
      }
    } catch {}
  });
  setTimeout(fadeInVimeo, 3500);
};
['pointerdown','touchstart','keydown'].forEach(e =>
  window.addEventListener(e, loadVimeo, { once: true, passive: true })
);

// ── Etheral effects + Vimeo on page load ──
window.addEventListener('load', () => {
  const siteEtheral = document.querySelector('.site-etheral');
  if (siteEtheral) {
    siteEtheral.style.display = '';
    requestAnimationFrame(() => requestAnimationFrame(() => siteEtheral.classList.add('visible')));
  }
  const heroEtheral = document.getElementById('hero-etheral');
  if (heroEtheral) heroEtheral.style.display = '';
  loadVimeo();
});

// ── Nav scroll effect ──
const nav = document.getElementById('nav');
const scrollIndicator = document.querySelector('.scroll-indicator');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
  if (scrollIndicator) scrollIndicator.classList.toggle('hidden', window.scrollY > 80);
}, { passive: true });

// ── Scroll reveal ──
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = parseInt(el.dataset.delay || '0');
      setTimeout(() => el.classList.add('revealed'), delay);
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal-item, .reveal-left, .reveal-right, .reveal-scale').forEach(el => revealObserver.observe(el));



const cases = window.CASES;
const ASSETS_BASE = location.hostname === 'localhost'
  ? 'website_assets/'
  : 'https://pub-545adea3391841c896c875b02d24aa3a.r2.dev/website_assets/';
const asset = url => url && !url.startsWith('http') ? ASSETS_BASE + url : url;


// ── Image Lightbox ──
function openLightbox(src) {
  const lb = document.getElementById('img-lightbox');
  document.getElementById('img-lightbox-img').src = src;
  lb.classList.add('open');
  history.pushState({ lightbox: true }, '', '');
}
function closeLightbox() {
  const lb = document.getElementById('img-lightbox');
  if (!lb.classList.contains('open')) return;
  lb.classList.remove('open');
  document.getElementById('img-lightbox-img').src = '';
  if (history.state && history.state.lightbox) history.back();
}
document.getElementById('img-lightbox-backdrop').addEventListener('click', closeLightbox);
document.getElementById('img-lightbox-close').addEventListener('click', closeLightbox);
// Delegate clicks on case study images
document.getElementById('cs-content').addEventListener('click', e => {
  const img = e.target.closest('.cs-section-img, .cs-gallery-img');
  if (img) openLightbox(img.src);
});

// ── Browser back button support ──
window.addEventListener('popstate', (event) => {
  const lb = document.getElementById('img-lightbox');
  if (lb.classList.contains('open')) {
    lb.classList.remove('open');
    document.getElementById('img-lightbox-img').src = '';
    return;
  }
  // If the new state still has a caseStudy, we went back from lightbox
  // to the case study — don't close the overlay
  if (event.state && event.state.caseStudy) return;
  const overlay = document.getElementById('cs-overlay');
  if (overlay.classList.contains('open')) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    document.body.classList.remove('case-open');
    document.documentElement.classList.remove('case-open');
  }
});

// ── Case Study Open / Close ──
function openCase(id) {
  const data = cases[id];
  if (!data) return;

  const collabHtml = '';

  const sectionsHtml = data.sections.map((s, i) => {
    const num = String(i + 1).padStart(2, '0');
    const dateSpan = s.date ? `<span style="color:var(--text-tertiary); margin-left:12px; font-size:9px; letter-spacing:0.16em;">${s.date}</span>` : '';
    const sectionCollab = 'collab' in s ? s.collab : data.collab;
    const agencyHtml = sectionCollab
      ? `<p class="cs-section-agency">Agency — <span>${sectionCollab}</span></p>`
      : '';
    const bodyHtml = s.body.split('\n\n').map(p => `<p>${p}</p>`).join('');
    const imgHtml = s.img
      ? `<img class="cs-section-img" src="${asset(s.img)}" alt="${s.title}" loading="lazy" />`
      : '';
    const galleryHtml = s.gallery && s.gallery.length
      ? `<div class="cs-gallery cs-gallery-${s.gallery.length}"${s.galleryWidth ? ` style="width:${s.galleryWidth};left:auto;transform:none;"` : ''}>${s.gallery.map(url => `<img class="cs-gallery-img" src="${asset(url)}" alt="" loading="lazy"${s.galleryAspect ? ` style="aspect-ratio:${s.galleryAspect};object-fit:cover;object-position:center top;"` : ''} />`).join('')}</div>`
      : '';
    const videoHtml = s.video
      ? `<video class="cs-section-video" src="${asset(s.video)}" autoplay loop muted playsinline controls></video>`
      : '';
    const btsHtml = s.btsVideo
      ? `<div class="cs-bts-wrap"><span class="cs-bts-label">Process — Breakdown</span><video class="cs-section-video" src="${asset(s.btsVideo)}" autoplay loop muted playsinline controls></video></div>`
      : '';
    const installVideoHtml = s.installVideo
      ? `<div class="cs-bts-wrap"><span class="cs-bts-label">In Context — Eye Film Museum, Amsterdam</span><video class="cs-install-video" src="${asset(s.installVideo)}" autoplay loop muted playsinline controls></video></div>`
      : '';
    return `
      <div class="cs-section">
        <span class="cs-section-num">${num}${dateSpan}</span>
        <h3 class="cs-section-title">${s.title}</h3>
        ${agencyHtml}
        <div class="cs-section-body">${bodyHtml}</div>
        ${videoHtml}
        ${btsHtml}
        ${imgHtml}
        ${galleryHtml}
        ${installVideoHtml}
      </div>`;
  }).join('');

  const toolsHtml = data.tools.map(t => `<span class="cs-tool-tag">${t}</span>`).join('');

  document.getElementById('cs-content').innerHTML = `
    <div class="cs-hero">
      ${data.heroVideo
        ? `<video class="cs-hero-img" src="${asset(data.heroVideo)}" autoplay loop muted playsinline style="object-position:${data.heroPosition || 'center'};"></video>`
        : `<img class="cs-hero-img" src="${asset(data.heroImg)}" alt="${data.title}" style="object-position:${data.heroPosition || 'center'};" />`}
      <div class="cs-hero-vignette"></div>
    </div>
    <div class="cs-article">
      <div class="cs-title-block">
        <span class="cs-eyebrow">${data.category}</span>
        <h2 class="cs-title">${data.title}</h2>
        <p class="cs-subtitle">${data.subtitle}</p>
      </div>
      <div class="cs-meta">
        <div class="cs-meta-item">
          <span class="cs-meta-label">Client</span>
          <span class="cs-meta-value">${data.client}</span>
        </div>
        <div class="cs-meta-item">
          <span class="cs-meta-label">Year</span>
          <span class="cs-meta-value">${data.year}</span>
        </div>
        <div class="cs-meta-item">
          <span class="cs-meta-label">Role</span>
          <span class="cs-meta-value">${data.role}</span>
        </div>
        <div class="cs-meta-item">
          <span class="cs-meta-label">Agency</span>
          <span class="cs-meta-value">${data.collab || 'Independent'}</span>
        </div>
      </div>
      <p class="cs-overview">${data.overview}</p>
      ${sectionsHtml}
      ${collabHtml}
    </div>
  `;

  const overlay = document.getElementById('cs-overlay');
  overlay.scrollTop = 0;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('case-open');
  document.documentElement.classList.add('case-open');
  history.pushState({ caseStudy: id }, '', '#' + id);
}

function closeCase() {
  const overlay = document.getElementById('cs-overlay');
  if (!overlay.classList.contains('open')) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  document.body.classList.remove('case-open');
  document.documentElement.classList.remove('case-open');
  history.replaceState(null, '', location.pathname);
}

// ── Lazy-resolve data-src elements (excludes iframes which use gesture loading) ──
const mediaObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    el.src = ASSETS_BASE + el.dataset.src;
    obs.unobserve(el);
  });
}, { rootMargin: '400px 0px' });
document.querySelectorAll('[data-src]:not(iframe)').forEach(el => mediaObserver.observe(el));

// ── Open case study from URL hash on load ──
if (location.hash) {
  const id = location.hash.slice(1);
  if (cases[id]) {
    openCase(id);
    // Replace the pushState openCase just added so closing doesn't re-open
    history.replaceState({ caseStudy: id }, '', '#' + id);
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const lb = document.getElementById('img-lightbox');
    if (lb.classList.contains('open')) { closeLightbox(); return; }
    closeCase();
  }
});

// ── Stats count-up ──
(function() {
  const counters = document.querySelectorAll('.count-up');
  const countObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1200;
      const start = performance.now();
      function step(now) {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(ease * target);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target;
      }
      requestAnimationFrame(step);
      countObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => countObs.observe(el));
})();

// ── Project card 3D tilt ──
(function() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform = `perspective(700px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg) scale(1.012)`;
    }, { passive: true });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)';
      card.style.transition = 'transform 0.5s cubic-bezier(0.22,1,0.36,1)';
    });
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.1s ease';
    });
  });
})();

window.openCase = openCase;
window.closeCase = closeCase;
