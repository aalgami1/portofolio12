import { profile } from '../data/profile.js';
import { sound } from '../utils/audio.js';
import { analytics } from '../utils/analytics.js';

export function renderNavbar() {
  const nav = document.createElement('header');
  nav.className = 'sticky top-4 z-50 w-full px-4 sm:px-8 max-w-7xl mx-auto pointer-events-auto';

  nav.innerHTML = `
    <div class="backdrop-blur-xl bg-[#0e1017]/80 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between shadow-2xl transition-all duration-300 hover:border-brand-lime/30">
      
      <!-- Brand & School Pill -->
      <a href="#" class="flex items-center gap-3 group" id="brand-link">
        <div class="w-8 h-8 rounded-lg bg-brand-lime/10 border border-brand-lime/40 flex items-center justify-center font-display font-bold text-brand-lime text-sm group-hover:scale-105 transition-transform">
          MA
        </div>
        <div class="flex flex-col">
          <span class="font-display font-bold text-sm tracking-tight text-white group-hover:text-brand-lime transition-colors flex items-center gap-1.5">
            ${profile.name}
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          </span>
          <span class="font-mono text-[10px] text-zinc-400">
            ${profile.school.grade} • ${profile.school.short}
          </span>
        </div>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/5 rounded-xl p-1 font-mono text-xs text-zinc-300">
        <a href="#overview" class="nav-link px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-all">/bento</a>
        <a href="#projects" class="nav-link px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-all">/projects</a>
        <a href="#terminal" class="nav-link px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-all">/terminal_cli</a>
        <a href="#experience" class="nav-link px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-all">/journey</a>
        <a href="#contact" class="nav-link px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-all">/contact</a>
      </nav>

      <!-- Right Action Hub (Time, Sound & Command Palette Trigger) -->
      <div class="flex items-center gap-2 sm:gap-3">
        
        <!-- Live Jakarta Time -->
        <div class="hidden lg:flex items-center gap-1.5 font-mono text-[11px] text-zinc-400 bg-white/[0.04] px-2.5 py-1.5 rounded-lg border border-white/5">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-lime"></span>
          <span id="live-jkt-clock">JKT --:--:-- WIB</span>
        </div>

        <!-- Guns.lol Style View Pill -->
        <div class="flex items-center gap-1.5 font-mono text-[11px] text-zinc-300 bg-white/[0.04] px-2.5 py-1.5 rounded-lg border border-white/5" title="Total Views (Guns.lol style)">
          <span class="text-[11px]">👁️</span>
          <span id="nav-views-count" class="text-white font-semibold">${analytics.formatNumber(analytics.getViews())}</span>
        </div>

        <!-- Audio Toggle Button -->
        <button 
          id="sound-toggle-btn"
          aria-label="Toggle Sound FX"
          title="Toggle SFX Synthesizer"
          class="relative p-2 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-brand-lime transition-all flex items-center justify-center group"
        >
          <span id="sound-icon-wrapper" class="flex items-center gap-0.5 h-3">
            <span class="sound-bar w-0.5 h-2 bg-brand-lime rounded-full transition-all"></span>
            <span class="sound-bar w-0.5 h-3 bg-brand-lime rounded-full transition-all"></span>
            <span class="sound-bar w-0.5 h-1.5 bg-brand-lime rounded-full transition-all"></span>
          </span>
          <span class="sr-only">Toggle SFX</span>
        </button>

        <!-- Command Palette Trigger Button -->
        <button 
          id="cmd-palette-trigger"
          class="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-brand-lime/10 hover:bg-brand-lime/20 border border-brand-lime/30 text-brand-lime font-mono text-xs transition-all hover:scale-[1.02]"
          title="Buka Command Center (Ctrl+K)"
        >
          <span class="text-xs">⌘K</span>
          <span class="hidden sm:inline text-[11px] font-sans font-medium text-brand-lime/90">Cmd</span>
        </button>
      </div>

    </div>
  `;

  // Initialize live clock
  function updateClock() {
    const clockEl = nav.querySelector('#live-jkt-clock');
    if (!clockEl) return;
    const now = new Date();
    // UTC+7 (Jakarta)
    const options = {
      timeZone: 'Asia/Jakarta',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const timeStr = new Intl.DateTimeFormat('id-ID', options).format(now);
    clockEl.textContent = `JKT ${timeStr} WIB`;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Sound toggle handler
  const soundBtn = nav.querySelector('#sound-toggle-btn');
  const soundBars = nav.querySelectorAll('.sound-bar');

  function updateSoundUI() {
    const isMuted = sound.isMuted();
    if (isMuted) {
      soundBars.forEach(b => {
        b.classList.remove('bg-brand-lime');
        b.classList.add('bg-zinc-600');
        b.style.height = '2px';
      });
      soundBtn.title = "Suara Nonaktif (Klik untuk aktifkan)";
    } else {
      soundBars.forEach((b, i) => {
        b.classList.add('bg-brand-lime');
        b.classList.remove('bg-zinc-600');
        b.style.height = i === 1 ? '12px' : i === 0 ? '8px' : '6px';
      });
      soundBtn.title = "Suara Aktif (Klik untuk nonaktifkan)";
    }
  }

  soundBtn.addEventListener('click', () => {
    sound.toggleMute();
    if (!sound.isMuted()) {
      sound.playSuccess();
    }
    updateSoundUI();
  });
  updateSoundUI();

  // Analytics real-time sync
  const navViewsEl = nav.querySelector('#nav-views-count');
  window.addEventListener('analytics_updated', () => {
    if (navViewsEl) navViewsEl.textContent = analytics.formatNumber(analytics.getViews());
  });

  return nav;
}

