import { profile } from '../data/profile.js';
import { sound } from '../utils/audio.js';

export function renderTimeline() {
  const section = document.createElement('section');
  section.id = 'experience';
  section.className = 'py-16 px-4 sm:px-8 max-w-7xl mx-auto';

  section.innerHTML = `
    <!-- Section Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-white/10 gap-4">
      <div>
        <div class="flex items-center gap-2 font-mono text-xs text-brand-lime mb-2">
          <span>// 04</span>
          <span>VOCATIONAL ROADMAP</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Rekam Jejak & Milestone Belajar.
        </h2>
      </div>
      <p class="text-zinc-400 font-mono text-xs max-w-md">
        Perjalanan dari baris pertama 'Hello World' hingga merakit arsitektur web nyata di SMKN 20 Jakarta.
      </p>
    </div>

    <!-- Timeline List -->
    <div class="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-10 sm:space-y-12">
      ${profile.timeline.map((item, idx) => `
        <div class="relative group">
          <!-- Dot Indicator -->
          <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#090b10] border-2 border-brand-lime flex items-center justify-center group-hover:scale-125 transition-transform">
            <div class="w-1.5 h-1.5 rounded-full bg-brand-lime"></div>
          </div>

          <!-- Card Content -->
          <div class="bento-card p-5 sm:p-6 hover:border-brand-lime/30 transition-all">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono text-xs">
              <span class="px-2.5 py-1 rounded bg-brand-lime/10 text-brand-lime border border-brand-lime/30 font-bold">
                ${item.year}
              </span>
              <span class="text-zinc-400">${item.role}</span>
            </div>

            <h3 class="text-xl font-display font-bold text-white mb-2 group-hover:text-brand-lime transition-colors">
              ${item.title}
            </h3>

            <p class="text-zinc-300 text-sm leading-relaxed font-normal">
              ${item.desc}
            </p>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  section.querySelectorAll('.bento-card').forEach(el => {
    el.addEventListener('mouseenter', () => sound.playHover());
  });

  return section;
}

