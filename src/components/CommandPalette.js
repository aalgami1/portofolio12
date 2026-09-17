import { profile } from '../data/profile.js';
import { sound } from '../utils/audio.js';
import confetti from 'canvas-confetti';

export function initCommandPalette() {
  const modal = document.createElement('div');
  modal.id = 'cmd-palette-modal';
  modal.className = 'fixed inset-0 z-[999] bg-black/80 backdrop-blur-md hidden items-start justify-center pt-20 px-4';

  modal.innerHTML = `
    <div class="bg-[#11131c] border border-white/20 rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
      
      <!-- Input Field -->
      <div class="p-4 border-b border-white/10 flex items-center gap-3">
        <span class="text-brand-lime font-mono text-sm">⌘</span>
        <input 
          type="text" 
          id="cmd-palette-input" 
          placeholder="Ketik tujuan atau aksi... (contoh: project, terminal, audio, contact)" 
          class="flex-1 bg-transparent text-white focus:outline-none font-mono text-sm placeholder:text-zinc-500"
          autocomplete="off"
        />
        <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/10">ESC</span>
      </div>

      <!-- Action Items List -->
      <div id="cmd-palette-list" class="p-2 max-h-80 overflow-y-auto space-y-1 font-mono text-xs">
        <!-- Dynamically rendered -->
      </div>

      <!-- Bottom Hint Bar -->
      <div class="p-3 bg-black/40 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-zinc-500">
        <span>Gunakan tombol panah atau mouse untuk memilih</span>
        <span>Muhammad Almahdi • SMKN 20 Jakarta</span>
      </div>

    </div>
  `;

  document.body.appendChild(modal);

  const input = modal.querySelector('#cmd-palette-input');
  const list = modal.querySelector('#cmd-palette-list');

  const actions = [
    {
      id: 'projects',
      title: 'Koleksi Proyek & Studi Kasus',
      category: 'Navigasi',
      shortcut: 'G P',
      run: () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'terminal',
      title: 'Buka Interactive Terminal CLI',
      category: 'Fitur',
      shortcut: 'G T',
      run: () => {
        document.querySelector('#terminal')?.scrollIntoView({ behavior: 'smooth' });
        document.querySelector('#terminal-input')?.focus();
      }
    },
    {
      id: 'overview',
      title: 'Bento Lab & Filosofi Craftsmanship',
      category: 'Navigasi',
      shortcut: 'G B',
      run: () => {
        document.querySelector('#overview')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'experience',
      title: 'Milestone & Perjalanan Belajar SMK RPL',
      category: 'Navigasi',
      shortcut: 'G E',
      run: () => {
        document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'contact',
      title: 'Hubungi Almahdi (Email / Form / WhatsApp)',
      category: 'Kontak',
      shortcut: 'G C',
      run: () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'audio',
      title: 'Toggle Audio Synthesizer SFX',
      category: 'Setting',
      shortcut: 'M',
      run: () => {
        sound.toggleMute();
        sound.playSuccess();
        const btn = document.querySelector('#sound-toggle-btn');
        btn?.click();
      }
    },
    {
      id: 'matrix',
      title: 'Toggle Hacker Matrix Mode',
      category: 'Easter Egg',
      shortcut: 'X',
      run: () => {
        document.body.classList.toggle('matrix-active');
        sound.playSuccess();
      }
    },
    {
      id: 'email',
      title: 'Salin Alamat Email ke Clipboard',
      category: 'Aksi Cepat',
      shortcut: 'C',
      run: () => {
        navigator.clipboard.writeText(profile.contact.email);
        sound.playSuccess();
        confetti({ particleCount: 50, spread: 70, origin: { y: 0.5 } });
      }
    }
  ];

  function renderList(filter = '') {
    const query = filter.toLowerCase().trim();
    const filtered = actions.filter(a => 
      a.title.toLowerCase().includes(query) || 
      a.category.toLowerCase().includes(query) ||
      a.id.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      list.innerHTML = `
        <div class="p-6 text-center text-zinc-500 font-mono text-xs">
          Tidak ada aksi yang cocok dengan "${filter}"
        </div>
      `;
      return;
    }

    list.innerHTML = filtered.map((item, idx) => `
      <div 
        class="cmd-item p-3 rounded-xl hover:bg-white/10 flex items-center justify-between cursor-pointer transition-colors ${idx === 0 ? 'bg-white/5 border border-brand-lime/30' : ''}"
        data-index="${idx}"
      >
        <div class="flex items-center gap-3">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-lime"></span>
          <div>
            <div class="text-white font-medium">${item.title}</div>
            <div class="text-[10px] text-zinc-500">${item.category}</div>
          </div>
        </div>
        <span class="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
          ${item.shortcut}
        </span>
      </div>
    `).join('');

    list.querySelectorAll('.cmd-item').forEach((el, index) => {
      el.addEventListener('mouseenter', () => sound.playHover());
      el.addEventListener('click', () => {
        sound.playClick();
        filtered[index].run();
        closePalette();
      });
    });
  }

  function openPalette() {
    sound.playClick();
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    input.value = '';
    renderList('');
    setTimeout(() => input.focus(), 50);
  }

  function closePalette() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  // Keyboard shortcut Cmd+K or Ctrl+K
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal.classList.contains('hidden')) {
        openPalette();
      } else {
        closePalette();
      }
    } else if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closePalette();
    }
  });

  input.addEventListener('input', (e) => {
    sound.playKey();
    renderList(e.target.value);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closePalette();
  });

  // Attach trigger button in navbar
  const triggerBtn = document.querySelector('#cmd-palette-trigger');
  triggerBtn?.addEventListener('click', openPalette);
}

