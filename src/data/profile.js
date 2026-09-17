export const profile = {
  name: "Muhammad Almahdi",
  nickname: "Almahdi",
  role: "Siswa XI RPL SMKN 20 Jakarta • Laravel & Flutter Developer",
  school: {
    name: "SMKN 20 Jakarta",
    short: "SMK 20 Jakarta",
    grade: "Kelas 11 (XI RPL)",
    major: "Rekayasa Perangkat Lunak (RPL)",
    location: "Jakarta Selatan, DKI Jakarta",
    status: "Active Student • Angkatan 2024 - 2027"
  },
  personal: {
    birthDate: "2009-03-14",
    birthFormatted: "14 Maret 2009",
    age: 17,
    nationality: "Indonesia 🇮🇩",
    location: "Jakarta, Indonesia",
    timezone: "Asia/Jakarta (WIB • UTC+7)"
  },
  tagline: "Siswa SMK RPL yang fokus pada pengembangan aplikasi web Laravel, mobile app Flutter, serta perancangan sistem UI/UX di Figma dan Flowchart.",
  bio: "Halo! Saya Muhammad Almahdi, siswa kelas 11 Rekayasa Perangkat Lunak (RPL) di SMKN 20 Jakarta. Fokus keahlian saya berpusat pada pembuatan web backend menggunakan Laravel & MySQL, aplikasi mobile lintas platform dengan Flutter, serta pemodelan alur logika perangkat lunak menggunakan Flowchart dan prototyping antarmuka di Figma.",
  avatar: {
    defaultUrl: "/almahdi.jpg",
    caption: "M. ALMAHDI — XI RPL SMKN 20 Jakarta"
  },
  availability: {
    status: "Siap Magang / PKL Industri 2026 & Proyek Kolaborasi",
    badge: "Available 2026"
  },
  stats: [
    { label: "Pendidikan", value: "SMKN 20 JKT", desc: "Kelas 11 Rekayasa Perangkat Lunak" },
    { label: "Kelahiran", value: "14/03/2009", desc: "Jakarta (Usia 17 Tahun)" },
    { label: "Fokus Utama", value: "Laravel & Flutter", desc: "Web, Mobile, & Database" },
    { label: "Perancangan", value: "Figma & Flowchart", desc: "UI/UX & Logika Sistem" }
  ],
  skills: {
    core: [
      { name: "Laravel (PHP)", level: "Backend Framework", icon: "server", color: "border-red-500/30 text-red-300" },
      { name: "Flutter (Dart)", level: "Mobile App Development", icon: "smartphone", color: "border-cyan-500/30 text-cyan-300" },
      { name: "Figma", level: "UI/UX Design & Prototyping", icon: "figma", color: "border-purple-500/30 text-purple-300" },
      { name: "Flowchart & UML", level: "Pemodelan Logika Sistem RPL", icon: "git-merge", color: "border-amber-500/30 text-amber-300" },
      { name: "MySQL & Database", level: "Relational Database", icon: "database", color: "border-blue-500/30 text-blue-300" },
      { name: "Git & GitHub", level: "Version Control", icon: "git-branch", color: "border-zinc-500/30 text-zinc-300" }
    ]
  },
  projects: [
    {
      id: "laravel-project",
      title: "Sistem Informasi Web Laravel",
      category: "Web & Backend",
      tagline: "Aplikasi web berbasis framework Laravel dengan manajemen database relasional MySQL & arsitektur MVC.",
      description: "Proyek pengembangan aplikasi web menggunakan framework Laravel yang menerapkan konsep MVC (Model-View-Controller), autentikasi multi-role, operasi CRUD data, validasi form, dan pengelolaan database relasional MySQL.",
      impact: "Membangun sistem backend yang terstruktur, aman, dan siap diintegrasikan dengan database sekolah atau operasional.",
      stack: ["Laravel", "PHP", "MySQL", "Blade Engine", "Tailwind CSS"],
      stats: { architecture: "MVC Pattern", database: "MySQL Relational" },
      github: "https://github.com/almahdi/laravel-project",
      hasGithub: true,
      featured: true,
      accent: "#ef4444"
    },
    {
      id: "flutter-project",
      title: "Aplikasi Mobile Flutter",
      category: "Mobile App",
      tagline: "Aplikasi mobile lintas platform (Android/iOS) dengan antarmuka modern & konsumsi data API.",
      description: "Aplikasi perangkat bergerak yang dibangun menggunakan Flutter dan bahasa pemrograman Dart. Mengimplementasikan state management yang rapi, navigasi responsif, serta integrasi RESTful API untuk pertukaran data secara dinamis.",
      impact: "Menghasilkan aplikasi mobile yang mulus dengan performa 60 FPS dan antarmuka ramah pengguna pada berbagai ukuran layar.",
      stack: ["Flutter", "Dart", "REST API", "Material UI", "State Management"],
      stats: { platform: "Android & iOS", engine: "Flutter 3.x" },
      github: "https://github.com/almahdi/flutter-project",
      hasGithub: true,
      featured: true,
      accent: "#38bdf8"
    },
    {
      id: "portfolio-web",
      title: "Almahdi Portfolio & Bento Lab (Web Ini)",
      category: "Creative Web",
      tagline: "Website portofolio interaktif pribadi dengan tactile micro-interactions, Web Audio SFX, dan live analytics guns.lol.",
      description: "Proyek website portofolio yang sedang Anda jelajahi saat ini! Dibangun secara modular dari nol menggunakan Vite, Tailwind CSS, dan Vanilla JavaScript. Dilengkapi fitur custom magnetic cursor, synthesizer audio prosedural tanpa file eksternal, terminal CLI interaktif, dan pelacak pengunjung real-time ala guns.lol.",
      impact: "Membangun personal branding otentik siswa kelas 11 RPL SMKN 20 Jakarta yang mematahkan stereotip template generik buatan AI.",
      stack: ["Vite", "Tailwind CSS", "JavaScript (ES6+)", "Web Audio API", "Guns.lol Tracker"],
      stats: { responseTime: "60 FPS Smooth", bundleSize: "<85 kB Gzip" },
      github: "https://github.com/almahdi/almahdi-portfolio",
      hasGithub: true,
      featured: true,
      accent: "#c2fb38"
    },
    {
      id: "figma-flowchart-design",
      title: "Desain UI/UX Figma & Flowchart Sistem",
      category: "UI/UX & Modeling",
      tagline: "Perancangan wireframe interaktif, komponen design system di Figma, dan pemodelan alur logika flowchart RPL.",
      description: "Rangkaian perancangan antarmuka visual (UI/UX) di Figma mulai dari user flow, wireframe low-fidelity hingga prototipe high-fidelity interaktif. Dilengkapi dengan diagram flowchart terstruktur dan dokumentasi alur logika sistem sebelum tahap koding dimulai.",
      impact: "Memastikan arsitektur sistem dan antarmuka pengguna telah teruji alurnya sebelum diimplementasikan ke dalam kode Laravel atau Flutter.",
      stack: ["Figma", "Flowchart", "UI/UX Prototyping", "Design System", "UML Diagram"],
      stats: { deliverables: "Interactive Prototype & System Diagram", method: "User-Centered Design" },
      github: null,
      hasGithub: false,
      featured: true,
      accent: "#a855f7"
    }
  ],
  timeline: [
    {
      year: "2026 (Sekarang)",
      title: "Kelas 11 (XI RPL) — SMKN 20 Jakarta",
      role: "Siswa Aktif Rekayasa Perangkat Lunak",
      desc: "Mendalami framework Laravel, pengembangan mobile Flutter, perancangan antarmuka Figma, pemodelan flowchart logika sistem, dan persiapan PKL / Magang Industri."
    },
    {
      year: "2025",
      title: "Eksplorasi Mobile & Prototyping",
      role: "Siswa RPL SMKN 20 Jakarta",
      desc: "Mulai mempelajari Flutter & Dart untuk mobile app, membuat wireframe dan prototipe aplikasi di Figma, serta merancang diagram flowchart alur data."
    },
    {
      year: "2024 - 2025",
      title: "Masuk SMKN 20 Jakarta (Kelas 10 RPL)",
      role: "Fondasi Rekayasa Perangkat Lunak",
      desc: "Mempelajari logika dasar pemrograman, konsep OOP (Object-Oriented Programming), dasar HTML, CSS, PHP native, dan database MySQL."
    }
  ],
  contact: {
    email: "almahdi.dev20@gmail.com",
    whatsapp: "+6281234567890",
    github: "https://github.com/almahdi",
    instagram: "https://instagram.com/almahdi.code",
    linkedin: "https://linkedin.com/in/muhammad-almahdi",
    schoolWeb: "https://smkn20jakarta.sch.id"
  }
};
