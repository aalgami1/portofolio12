import { profile } from '../data/profile.js';
import { sound } from '../utils/audio.js';
import { analytics } from '../utils/analytics.js';
import confetti from 'canvas-confetti';

export function renderContact() {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'py-20 px-4 sm:px-8 max-w-7xl mx-auto';

  section.innerHTML = `
    <!-- Contact Container Card -->
    <div class="bento-card p-8 sm:p-12 relative overflow-hidden bg-gradient-to-b from-[#131522] to-[#090b10] border-white/10 hover:border-brand-lime/40">
      
      <!-- Top Ambient Glow -->
      <div class="absolute top-0 right-0 w-80 h-80 bg-brand-lime/10 blur-[100px] pointer-events-none"></div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <!-- Left Column: Big Pitch (7 cols) -->
        <div class="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 font-mono text-xs text-brand-lime mb-3">
              <span>// 05</span>
              <span>GET IN TOUCH</span>
            </div>

            <h2 class="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-6 leading-tight">
              Punya ide proyek menarik atau ingin berkolaborasi?
            </h2>

            <p class="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              Saya selalu terbuka untuk diskusi proyek freelance, peluang magang/PKL industri untuk siswa SMK RPL, atau sekadar bertukar pikiran seputar web development modern.
            </p>
          </div>

          <!-- Quick Copy Email Button -->
          <div class="space-y-4">
            <div class="text-xs font-mono text-zinc-400">Hubungi Langsung Melalui Email:</div>
            <div class="flex flex-wrap items-center gap-3">
              <button 
                id="contact-copy-email-btn"
                class="px-5 py-3.5 rounded-xl bg-brand-lime text-black font-display font-bold text-sm hover:bg-[#d6ff47] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-brand-lime/15 flex items-center gap-2.5"
              >
                <span id="contact-copy-icon">📋</span>
                <span id="contact-copy-text">Salin Email: ${profile.contact.email}</span>
              </button>

              <a 
                href="mailto:${profile.contact.email}"
                class="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs transition-all flex items-center gap-2"
              >
                <span>Buka Mail Client</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Column: Interactive Quick Message Simulator & Socials (5 cols) -->
        <div class="lg:col-span-5 flex flex-col justify-between space-y-6">
          
          <!-- Message Form Simulator -->
          <div class="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
            <div class="flex items-center justify-between font-mono text-xs text-zinc-400">
              <span class="text-white font-semibold">Tinggalkan Pesan Kilat</span>
              <span class="text-brand-lime font-mono">Form Aktif</span>
            </div>

            <div class="space-y-3">
              <div>
                <input 
                  type="text" 
                  id="msg-sender" 
                  placeholder="Nama atau Organisasi Anda" 
                  class="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-500 text-xs focus:outline-none focus:border-brand-lime transition-colors"
                />
              </div>
              <div>
                <textarea 
                  id="msg-body" 
                  rows="3" 
                  placeholder="Ceritakan singkat kebutuhan atau ajakan diskusi Anda..." 
                  class="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-500 text-xs focus:outline-none focus:border-brand-lime transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                id="msg-send-btn" 
                class="w-full py-2.5 rounded-xl bg-white/10 hover:bg-brand-lime hover:text-black text-white font-mono text-xs font-semibold border border-white/10 hover:border-transparent transition-all"
              >
                Kirim Pesan ke Almahdi 🚀
              </button>
            </div>
            <div id="msg-feedback" class="text-[11px] font-mono text-brand-lime hidden">
              ✓ Pesan tersiapkan! Membuka pesan langsung...
            </div>
          </div>

          <!-- Social Links Matrix dengan Guns.lol Click Counters -->
          <div>
            <div class="flex items-center justify-between font-mono text-[11px] text-zinc-400 mb-2.5">
              <span>Media Sosial & Profil:</span>
              <span class="text-[10px] text-brand-lime">LIVE CLICKS</span>
            </div>
            <div class="grid grid-cols-3 gap-2.5 font-mono text-xs">
              <a 
                href="${profile.contact.github}" 
                target="_blank" 
                data-track="github"
                class="social-track-link p-3 rounded-xl bg-white/[0.03] hover:bg-white/10 border border-white/5 hover:border-brand-lime/30 flex flex-col items-center justify-center gap-1 text-center text-zinc-300 hover:text-white transition-all group"
              >
                <div class="font-bold flex items-center gap-1">GitHub <span>↗</span></div>
                <span class="text-[10px] text-brand-lime font-mono" id="track-github">
                  ${analytics.getClickCount('github')} klik
                </span>
              </a>

              <a 
                href="${profile.contact.instagram}" 
                target="_blank" 
                data-track="instagram"
                class="social-track-link p-3 rounded-xl bg-white/[0.03] hover:bg-white/10 border border-white/5 hover:border-brand-amber/30 flex flex-col items-center justify-center gap-1 text-center text-zinc-300 hover:text-white transition-all group"
              >
                <div class="font-bold flex items-center gap-1">Instagram <span>↗</span></div>
                <span class="text-[10px] text-brand-amber font-mono" id="track-instagram">
                  ${analytics.getClickCount('instagram')} klik
                </span>
              </a>

              <a 
                href="${profile.contact.linkedin}" 
                target="_blank" 
                data-track="linkedin"
                class="social-track-link p-3 rounded-xl bg-white/[0.03] hover:bg-white/10 border border-white/5 hover:border-brand-cyan/30 flex flex-col items-center justify-center gap-1 text-center text-zinc-300 hover:text-white transition-all group"
              >
                <div class="font-bold flex items-center gap-1">LinkedIn <span>↗</span></div>
                <span class="text-[10px] text-brand-cyan font-mono" id="track-linkedin">
                  ${analytics.getClickCount('linkedin')} klik
                </span>
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>

    <!-- Clean Editorial Footer -->
    <footer class="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-zinc-400 font-mono text-xs gap-4">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-brand-lime"></span>
        <span>© 2026 ${profile.name} — SMKN 20 Jakarta (XI RPL)</span>
      </div>
      <div class="text-zinc-500 text-[11px]">
        Dirakit tanpa template AI generik • 60 FPS • Web Audio Synthesized
      </div>
    </footer>
  `;

  // Attach Event Handlers
  const copyBtn = section.querySelector('#contact-copy-email-btn');
  const copyIcon = section.querySelector('#contact-copy-icon');
  const copyText = section.querySelector('#contact-copy-text');

  copyBtn.addEventListener('click', () => {
    analytics.incrementClick('email');
    sound.playSuccess();
    navigator.clipboard.writeText(profile.contact.email).then(() => {
      copyText.textContent = "Alamat Email Tersalin! ✓";
      copyIcon.textContent = "✨";

      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 }
      });

      setTimeout(() => {
        copyText.textContent = `Salin Email: ${profile.contact.email}`;
        copyIcon.textContent = "📋";
      }, 3000);
    });
  });

  // Message sender
  const sendBtn = section.querySelector('#msg-send-btn');
  const senderInput = section.querySelector('#msg-sender');
  const bodyInput = section.querySelector('#msg-body');
  const feedback = section.querySelector('#msg-feedback');

  sendBtn.addEventListener('click', () => {
    const sender = senderInput.value.trim();
    const body = bodyInput.value.trim();

    if (!body) {
      sound.playClick();
      bodyInput.focus();
      return;
    }

    sound.playSuccess();
    feedback.classList.remove('hidden');
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.7 }
    });

    const mailto = `mailto:${profile.contact.email}?subject=Kolaborasi dari ${encodeURIComponent(sender || 'Pengunjung Portofolio')}&body=${encodeURIComponent(body)}`;
    setTimeout(() => {
      window.open(mailto, '_blank');
      feedback.classList.add('hidden');
      senderInput.value = '';
      bodyInput.value = '';
    }, 1200);
  });

  // Tracking klik sosial media (Guns.lol style)
  section.querySelectorAll('.social-track-link').forEach(link => {
    link.addEventListener('click', () => {
      const trackId = link.dataset.track;
      if (trackId) {
        const newCount = analytics.incrementClick(trackId);
        const badge = link.querySelector(`#track-${trackId}`);
        if (badge) {
          badge.textContent = `${newCount} klik`;
          badge.classList.add('scale-125', 'font-bold');
          setTimeout(() => badge.classList.remove('scale-125', 'font-bold'), 300);
        }
      }
    });
  });

  section.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => sound.playHover());
  });

  return section;
}

