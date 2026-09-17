// Custom Magnetic Editorial Cursor Engine

export function initCustomCursor() {
  // Hanya aktifkan di device dengan mouse/fine pointer
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const cursorDot = document.createElement('div');
  cursorDot.className = 'custom-cursor-dot';

  const cursorRing = document.createElement('div');
  cursorRing.className = 'custom-cursor-ring';

  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorRing);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isHovering = false;
  let isClicking = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  window.addEventListener('mousedown', () => {
    isClicking = true;
    cursorRing.classList.add('clicking');
  });

  window.addEventListener('mouseup', () => {
    isClicking = false;
    cursorRing.classList.remove('clicking');
  });

  // Attach hover detection
  function attachHoverListeners() {
    const targets = document.querySelectorAll('a, button, [role="button"], input, textarea, .interactive-card, [data-cursor-hover]');
    targets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        isHovering = true;
        cursorRing.classList.add('hovering');
      });
      el.addEventListener('mouseleave', () => {
        isHovering = false;
        cursorRing.classList.remove('hovering');
      });
    });
  }

  // Smooth lerp loop
  function animate() {
    const ease = 0.18;
    ringX += (mouseX - ringX) * ease;
    ringY += (mouseY - ringY) * ease;

    cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
  attachHoverListeners();

  // Re-attach whenever DOM updates
  const observer = new MutationObserver(() => {
    attachHoverListeners();
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

