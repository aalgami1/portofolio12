import { profile } from '../data/profile.js';
import { sound } from '../utils/audio.js';
import { analytics } from '../utils/analytics.js';
import confetti from 'canvas-confetti';

export function renderProjects() {
  const section = document.createElement('section');
  section.id = 'projects';
  section.className = 'py-16 px-4 sm:px-8 max-w-7xl mx-auto';

  let currentCategory = 'all';

  function generateCardsHTML(category = 'all') {
    const filtered = category === 'all' 
      ? profile.projects 
      : profile.projects.filter(p => {
          if (category === 'laravel') return p.id.includes('laravel');
          if (category === 'flutter') return p.id.includes('flutter');
          if (category === 'design') return p.id.includes('figma');
          return true;
        });

    return filtered.map(p => `
      <div 
        class="bento-card group flex flex-col justify-between p-6 sm:p-7 relative border-white/10 hover:border-brand-lime/40 transition-all duration-300"
        data-project-id="${p.id}"
      >
        <!-- Browser Bar Simulation (Editorial Touch) -->
        <div>
          <div class="flex items-center justify-between pb-4 mb-5 border-b border-white/10 font-mono text-[11px] text-zinc-400">
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              <span class="ml-2 text-zinc-400 font-mono truncate max-w-[150px] sm:max-w-[200px]">
                almahdi://${p.id}
              </span>
            </div>
            <span class="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider" style="color: ${p.accent}; background-color: ${p.accent}15; border: 1px solid ${p.accent}40;">
              ${p.category}
            </span>
          </div>

          <!-- Title & Tagline -->
          <h3 class="text-xl sm:text-2xl font-display font-bold text-white mb-2 group-hover:text-brand-lime transition-colors">
            ${p.title}
          </h3>
          <p class="text-xs sm:text-sm text-zinc-300 mb-5 leading-relaxed font-normal">
            ${p.tagline}
          </p>

          <!-- Problem & Solution Snippet -->
          <div class="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 mb-6 text-xs">
            <div class="text-[11px] font-mono text-brand-lime mb-1 font-semibold">Tantangan & Implementasi:</div>
            <p class="text-zinc-400 leading-relaxed">${p.impact}</p>
          </div>

          <!-- Stack Tags -->
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${p.stack.map(tech => `
              <span class="px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-700/60 text-[11px] font-mono text-zinc-300">
                ${tech}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Footer Actions (Hanya Tampilkan Tombol GitHub Jika Proyek Punya GitHub) -->
        <div class="pt-4 border-t border-white/10 flex items-center justify-between">
          <button 
            class="open-case-study-btn text-xs font-mono text-brand-lime hover:underline flex items-center gap-1.5"
            data-id="${p.id}"
          >
            <span>Detail Penjelasan</span>
            <span>➔</span>
          </button>

          <div class="flex items-center gap-2">
            ${p.hasGithub && p.github ? `
              <a 
                href="${p.github}" 
                target="_blank" 
                rel="noreferrer" 
                data-track-id="${p.id}"
                class="project-github-link px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 hover:border-brand-lime/40 transition-all font-mono text-xs flex items-center gap-2"
                title="Buka Repositori GitHub (${analytics.getClickCount(p.id)} klik)"
              >
                <span>GitHub</span>
                <span class="px-1.5 py-0.5 rounded bg-brand-lime/10 text-brand-lime font-bold text-[10px] border border-brand-lime/20" id="badge-${p.id}">
                  ${analytics.getClickCount(p.id)}
                </span>
                <span class="text-[10px] text-zinc-500">↗</span>
              </a>
            ` : `
              <span class="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-[10px] font-mono text-zinc-400">
                Figma & Flowchart
              </span>
            `}

            <button 
              class="quick-launch-btn px-3 py-1.5 rounded-lg bg-brand-lime text-black font-mono text-xs font-bold hover:bg-[#d6ff47] transition-all"
              data-id="${p.id}"
            >
              Lihat Ringkasan
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  section.innerHTML = `
    <!-- Section Header & Filter Tabs -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10 gap-5">
      <div>
        <div class="flex items-center gap-2 font-mono text-xs text-brand-lime mb-2">
          <span>// 02</span>
          <span>SELECTED SHOWCASES</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Karya & Eksplorasi Keahlian RPL.
        </h2>
      </div>

      <!-- Filter Buttons Sesuai Kategori Utama User -->
      <div class="flex items-center gap-1.5 p-1 bg-white/[0.04] border border-white/10 rounded-xl font-mono text-xs overflow-x-auto">
        <button class="filter-btn active px-3 py-1.5 rounded-lg bg-brand-lime text-black font-bold transition-all" data-category="all">
          Semua (3)
        </button>
        <button class="filter-btn px-3 py-1.5 rounded-lg text-zinc-400 hover:text-white transition-all" data-category="laravel">
          Laravel
        </button>
        <button class="filter-btn px-3 py-1.5 rounded-lg text-zinc-400 hover:text-white transition-all" data-category="flutter">
          Flutter
        </button>
        <button class="filter-btn px-3 py-1.5 rounded-lg text-zinc-400 hover:text-white transition-all" data-category="design">
          Figma & Flowchart
        </button>
      </div>
    </div>

    <!-- Cards Grid (3 Projects) -->
    <div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${generateCardsHTML('all')}
    </div>

    <!-- Case Study Modal -->
    <div id="case-study-modal" class="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md hidden items-center justify-center p-4">
      <div class="bg-[#12141e] border border-white/20 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
        <button 
          id="close-modal-btn" 
          class="absolute top-5 right-5 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white flex items-center justify-center font-mono text-sm"
        >
          ✕
        </button>

        <div id="modal-content">
          <!-- Dynamically populated -->
        </div>
      </div>
    </div>
  `;

  // Attach Event Handlers
  const grid = section.querySelector('#projects-grid');
  const filterBtns = section.querySelectorAll('.filter-btn');
  const modal = section.querySelector('#case-study-modal');
  const modalContent = section.querySelector('#modal-content');
  const closeModalBtn = section.querySelector('#close-modal-btn');

  // Filter Tabs Handler
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sound.playClick();
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-brand-lime', 'text-black', 'font-bold');
        b.classList.add('text-zinc-400');
      });
      btn.classList.add('active', 'bg-brand-lime', 'text-black', 'font-bold');
      btn.classList.remove('text-zinc-400');

      currentCategory = btn.dataset.category;
      grid.innerHTML = generateCardsHTML(currentCategory);
      attachCardInteractions();
    });
  });

  // Modal Open Handler
  function openModal(projectId) {
    const p = profile.projects.find(item => item.id === projectId);
    if (!p) return;

    sound.playSuccess();

    modalContent.innerHTML = `
      <div class="flex items-center gap-2 font-mono text-xs mb-3" style="color: ${p.accent};">
        <span>// DOKUMENTASI PROYEK</span>
        <span>•</span>
        <span>${p.category}</span>
      </div>

      <h3 class="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
        ${p.title}
      </h3>

      <p class="text-zinc-300 text-sm leading-relaxed mb-6 font-medium">
        ${p.tagline}
      </p>

      <div class="space-y-4 mb-6 text-xs sm:text-sm">
        <div class="p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <h4 class="font-mono text-brand-lime text-xs font-bold mb-1 uppercase tracking-wider">Deskripsi & Ruang Lingkup:</h4>
          <p class="text-zinc-300 leading-relaxed">${p.description}</p>
        </div>

        <div class="p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <h4 class="font-mono text-brand-cyan text-xs font-bold mb-1 uppercase tracking-wider">Tujuan & Hasil Implementasi:</h4>
          <p class="text-zinc-300 leading-relaxed">${p.impact}</p>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="font-mono text-zinc-400 text-xs mb-2">Stack & Alat yang Digunakan:</h4>
        <div class="flex flex-wrap gap-2">
          ${p.stack.map(s => `
            <span class="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-200">
              ${s}
            </span>
          `).join('')}
        </div>
      </div>

      <div class="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div class="text-[11px] font-mono text-zinc-400">
          Muhammad Almahdi • Siswa XI RPL SMKN 20 JKT
        </div>
        <div class="flex items-center gap-2.5">
          ${p.hasGithub && p.github ? `
            <a 
              href="${p.github}" 
              target="_blank" 
              class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono text-white transition-all flex items-center gap-1.5"
            >
              <span>Buka GitHub Repo</span>
              <span>↗</span>
            </a>
          ` : `
            <span class="text-xs font-mono text-brand-lime">
              ✓ Prototipe Figma & Alur Flowchart Tersedia
            </span>
          `}
          <button 
            id="modal-close-action-btn"
            class="px-4 py-2 rounded-xl bg-brand-lime text-black font-mono text-xs font-bold hover:bg-[#d6ff47] transition-all"
          >
            Tutup
          </button>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    modalContent.querySelector('#modal-close-action-btn')?.addEventListener('click', closeModal);
  }

  function closeModal() {
    sound.playClick();
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Attach card interactions
  function attachCardInteractions() {
    section.querySelectorAll('.open-case-study-btn, .quick-launch-btn').forEach(btn => {
      btn.addEventListener('click', () => openModal(btn.dataset.id));
    });

    // Tracking klik GitHub proyek (Guns.lol style)
    section.querySelectorAll('.project-github-link').forEach(link => {
      link.addEventListener('click', () => {
        const id = link.dataset.trackId;
        if (id) {
          const newCount = analytics.incrementClick(id);
          const badge = link.querySelector(`#badge-${id}`);
          if (badge) {
            badge.textContent = newCount;
            badge.classList.add('scale-125', 'bg-brand-lime', 'text-black');
            setTimeout(() => badge.classList.remove('scale-125', 'bg-brand-lime', 'text-black'), 350);
          }
        }
      });
    });

    section.querySelectorAll('.bento-card').forEach(c => {
      c.addEventListener('mouseenter', () => sound.playHover());
    });
  }

  attachCardInteractions();

  return section;
}
