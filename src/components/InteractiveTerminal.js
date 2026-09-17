import { profile } from '../data/profile.js';
import { sound } from '../utils/audio.js';
import confetti from 'canvas-confetti';

export function renderInteractiveTerminal() {
  const section = document.createElement('section');
  section.id = 'terminal';
  section.className = 'py-16 px-4 sm:px-8 max-w-7xl mx-auto';

  section.innerHTML = `
    <!-- Section Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-4">
      <div>
        <div class="flex items-center gap-2 font-mono text-xs text-brand-lime mb-2">
          <span>// 03</span>
          <span>INTERACTIVE CLI PLAYGROUND</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Terminal Pengembang (Almahdi Shell v1.0)
        </h2>
      </div>
      <p class="text-zinc-400 font-mono text-xs max-w-md">
        Ketik perintah langsung di terminal untuk berinteraksi. Coba ketik <code class="text-brand-lime font-bold">help</code> atau <code class="text-brand-cyan font-bold">sudo hire</code>.
      </p>
    </div>

    <!-- Terminal Window Container -->
    <div class="rounded-2xl border border-zinc-700/80 bg-[#090b10] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      
      <!-- Terminal Window Bar -->
      <div class="px-4 py-3 bg-[#11131c] border-b border-zinc-800 flex items-center justify-between select-none">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-[#ff5f56] inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-[#27c93f] inline-block"></span>
          <span class="ml-3 text-zinc-400 text-xs">almahdi@smkn20-jkt:~ (zsh)</span>
        </div>
        <div class="flex items-center gap-2 text-[11px] text-zinc-400">
          <span class="hidden sm:inline">UTF-8</span>
          <button id="terminal-clear-btn" class="hover:text-white px-2 py-0.5 rounded bg-zinc-800/80 hover:bg-zinc-700 transition-colors">
            clear
          </button>
        </div>
      </div>

      <!-- Terminal Screen / Log Area -->
      <div id="terminal-output" class="p-4 sm:p-6 space-y-3 min-h-[300px] max-h-[450px] overflow-y-auto font-mono leading-relaxed">
        <div class="text-zinc-400">
          Welcome to <span class="text-brand-lime font-bold">Almahdi CLI v1.0</span> [SMKN 20 Jakarta Environment]<br/>
          Type <span class="text-white bg-white/10 px-1.5 py-0.5 rounded">help</span> to view all available commands.
        </div>
      </div>

      <!-- Terminal Input Line -->
      <div class="px-4 sm:px-6 py-3.5 bg-[#0d0f17] border-t border-zinc-800/80 flex items-center gap-2">
        <span class="text-brand-lime font-bold select-none">almahdi@smkn20:~$</span>
        <input 
          type="text" 
          id="terminal-input" 
          placeholder="Ketik perintah... (contoh: help, bio, projects, matrix, sudo hire)" 
          class="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs sm:text-sm placeholder:text-zinc-600"
          autocomplete="off"
          spellcheck="false"
        />
        <button 
          id="terminal-submit-btn" 
          class="px-3 py-1 bg-brand-lime/10 border border-brand-lime/30 text-brand-lime rounded text-xs hover:bg-brand-lime/20 transition-all"
        >
          Kirim ↵
        </button>
      </div>

    </div>
  `;

  const outputEl = section.querySelector('#terminal-output');
  const inputEl = section.querySelector('#terminal-input');
  const submitBtn = section.querySelector('#terminal-submit-btn');
  const clearBtn = section.querySelector('#terminal-clear-btn');

  const history = [];
  let historyIndex = -1;

  function appendLine(html, type = 'text') {
    const line = document.createElement('div');
    if (type === 'cmd') {
      line.className = 'text-brand-lime font-bold flex items-center gap-2';
    } else if (type === 'error') {
      line.className = 'text-red-400';
    } else {
      line.className = 'text-zinc-300';
    }
    line.innerHTML = html;
    outputEl.appendChild(line);
    outputEl.scrollTop = outputEl.scrollHeight;
  }

  function handleCommand(cmdRaw) {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    sound.playClick();
    appendLine(`<span>almahdi@smkn20:~$</span> <span class="text-white">${escapeHTML(cmdRaw)}</span>`, 'cmd');

    history.push(cmdRaw);
    historyIndex = history.length;

    switch (cmd) {
      case 'help':
        appendLine(`
          <div class="space-y-1.5 text-zinc-300 pl-2 border-l border-brand-lime/40 my-2">
            <div><span class="text-brand-lime font-bold w-28 inline-block">bio</span> : Informasi lengkap profil Muhammad Almahdi</div>
            <div><span class="text-brand-lime font-bold w-28 inline-block">school</span> : Profil SMKN 20 Jakarta & jurusan RPL</div>
            <div><span class="text-brand-lime font-bold w-28 inline-block">skills</span> : Daftar keahlian teknis & tools</div>
            <div><span class="text-brand-lime font-bold w-28 inline-block">projects</span> : Ringkasan proyek & showcase</div>
            <div><span class="text-brand-lime font-bold w-28 inline-block">contact</span> : Alamat email & link sosial media</div>
            <div><span class="text-brand-lime font-bold w-28 inline-block">matrix</span> : Toggle efek Matrix mode (hacker vibe)</div>
            <div><span class="text-brand-lime font-bold w-28 inline-block">indomie</span> : Rahasia energi ngoding siswa SMK</div>
            <div><span class="text-brand-lime font-bold w-28 inline-block">sudo hire</span> : Rekrut / kirim penawaran kolaborasi</div>
            <div><span class="text-brand-lime font-bold w-28 inline-block">clear</span> : Bersihkan layar terminal</div>
          </div>
        `);
        break;

      case 'bio':
        appendLine(`
          <div class="p-3 rounded-lg bg-white/5 space-y-1 text-zinc-300">
            <div><strong>Nama:</strong> ${profile.name} (${profile.nickname})</div>
            <div><strong>Status:</strong> ${profile.school.grade} — ${profile.school.name}</div>
            <div><strong>Jurusan:</strong> ${profile.school.major}</div>
            <div><strong>Tanggal Lahir:</strong> ${profile.personal.birthFormatted} (${profile.personal.age} Tahun)</div>
            <div><strong>Lokasi:</strong> ${profile.personal.location}</div>
            <div class="text-zinc-400 mt-2 text-xs">${profile.bio}</div>
          </div>
        `);
        break;

      case 'school':
        appendLine(`
          <div class="p-3 rounded-lg bg-white/5 space-y-1 text-zinc-300">
            <div><strong>Sekolah:</strong> ${profile.school.name} (SMKN 20)</div>
            <div><strong>Wilayah:</strong> ${profile.school.location}</div>
            <div><strong>Kompetensi:</strong> Rekayasa Perangkat Lunak (RPL)</div>
            <div><strong>Kurikulum & Fokus:</strong> Pemrograman Web, OOP, Basis Data, Laravel, JavaScript, Clean Code</div>
            <div class="text-brand-lime mt-1">Status: Siap Magang / PKL Industri 2026!</div>
          </div>
        `);
        break;

      case 'skills':
        appendLine(`
          <div class="space-y-2 text-xs">
            <div><strong class="text-red-400">Web & Backend:</strong> Laravel (PHP), MySQL Database, RESTful API, MVC Architecture</div>
            <div><strong class="text-brand-cyan">Mobile App:</strong> Flutter & Dart (Cross-Platform Android/iOS)</div>
            <div><strong class="text-purple-400">UI/UX & Modeling:</strong> Figma (Wireframe & Prototype), Flowchart & UML Logika Sistem</div>
            <div><strong class="text-brand-lime">Version Control:</strong> Git & GitHub Repository</div>
          </div>
        `);
        break;

      case 'projects':
        appendLine(`
          <div class="space-y-2">
            ${profile.projects.map(p => `
              <div class="border-b border-white/5 pb-1.5">
                <span class="text-white font-bold">${p.title}</span> <span class="text-zinc-500">[${p.category}]</span>
                <div class="text-zinc-400 text-xs">${p.tagline}</div>
                <div class="text-brand-lime text-[11px] font-mono">Stack: ${p.stack.join(', ')}</div>
              </div>
            `).join('')}
          </div>
        `);
        break;

      case 'contact':
        appendLine(`
          <div class="space-y-1 text-zinc-300">
            <div>Email: <a href="mailto:${profile.contact.email}" class="text-brand-lime underline">${profile.contact.email}</a></div>
            <div>GitHub: <a href="${profile.contact.github}" target="_blank" class="text-brand-cyan underline">${profile.contact.github}</a></div>
            <div>Instagram: <a href="${profile.contact.instagram}" target="_blank" class="text-brand-amber underline">${profile.contact.instagram}</a></div>
          </div>
        `);
        break;

      case 'indomie':
        sound.playSuccess();
        appendLine(`
          <div class="text-amber-300 font-mono">
            🍜 RESEP RAHASIA SISWA RPL:<br/>
            Indomie Goreng Double + Telur Setengah Matang + Kopi Susu Dingin = 200 baris kode tanpa error!
          </div>
        `);
        break;

      case 'matrix':
        sound.playSuccess();
        document.body.classList.toggle('matrix-active');
        const isMatrix = document.body.classList.contains('matrix-active');
        appendLine(`Matrix mode: <span class="text-green-400 font-bold">${isMatrix ? 'ENABLED 🟩' : 'DISABLED ⬛'}</span>`);
        break;

      case 'sudo hire':
      case 'hire':
        sound.playSuccess();
        confetti({
          particleCount: 100,
          spread: 90,
          origin: { y: 0.6 }
        });
        appendLine(`
          <div class="p-4 rounded-xl bg-brand-lime/10 border border-brand-lime/40 text-brand-lime space-y-1">
            <div class="font-bold text-sm">🎉 PERINTAH DITERIMA: ACCESS GRANTED!</div>
            <div>Terima kasih atas minat Anda untuk bekerja sama dengan Muhammad Almahdi!</div>
            <div class="text-white text-xs mt-1">Silakan langsung kirim pesan ke <a href="mailto:${profile.contact.email}" class="underline font-bold text-brand-lime">${profile.contact.email}</a> atau kontak WhatsApp.</div>
          </div>
        `);
        break;

      case 'clear':
        outputEl.innerHTML = '';
        break;

      default:
        sound.playClick();
        appendLine(`Perintah tidak dikenal: '<span class="text-red-300">${escapeHTML(cmd)}</span>'. Ketik <span class="text-brand-lime font-bold">help</span> untuk melihat daftar perintah.`, 'error');
        break;
    }
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  inputEl.addEventListener('keydown', (e) => {
    sound.playKey();
    if (e.key === 'Enter') {
      const val = inputEl.value;
      inputEl.value = '';
      handleCommand(val);
    } else if (e.key === 'ArrowUp') {
      if (history.length > 0 && historyIndex > 0) {
        historyIndex--;
        inputEl.value = history[historyIndex] || '';
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < history.length - 1) {
        historyIndex++;
        inputEl.value = history[historyIndex] || '';
      } else {
        historyIndex = history.length;
        inputEl.value = '';
      }
    }
  });

  submitBtn.addEventListener('click', () => {
    const val = inputEl.value;
    inputEl.value = '';
    handleCommand(val);
  });

  clearBtn.addEventListener('click', () => {
    sound.playClick();
    outputEl.innerHTML = '';
  });

  return section;
}

