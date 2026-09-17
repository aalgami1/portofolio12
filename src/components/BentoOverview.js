import { profile } from '../data/profile.js';
import { sound } from '../utils/audio.js';

export function renderBentoOverview() {
  const section = document.createElement('section');
  section.id = 'overview';
  section.className = 'py-16 px-4 sm:px-8 max-w-7xl mx-auto';

  section.innerHTML = `
    <!-- Section Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10 gap-4">
      <div>
        <div class="flex items-center gap-2 font-mono text-xs text-brand-lime mb-2">
          <span>// 01</span>
          <span>BENTO LAB & OVERVIEW</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Siswa SMK RPL yang Membangun dengan Jiwa.
        </h2>
      </div>
      <p class="text-zinc-400 font-mono text-xs max-w-md">
        Bukan sekadar deretan kartu statis. Sentuh dan jelajahi berbagai dimensi profil teknis dan filosofi saya.
      </p>
    </div>

    <!-- Bento Grid Container -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5">
      
      <!-- Bento Card 1: Anti-AI Manifesto (8 cols) -->
      <div class="bento-card md:col-span-8 p-6 sm:p-8 flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between font-mono text-xs text-zinc-400 mb-6">
            <span class="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white">
              <span class="w-1.5 h-1.5 rounded-full bg-brand-lime"></span>
              CORE PHILOSOPHY
            </span>
            <span class="text-zinc-500">NO GENERIC TEMPLATES</span>
          </div>

          <h3 class="text-2xl sm:text-3xl font-display font-bold text-white leading-snug mb-4">
            "AI bisa menggenerate kode, tapi tidak bisa menggantikan kepedulian seorang developer pada detail rasa."
          </h3>

          <p class="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            Banyak website saat ini terlihat seragam: gradien ungu yang sama, teks robotik yang hambar, dan nihil kepribadian. 
            Sebagai siswa kelas 11 RPL di <strong class="text-white font-semibold">SMKN 20 Jakarta</strong>, 
            saya merakit perangkat lunak dengan pendekatan <em class="text-brand-lime font-mono not-italic">craftsmanship</em>: 
            performa 60fps, micro-interactions yang memuaskan saat diklik, dan logika backend yang kokoh.
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 font-mono text-xs">
          <div class="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div class="text-zinc-400 text-[10px]">TANGGAL LAHIR</div>
            <div class="text-brand-lime font-bold text-sm mt-0.5">${profile.personal.birthFormatted}</div>
          </div>
          <div class="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div class="text-zinc-400 text-[10px]">USIA</div>
            <div class="text-white font-bold text-sm mt-0.5">${profile.personal.age} Tahun</div>
          </div>
          <div class="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div class="text-zinc-400 text-[10px]">SEKOLAH</div>
            <div class="text-white font-bold text-sm mt-0.5">SMKN 20 JKT</div>
          </div>
          <div class="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div class="text-zinc-400 text-[10px]">JURUSAN</div>
            <div class="text-brand-cyan font-bold text-sm mt-0.5">XI RPL</div>
          </div>
        </div>
      </div>

      <!-- Bento Card 2: Live Activity & Focus Music Widget (4 cols) -->
      <div class="bento-card md:col-span-4 p-6 flex flex-col justify-between bg-gradient-to-b from-zinc-900/90 to-[#0e1017] group">
        <div>
          <div class="flex items-center justify-between font-mono text-xs text-zinc-400 mb-6">
            <span class="flex items-center gap-1.5 text-brand-lime">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              LIVE ACTIVITY
            </span>
            <span class="text-[10px] text-zinc-500">REALTIME</span>
          </div>

          <!-- Code Activity Simulator -->
          <div class="p-4 rounded-xl bg-black/40 border border-white/10 mb-6">
            <div class="flex items-center gap-2 mb-2 font-mono text-xs text-zinc-400">
              <span class="text-brand-amber">⚡</span>
              <span>Currently Developing:</span>
            </div>
            <div class="font-mono text-sm text-white font-medium truncate">
              Sistem Web Laravel & Mobile Flutter
            </div>
            <div class="text-[11px] text-zinc-400 mt-1">
              Desain UI di Figma & Flowchart Logika Sistem
            </div>
          </div>

          <!-- Music/Vibe Widget -->
          <div class="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-lg border border-white/10">
              🎧
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-mono text-zinc-400">CODING SOUNDTRACK</span>
                <span class="flex items-center gap-0.5 h-3">
                  <span class="w-0.5 h-2.5 bg-brand-lime animate-pulse"></span>
                  <span class="w-0.5 h-4 bg-brand-lime animate-pulse delay-75"></span>
                  <span class="w-0.5 h-1.5 bg-brand-lime animate-pulse delay-150"></span>
                </span>
              </div>
              <p class="text-xs font-medium text-white truncate">Lofi Coding Beats • Chill Hop</p>
              <p class="text-[11px] text-zinc-400 truncate">Almahdi's Deep Work Flow</p>
            </div>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-zinc-400">
          <span>Status Vokasi:</span>
          <span class="text-brand-lime font-bold">Siap Magang / PKL</span>
        </div>
      </div>

      <!-- Bento Card 3: Interactive Tech Radar (6 cols) -->
      <div class="bento-card md:col-span-6 p-6 sm:p-7 group">
        <div class="flex items-center justify-between font-mono text-xs text-zinc-400 mb-5">
          <span class="text-white font-semibold flex items-center gap-1.5">
            <span class="text-brand-cyan">⚛</span> TECH RADAR & TOOLS
          </span>
          <span class="text-zinc-500">STACK XI RPL</span>
        </div>

        <p class="text-xs text-zinc-400 mb-5 leading-relaxed">
          Teknologi yang saya gunakan secara rutin untuk membangun produk nyata, bukan sekadar teori di buku:
        </p>

        <!-- Tech Badges Sesuai Keahlian Utama User -->
        <div class="flex flex-wrap gap-2">
          ${[
            { name: "Laravel (PHP)", tag: "Backend Framework", color: "border-red-500/30 text-red-300" },
            { name: "Flutter (Dart)", tag: "Mobile Development", color: "border-cyan-500/30 text-cyan-300" },
            { name: "Figma", tag: "UI/UX & Prototype", color: "border-purple-500/30 text-purple-300" },
            { name: "Flowchart & UML", tag: "Logika Sistem RPL", color: "border-amber-500/30 text-amber-300" },
            { name: "MySQL Database", tag: "Basis Data Relasional", color: "border-blue-500/30 text-blue-300" },
            { name: "Git & GitHub", tag: "Version Control", color: "border-zinc-500/30 text-zinc-300" }
          ].map(t => `
            <div class="px-3.5 py-2.5 rounded-xl bg-white/[0.03] border ${t.color} flex items-center justify-between gap-3 text-xs font-mono hover:scale-[1.03] hover:bg-white/[0.08] transition-all cursor-default">
              <span class="text-white font-semibold">${t.name}</span>
              <span class="text-[10px] text-zinc-400">${t.tag}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Bento Card 4: Education & SMKN 20 Profile (6 cols) -->
      <div class="bento-card md:col-span-6 p-6 sm:p-7 flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between font-mono text-xs text-zinc-400 mb-5">
            <span class="text-white font-semibold flex items-center gap-1.5">
              <span class="text-brand-lime">🏛</span> EDUKASI & LINGKUNGAN
            </span>
            <span class="text-brand-lime font-mono">JAKARTA SELATAN</span>
          </div>

          <div class="space-y-4">
            <div class="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-brand-lime/30 transition-all">
              <div class="flex items-start justify-between">
                <div>
                  <h4 class="font-display font-bold text-white text-base">SMK Negeri 20 Jakarta</h4>
                  <p class="font-mono text-xs text-brand-lime mt-0.5">Kompetensi Keahlian: Rekayasa Perangkat Lunak (RPL)</p>
                </div>
                <span class="font-mono text-[11px] px-2 py-1 rounded bg-brand-lime/10 text-brand-lime border border-brand-lime/30">
                  Kelas 11 (XI)
                </span>
              </div>
              <p class="text-xs text-zinc-300 mt-2.5 leading-relaxed">
                Mempelajari pemodelan perangkat lunak, arsitektur basis data, pemrograman web berorientasi objek, clean code, dan kesiapan mental industri teknologi modern.
              </p>
            </div>

            <div class="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between font-mono text-xs text-zinc-300">
              <span class="text-zinc-400">Target Selanjutnya:</span>
              <span class="text-white font-semibold">Magang Industri (PKL 2026) & Proyek Komersial</span>
            </div>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
          <span class="text-zinc-400">Lokasi: Jakarta Selatan</span>
          <a 
            href="${profile.school.short ? '#' : '#'}" 
            class="text-brand-lime hover:underline flex items-center gap-1"
            id="explore-projects-shortcut"
          >
            Lihat Proyek Buatan Saya ➔
          </a>
        </div>
      </div>

    </div>
  `;

  // Attach hover sounds
  section.querySelectorAll('.bento-card, .bento-card a').forEach(el => {
    el.addEventListener('mouseenter', () => sound.playHover());
  });

  const shortcut = section.querySelector('#explore-projects-shortcut');
  shortcut?.addEventListener('click', (e) => {
    e.preventDefault();
    sound.playClick();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  });

  return section;
}

