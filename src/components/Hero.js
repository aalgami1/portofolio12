import { profile } from '../data/profile.js';
import { sound } from '../utils/audio.js';
import { analytics } from '../utils/analytics.js';
import confetti from 'canvas-confetti';

export function renderHero() {
  const hero = document.createElement('section');
  hero.id = 'hero';
  hero.className = 'relative pt-8 pb-20 sm:pb-28 px-4 sm:px-8 max-w-7xl mx-auto overflow-visible';

  // Foto resmi permanen (terkunci aman, tidak bisa diubah oleh pengunjung)
  const officialPhoto = profile.avatar.defaultUrl;

  hero.innerHTML = `
    <!-- Background Ambient Glow & Grid -->
    <div class="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
    
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
      
      <!-- Left Column: Editorial Headline & Actions (7 cols) -->
      <div class="lg:col-span-7 flex flex-col items-start text-left z-10">
        
        <!-- Status Pill -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 mb-6 backdrop-blur-md hover:border-brand-lime/40 transition-colors">
          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-lime"></span>
          </span>
          <span>${profile.school.grade} • ${profile.school.name}</span>
          <span class="text-white/20">|</span>
          <span class="text-brand-lime font-semibold">Tahun 2026</span>
        </div>

        <!-- Big Display Title -->
        <h1 class="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[0.95] mb-6">
          MUHAMMAD<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500 hover:to-brand-lime transition-all duration-500">
            ALMAHDI.
          </span>
        </h1>

        <!-- Subtitle / Bio Statement -->
        <p class="text-base sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed mb-8">
          ${profile.tagline}
        </p>

        <!-- Quick Credibility Badges Sesuai Fokus RPL -->
        <div class="flex flex-wrap gap-2.5 mb-10 font-mono text-xs">
          <span class="px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-red-500/40 text-red-300 flex items-center gap-1.5">
            <span class="text-red-400">#</span> Laravel & PHP
          </span>
          <span class="px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-cyan-500/40 text-cyan-300 flex items-center gap-1.5">
            <span class="text-cyan-400">#</span> Flutter Mobile App
          </span>
          <span class="px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-purple-500/40 text-purple-300 flex items-center gap-1.5">
            <span class="text-purple-400">#</span> Figma & Flowchart
          </span>
          <span class="px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-700/60 text-zinc-300 flex items-center gap-1.5">
            <span class="text-brand-lime">#</span> SMKN 20 Jakarta
          </span>
        </div>

        <!-- Action CTA Buttons -->
        <div class="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
          <a 
            href="#projects" 
            class="px-6 py-3.5 rounded-xl bg-brand-lime text-black font-display font-bold text-sm tracking-wide hover:bg-[#d6ff47] transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-brand-lime/20 flex items-center gap-2"
          >
            <span>Lihat Proyek Saya</span>
            <span class="text-base">↓</span>
          </a>

          <a 
            href="#terminal" 
            class="px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white font-mono text-xs hover:border-brand-lime/30 transition-all flex items-center gap-2"
          >
            <span class="text-brand-lime font-bold">&gt;_</span>
            <span>Buka Terminal [CLI]</span>
          </a>

          <button 
            id="hero-copy-email-btn"
            class="px-4 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white font-mono text-xs transition-all flex items-center gap-2 group"
            title="Salin alamat email"
          >
            <span id="copy-icon">📋</span>
            <span id="copy-label">almahdi.dev20@gmail.com</span>
          </button>
        </div>

      </div>

      <!-- Right Column: Official Locked Photo Frame & Badges (5 cols) -->
      <div class="lg:col-span-5 relative flex justify-center lg:justify-end">
        
        <!-- The Editorial Photo Card -->
        <div class="relative w-full max-w-[360px] sm:max-w-[400px] bento-card p-4 group">
          
          <!-- Card Technical Header -->
          <div class="flex items-center justify-between pb-3 mb-3 border-b border-white/10 font-mono text-[11px] text-zinc-400">
            <div class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-brand-lime"></span>
              <span class="text-white font-semibold">IDENTITAS RESMI SISWA RPL</span>
            </div>
            <span class="text-zinc-500">SMKN 20 JKT</span>
          </div>

          <!-- Image Frame Container (Permanen, Resmi & Terkunci) -->
          <div class="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-brand-lime/40 transition-all">
            <img 
              id="avatar-img-element"
              src="${officialPhoto}" 
              alt="${profile.name} - SMKN 20 Jakarta" 
              class="w-full h-full object-cover object-top filter brightness-100 contrast-105 group-hover:scale-105 transition-all duration-500"
            />
            
            <!-- Corner Crosshairs (Technical Editorial Touch) -->
            <div class="absolute top-2 left-2 font-mono text-[10px] text-brand-lime/70 select-none">+</div>
            <div class="absolute top-2 right-2 font-mono text-[10px] text-brand-lime/70 select-none">+</div>
            <div class="absolute bottom-2 left-2 font-mono text-[10px] text-brand-lime/70 select-none">+</div>
            <div class="absolute bottom-2 right-2 font-mono text-[10px] text-brand-lime/70 select-none">+</div>

            <!-- Overlay Gradient & Badge -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/10 pointer-events-none"></div>

            <div class="absolute bottom-3 left-3 right-3 flex items-end justify-between pointer-events-none">
              <div class="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <p class="font-display font-bold text-white text-xs tracking-wide">${profile.name}</p>
                <p class="font-mono text-[10px] text-brand-lime">Kelas 11 RPL • SMKN 20 Jakarta</p>
              </div>
              <div class="bg-brand-lime/90 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono font-bold text-black">
                14/03/2009
              </div>
            </div>
          </div>

          <!-- Guns.lol Style Live Counter Hub -->
          <div class="mt-3.5 pt-3 border-t border-white/10 space-y-2 font-mono text-[11px]">
            <div class="flex items-center justify-between text-zinc-400">
              <span class="flex items-center gap-1.5 text-brand-lime">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse"></span>
                LIVE PROFILE STATS
              </span>
              <span class="text-zinc-500 text-[10px]">GUNS.LOL STYLE</span>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <div class="p-2 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between" title="Total kunjungan profil">
                <span class="flex items-center gap-1 text-zinc-400">
                  <span>👁️</span> Views
                </span>
                <span id="hero-views-count" class="font-bold text-white text-xs">
                  ${analytics.formatNumber(analytics.getViews())}
                </span>
              </div>

              <div class="p-2 rounded-xl bg-white/[0.04] border border-brand-lime/20 flex items-center justify-between" title="Total link & tombol yang diklik pengunjung">
                <span class="flex items-center gap-1 text-zinc-400">
                  <span class="text-brand-lime">🔗</span> Clicks
                </span>
                <span id="hero-clicks-count" class="font-bold text-brand-lime text-xs">
                  ${analytics.formatNumber(analytics.getTotalClicks())}
                </span>
              </div>
            </div>
          </div>

        </div>

        <!-- Draggable Tactile Sticker 1: Indomie & Kopi -->
        <div 
          class="draggable-sticker absolute -top-5 -left-4 sm:-left-8 bg-[#181a24] text-white border border-brand-lime/40 px-3.5 py-1.5 rounded-xl shadow-xl font-mono text-xs flex items-center gap-2 transform -rotate-3 hover:scale-105 z-20"
          title="Geser stiker ini!"
        >
          <span class="text-sm">⚡</span>
          <span class="font-bold text-brand-lime">Laravel + Flutter</span>
          <span class="text-[10px] text-zinc-400 font-mono">XI RPL</span>
        </div>

        <!-- Draggable Tactile Sticker 2: SMKN 20 JKT -->
        <div 
          class="draggable-sticker absolute -bottom-6 -right-2 sm:-right-6 bg-brand-lime text-black font-display font-extrabold px-4 py-2 rounded-xl shadow-xl text-xs tracking-tight uppercase transform rotate-6 hover:scale-105 z-20"
          title="Geser stiker ini!"
        >
          🎓 SMKN 20 JAKARTA • KELAS 11
        </div>

      </div>

    </div>
  `;

  // Draggable Stickers Physics/Interactivity
  const stickers = hero.querySelectorAll('.draggable-sticker');
  stickers.forEach((sticker) => {
    let isDragging = false;
    let startX = 0, startY = 0;
    let initialLeft = 0, initialTop = 0;

    const onMouseDown = (e) => {
      sound.playClick();
      isDragging = true;
      startX = e.clientX || (e.touches && e.touches[0].clientX);
      startY = e.clientY || (e.touches && e.touches[0].clientY);
      const rect = sticker.getBoundingClientRect();
      const parentRect = sticker.parentElement.getBoundingClientRect();
      initialLeft = rect.left - parentRect.left;
      initialTop = rect.top - parentRect.top;

      sticker.style.position = 'absolute';
      sticker.style.left = `${initialLeft}px`;
      sticker.style.top = `${initialTop}px`;
      sticker.style.transform = 'scale(1.08) rotate(4deg)';
      sticker.style.zIndex = '50';

      const onMouseMove = (moveEvent) => {
        if (!isDragging) return;
        const currentX = moveEvent.clientX || (moveEvent.touches && moveEvent.touches[0].clientX);
        const currentY = moveEvent.clientY || (moveEvent.touches && moveEvent.touches[0].clientY);
        const dx = currentX - startX;
        const dy = currentY - startY;

        sticker.style.left = `${initialLeft + dx}px`;
        sticker.style.top = `${initialTop + dy}px`;
      };

      const onMouseUp = () => {
        isDragging = false;
        sticker.style.transform = 'scale(1) rotate(0deg)';
        sticker.style.zIndex = '20';
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        window.removeEventListener('touchmove', onMouseMove);
        window.removeEventListener('touchend', onMouseUp);
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onMouseMove);
      window.addEventListener('touchend', onMouseUp);
    };

    sticker.addEventListener('mousedown', onMouseDown);
    sticker.addEventListener('touchstart', onMouseDown, { passive: true });
  });

  // Hero Copy Email Interaction & Click Tracking
  const copyBtn = hero.querySelector('#hero-copy-email-btn');
  const copyLabel = hero.querySelector('#copy-label');
  const copyIcon = hero.querySelector('#copy-icon');

  copyBtn?.addEventListener('click', () => {
    analytics.incrementClick('email');
    sound.playSuccess();
    navigator.clipboard.writeText(profile.contact.email).then(() => {
      copyLabel.textContent = "Email Tersalin! ✨";
      copyIcon.textContent = "✓";
      copyBtn.classList.add('border-brand-lime', 'text-brand-lime');

      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        copyLabel.textContent = profile.contact.email;
        copyIcon.textContent = "📋";
        copyBtn.classList.remove('border-brand-lime', 'text-brand-lime');
      }, 2500);
    });
  });

  // Real-time counter UI updater (Guns.lol style live sync)
  const viewsEl = hero.querySelector('#hero-views-count');
  const clicksEl = hero.querySelector('#hero-clicks-count');

  window.addEventListener('analytics_updated', () => {
    if (viewsEl) viewsEl.textContent = analytics.formatNumber(analytics.getViews());
    if (clicksEl) {
      clicksEl.textContent = analytics.formatNumber(analytics.getTotalClicks());
      clicksEl.classList.add('scale-125', 'text-white');
      setTimeout(() => clicksEl.classList.remove('scale-125', 'text-white'), 300);
    }
  });

  // Sound listeners for action buttons
  hero.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => sound.playHover());
  });

  return hero;
}
