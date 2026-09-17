# Portofolio Muhammad Almahdi — Siswa XI RPL SMKN 20 Jakarta

Portofolio web interaktif berkarakter tinggi (*high-end editorial & tactile bento lab*) yang dibangun khusus untuk menampilkan karya, profil, dan keahlian siswa Rekayasa Perangkat Lunak (RPL) tanpa tampilan generik buatan AI.

---

## ⚡ Fitur Utama yang Gokil & Unik:
1. **Editorial Aesthetics & Noise Grain**: Tampilan visual tajam dengan tipografi *Syne* + *JetBrains Mono*, tekstur film halus (*SVG noise*), dan layout Bento Grid asimetris.
2. **Interactive Photo Frame**: Slot foto siswa dengan crop-marks teknis dan tombol **"Pasang / Ganti Foto Saya"** yang bisa langsung mengunggah foto asli Anda dari browser dan tersimpan otomatis di *localStorage*.
3. **Synthetic Web Audio SFX Engine**: Efek suara tactile switch, hover blip, dan chime sukses yang disintesis langsung menggunakan Web Audio API (tanpa loading file audio eksternal, latensi 0ms, dan tombol mute di navbar).
4. **Draggable Badges**: Stiker interaktif ("Indomie + Kopi 100% Fuel", "SMKN 20 Jakarta") yang bisa digeser dengan mouse/sentuhan.
5. **Interactive Terminal CLI**: Mini terminal bawaan di mana pengunjung bisa mengetik perintah (`help`, `bio`, `school`, `skills`, `projects`, `matrix`, `indomie`, `sudo hire`).
6. **Command Palette (`⌘K` / `Ctrl+K`)**: Modal pencarian cepat bergaya Mac Spotlight untuk navigasi kilat ke section, salin email, dan toggle audio/matrix mode.
7. **Filter & Case Study Modal**: Showcase proyek RPL dengan dialog studi kasus (Latar Belakang, Dampak Terukur, dan Tech Stack).
8. **Real-time Jakarta Clock**: Indikator jam real-time WIB (UTC+7) di navbar.
9. **Magnetic Cursor**: Kursor dinamis yang membesar dan merespons tombol/link interaktif secara mulus.

---

## 🚀 Cara Menjalankan di Komputer:

### 1. Menjalankan Mode Development:
Buka terminal di folder ini (`c:\Users\Administrator\Downloads\web`) lalu jalankan:
```bash
npm run dev
```
Buka link yang muncul di terminal (biasanya `http://localhost:5173`) di browser Anda.

### 2. Build untuk Deploy (Vercel / Netlify / GitHub Pages):
```bash
npm run build
```
Folder `dist/` siap langsung di-deploy ke hosting statis manapun secara gratis.

---

## 📝 Cara Mengubah Data & Menaruh Foto Anda:
1. **Mengubah Bio, Link Proyek, atau Kontak:**
   - Buka file [`src/data/profile.js`](file:///c:/Users/Administrator/Downloads/web/src/data/profile.js).
   - Di file tersebut, Anda bisa mengganti nomor WhatsApp, akun Instagram, link GitHub, atau menambahkan proyek baru.
2. **Memasang Foto Asli Anda:**
   - **Cara 1 (Langsung di web):** Buka portofolio di browser, lalu di kartu profil Hero klik tombol **"Pasang / Ganti Foto Saya"** dan pilih file foto Anda dari komputer/HP.
   - **Cara 2 (Permanen di file):** Taruh file foto Anda (misal `foto-almahdi.jpg`) di dalam folder `public/`, lalu ubah `defaultUrl` di [`src/data/profile.js`](file:///c:/Users/Administrator/Downloads/web/src/data/profile.js) menjadi `"/foto-almahdi.jpg"`.

---

## 🔍 Cara Mendaftarkan Website ke Google Search Console (Agar Muncul di Pencarian Google):

Website ini sudah dilengkapi konfigurasi SEO lengkap (**Schema.org JSON-LD**, **Open Graph**, **Meta Keywords**, **robots.txt**, dan **sitemap.xml**).

Setelah website Anda dideploy online (misalnya di Vercel, Netlify, atau domain sendiri):

1. **Buka Google Search Console:**
   - Kunjungi [https://search.google.com/search-console](https://search.google.com/search-console) lalu login dengan akun Google Anda.
2. **Tambahkan Properti (Add Property):**
   - Masukkan link URL website Anda (contoh: `https://muhammadalmahdi.dev` atau `https://almahdi.vercel.app`) di kolom **URL prefix**.
3. **Pilih Metode Verifikasi "HTML Tag":**
   - Google akan memberikan sebaris kode tag, contohnya:
     ```html
     <meta name="google-site-verification" content="abcdef12345xyz..." />
     ```
   - Salin kode tersebut dan buka file [`index.html`](file:///c:/Users/Administrator/Downloads/web/index.html) baris 17:
     ```html
     <meta name="google-site-verification" content="MASUKKAN_KODE_DARI_GOOGLE_DI_SINI" />
     ```
   - Simpan file, lalu deploy / build ulang (`npm run build`).
4. **Klik "Verify" di Google Search Console:**
   - Google akan mendeteksi tag tersebut dan status website Anda langsung terverifikasi (*Verified*).
5. **Kirimkan Sitemap:**
   - Di menu sebelah kiri Google Search Console, klik menu **Sitemaps**.
   - Masukkan `sitemap.xml` lalu klik **Submit**.
   - Googlebot akan mulai merayapi (*crawling*) dan mengindeks website Anda sehingga ketika orang mencari *"Muhammad Almahdi SMKN 20 Jakarta"*, nama dan portofolio Anda langsung muncul di Google!

