const videoModal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const videoTitle = document.getElementById('videoTitle');
let activeTitleKey = null;

document.addEventListener('DOMContentLoaded', () => {
  window.i18n.init();
  initScrollProgress();
  initSectionNavigation();
  initHeroParallax();
  initScrollReveal();
  initWorkCards();
});

function initScrollProgress() {
  const progress = document.getElementById('scrollProgress');
  if (!progress) return;
  let scheduled = false;
  const update = () => {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const value = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
    progress.style.transform = `scaleX(${value})`;
    scheduled = false;
  };
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(update);
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  update();
}

function initSectionNavigation() {
  const links = [...document.querySelectorAll('.topnav a[href^="#"]')];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  if (!sections.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
  );
  sections.forEach((section) => observer.observe(section));
}

function initHeroParallax() {
  const hero = document.querySelector('.hero');
  if (!hero || !window.matchMedia('(pointer: fine)').matches) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const reset = () => {
    hero.style.setProperty('--hero-shift-x', '0px');
    hero.style.setProperty('--hero-shift-y', '0px');
  };
  hero.addEventListener('pointermove', (event) => {
    if (reducedMotion.matches) {
      reset();
      return;
    }
    const bounds = hero.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    hero.style.setProperty('--hero-shift-x', `${(-x * 10).toFixed(2)}px`);
    hero.style.setProperty('--hero-shift-y', `${(-y * 7).toFixed(2)}px`);
  });
  hero.addEventListener('pointerleave', reset);
}

function initScrollReveal() {
  const items = [...document.querySelectorAll('[data-reveal]')];
  if (!items.length || !('IntersectionObserver' in window)) return;

  document
    .querySelectorAll('.feature-grid, .work-grid')
    .forEach((group) => {
      [...group.querySelectorAll('[data-reveal]')].forEach((item, index) => {
        item.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 55}ms`);
      });
    });

  const initialRevealLine = window.innerHeight * 0.96;
  items.forEach((item) => {
    item.classList.add('reveal-ready');
    if (item.getBoundingClientRect().top < initialRevealLine) {
      item.classList.add('revealed');
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );
  items.forEach((item) => observer.observe(item));
}

function initWorkCards() {
  if (!videoModal || !videoPlayer) return;

  document.querySelectorAll('.work-card[data-video]').forEach((card) => {
    card.addEventListener('click', () => {
      openVideo(card.dataset.video, card.dataset.titleKey);
    });
  });

  videoModal.querySelectorAll('[data-close-video]').forEach((element) => {
    element.addEventListener('click', closeVideo);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !videoModal.classList.contains('hidden')) {
      closeVideo();
    }
  });

  // Смена языка перерисовывает заголовок модалки по ключу modal.title,
  // поэтому возвращаем название открытой работы.
  document.addEventListener('languagechange', () => {
    if (activeTitleKey && !videoModal.classList.contains('hidden')) {
      videoTitle.textContent = window.i18n.t(activeTitleKey);
    }
  });
}

function openVideo(source, titleKey) {
  if (!source) return;
  activeTitleKey = titleKey || 'modal.title';
  videoTitle.textContent = window.i18n.t(activeTitleKey);
  videoPlayer.src = source;
  videoModal.classList.remove('hidden');
  videoModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  videoPlayer.play().catch(() => {
    /* автозапуск может быть заблокирован браузером — оставляем ручное управление */
  });
}

function closeVideo() {
  activeTitleKey = null;
  videoPlayer.pause();
  videoPlayer.removeAttribute('src');
  videoPlayer.load();
  videoModal.classList.add('hidden');
  videoModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}
