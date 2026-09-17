import './style.css';
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderBentoOverview } from './components/BentoOverview.js';
import { renderProjects } from './components/Projects.js';
import { renderInteractiveTerminal } from './components/InteractiveTerminal.js';
import { renderTimeline } from './components/Timeline.js';
import { renderContact } from './components/Contact.js';
import { initCustomCursor } from './utils/cursor.js';
import { initCommandPalette } from './components/CommandPalette.js';
import { sound } from './utils/audio.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (!app) return;

  // Add noise film overlay
  const noise = document.createElement('div');
  noise.className = 'noise-overlay';
  document.body.appendChild(noise);

  // Render components sequentially
  app.appendChild(renderNavbar());
  app.appendChild(renderHero());
  app.appendChild(renderBentoOverview());
  app.appendChild(renderProjects());
  app.appendChild(renderInteractiveTerminal());
  app.appendChild(renderTimeline());
  app.appendChild(renderContact());

  // Initialize interactive features
  initCustomCursor();
  initCommandPalette();

  // First interaction listener to unlock AudioContext
  const unlockAudio = () => {
    sound.init();
    window.removeEventListener('click', unlockAudio);
    window.removeEventListener('keydown', unlockAudio);
  };
  window.addEventListener('click', unlockAudio);
  window.addEventListener('keydown', unlockAudio);
});

