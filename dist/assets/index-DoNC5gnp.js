(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))b(d);new MutationObserver(d=>{for(const o of d)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&b(u)}).observe(document,{childList:!0,subtree:!0});function i(d){const o={};return d.integrity&&(o.integrity=d.integrity),d.referrerPolicy&&(o.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?o.credentials="include":d.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function b(d){if(d.ep)return;d.ep=!0;const o=i(d);fetch(d.href,o)}})();const m={name:"Muhammad Almahdi",nickname:"Almahdi",school:{name:"SMKN 20 Jakarta",short:"SMK 20 Jakarta",grade:"Kelas 11 (XI RPL)",major:"Rekayasa Perangkat Lunak (RPL)",location:"Jakarta Selatan, DKI Jakarta"},personal:{birthFormatted:"14 Maret 2009",age:17,location:"Jakarta, Indonesia"},tagline:"Siswa SMK RPL yang fokus pada pengembangan aplikasi web Laravel, mobile app Flutter, serta perancangan sistem UI/UX di Figma dan Flowchart.",bio:"Halo! Saya Muhammad Almahdi, siswa kelas 11 Rekayasa Perangkat Lunak (RPL) di SMKN 20 Jakarta. Fokus keahlian saya berpusat pada pembuatan web backend menggunakan Laravel & MySQL, aplikasi mobile lintas platform dengan Flutter, serta pemodelan alur logika perangkat lunak menggunakan Flowchart dan prototyping antarmuka di Figma.",avatar:{defaultUrl:"/almahdi.jpg"},projects:[{id:"laravel-project",title:"Sistem Informasi Web Laravel",category:"Web & Backend",tagline:"Aplikasi web berbasis framework Laravel dengan manajemen database relasional MySQL & arsitektur MVC.",description:"Proyek pengembangan aplikasi web menggunakan framework Laravel yang menerapkan konsep MVC (Model-View-Controller), autentikasi multi-role, operasi CRUD data, validasi form, dan pengelolaan database relasional MySQL.",impact:"Membangun sistem backend yang terstruktur, aman, dan siap diintegrasikan dengan database sekolah atau operasional.",stack:["Laravel","PHP","MySQL","Blade Engine","Tailwind CSS"],stats:{architecture:"MVC Pattern",database:"MySQL Relational"},github:"https://github.com/almahdi/laravel-project",hasGithub:!0,featured:!0,accent:"#ef4444"},{id:"flutter-project",title:"Aplikasi Mobile Flutter",category:"Mobile App",tagline:"Aplikasi mobile lintas platform (Android/iOS) dengan antarmuka modern & konsumsi data API.",description:"Aplikasi perangkat bergerak yang dibangun menggunakan Flutter dan bahasa pemrograman Dart. Mengimplementasikan state management yang rapi, navigasi responsif, serta integrasi RESTful API untuk pertukaran data secara dinamis.",impact:"Menghasilkan aplikasi mobile yang mulus dengan performa 60 FPS dan antarmuka ramah pengguna pada berbagai ukuran layar.",stack:["Flutter","Dart","REST API","Material UI","State Management"],stats:{platform:"Android & iOS",engine:"Flutter 3.x"},github:"https://github.com/almahdi/flutter-project",hasGithub:!0,featured:!0,accent:"#38bdf8"},{id:"figma-flowchart-design",title:"Desain UI/UX Figma & Flowchart Sistem",category:"UI/UX & Modeling",tagline:"Perancangan wireframe interaktif, komponen design system di Figma, dan pemodelan alur logika flowchart RPL.",description:"Rangkaian perancangan antarmuka visual (UI/UX) di Figma mulai dari user flow, wireframe low-fidelity hingga prototipe high-fidelity interaktif. Dilengkapi dengan diagram flowchart terstruktur dan dokumentasi alur logika sistem sebelum tahap koding dimulai.",impact:"Memastikan arsitektur sistem dan antarmuka pengguna telah teruji alurnya sebelum diimplementasikan ke dalam kode Laravel atau Flutter.",stack:["Figma","Flowchart","UI/UX Prototyping","Design System","UML Diagram"],stats:{deliverables:"Interactive Prototype & System Diagram",method:"User-Centered Design"},github:null,hasGithub:!1,featured:!0,accent:"#c2fb38"}],timeline:[{year:"2026 (Sekarang)",title:"Kelas 11 (XI RPL) — SMKN 20 Jakarta",role:"Siswa Aktif Rekayasa Perangkat Lunak",desc:"Mendalami framework Laravel, pengembangan mobile Flutter, perancangan antarmuka Figma, pemodelan flowchart logika sistem, dan persiapan PKL / Magang Industri."},{year:"2025",title:"Eksplorasi Mobile & Prototyping",role:"Siswa RPL SMKN 20 Jakarta",desc:"Mulai mempelajari Flutter & Dart untuk mobile app, membuat wireframe dan prototipe aplikasi di Figma, serta merancang diagram flowchart alur data."},{year:"2024 - 2025",title:"Masuk SMKN 20 Jakarta (Kelas 10 RPL)",role:"Fondasi Rekayasa Perangkat Lunak",desc:"Mempelajari logika dasar pemrograman, konsep OOP (Object-Oriented Programming), dasar HTML, CSS, PHP native, dan database MySQL."}],contact:{email:"almahdi.dev20@gmail.com",github:"https://github.com/almahdi",instagram:"https://instagram.com/almahdi.code",linkedin:"https://linkedin.com/in/muhammad-almahdi"}};class ye{constructor(){this.ctx=null,this.muted=localStorage.getItem("almahdi_sfx_muted")==="true",this.initialized=!1}init(){if(!this.initialized&&typeof window<"u"){const a=window.AudioContext||window.webkitAudioContext;a&&(this.ctx=new a,this.initialized=!0)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,localStorage.setItem("almahdi_sfx_muted",this.muted),this.muted}isMuted(){return this.muted}playClick(){if(this.muted||(this.init(),!this.ctx))return;const a=this.ctx.createOscillator(),i=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(420,this.ctx.currentTime),a.frequency.exponentialRampToValueAtTime(80,this.ctx.currentTime+.04),i.gain.setValueAtTime(.12,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.04),a.connect(i),i.connect(this.ctx.destination),a.start(),a.stop(this.ctx.currentTime+.04)}playHover(){if(this.muted||(this.init(),!this.ctx))return;const a=this.ctx.createOscillator(),i=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(880,this.ctx.currentTime),a.frequency.exponentialRampToValueAtTime(1200,this.ctx.currentTime+.025),i.gain.setValueAtTime(.025,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.025),a.connect(i),i.connect(this.ctx.destination),a.start(),a.stop(this.ctx.currentTime+.025)}playSuccess(){if(this.muted||(this.init(),!this.ctx))return;[523.25,659.25,783.99,1046.5].forEach((i,b)=>{const d=this.ctx.createOscillator(),o=this.ctx.createGain(),u=this.ctx.currentTime+b*.06;d.type="sine",d.frequency.setValueAtTime(i,u),o.gain.setValueAtTime(.08,u),o.gain.exponentialRampToValueAtTime(.001,u+.15),d.connect(o),o.connect(this.ctx.destination),d.start(u),d.stop(u+.15)})}playKey(){if(this.muted||(this.init(),!this.ctx))return;const a=this.ctx.createOscillator(),i=this.ctx.createGain(),b=550+Math.random()*150;a.type="square",a.frequency.setValueAtTime(b,this.ctx.currentTime),i.gain.setValueAtTime(.02,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.02),a.connect(i),i.connect(this.ctx.destination),a.start(),a.stop(this.ctx.currentTime+.02)}}const L=new ye;class ke{constructor(){this.storageKeyViews="almahdi_views_real",this.storageKeyClicks="almahdi_clicks_real",this.baseViews=0,this.baseClicks={github:0,instagram:0,linkedin:0,email:0,"laravel-project":0,"flutter-project":0},this.init()}init(){let a=parseInt(localStorage.getItem(this.storageKeyViews),10);(isNaN(a)||a<0)&&(a=0),a+=1,localStorage.setItem(this.storageKeyViews,a.toString());let i=this.getClicksMap(),b=!1;for(const[d,o]of Object.entries(this.baseClicks))i[d]===void 0&&(i[d]=o,b=!0);b&&localStorage.setItem(this.storageKeyClicks,JSON.stringify(i))}getViews(){return parseInt(localStorage.getItem(this.storageKeyViews),10)||1}getClicksMap(){try{const a=localStorage.getItem(this.storageKeyClicks);return a?JSON.parse(a):{...this.baseClicks}}catch{return{...this.baseClicks}}}getClickCount(a){const i=this.getClicksMap();return i[a]!==void 0?i[a]:0}getTotalClicks(){const a=this.getClicksMap();return Object.values(a).reduce((i,b)=>i+(parseInt(b,10)||0),0)}incrementClick(a){const i=this.getClicksMap();return i[a]=(i[a]||0)+1,localStorage.setItem(this.storageKeyClicks,JSON.stringify(i)),this.notifyUpdate(),i[a]}formatNumber(a){return a>=1e6?(a/1e6).toFixed(1)+"M":a>=1e3?(a/1e3).toFixed(1)+"k":(a||0).toString()}notifyUpdate(){window.dispatchEvent(new CustomEvent("analytics_updated"))}}const P=new ke;function Se(){const n=document.createElement("header");n.className="sticky top-4 z-50 w-full px-4 sm:px-8 max-w-7xl mx-auto pointer-events-auto",n.innerHTML=`
    <div class="backdrop-blur-xl bg-[#0e1017]/80 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between shadow-2xl transition-all duration-300 hover:border-brand-lime/30">
      
      <!-- Brand & School Pill -->
      <a href="#" class="flex items-center gap-3 group" id="brand-link">
        <div class="w-8 h-8 rounded-lg bg-brand-lime/10 border border-brand-lime/40 flex items-center justify-center font-display font-bold text-brand-lime text-sm group-hover:scale-105 transition-transform">
          MA
        </div>
        <div class="flex flex-col">
          <span class="font-display font-bold text-sm tracking-tight text-white group-hover:text-brand-lime transition-colors flex items-center gap-1.5">
            ${m.name}
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          </span>
          <span class="font-mono text-[10px] text-zinc-400">
            ${m.school.grade} • ${m.school.short}
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
          <span id="nav-views-count" class="text-white font-semibold">${P.formatNumber(P.getViews())}</span>
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
  `;function a(){const u=n.querySelector("#live-jkt-clock");if(!u)return;const x=new Date,r={timeZone:"Asia/Jakarta",hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"},k=new Intl.DateTimeFormat("id-ID",r).format(x);u.textContent=`JKT ${k} WIB`}setInterval(a,1e3),a();const i=n.querySelector("#sound-toggle-btn"),b=n.querySelectorAll(".sound-bar");function d(){L.isMuted()?(b.forEach(x=>{x.classList.remove("bg-brand-lime"),x.classList.add("bg-zinc-600"),x.style.height="2px"}),i.title="Suara Nonaktif (Klik untuk aktifkan)"):(b.forEach((x,r)=>{x.classList.add("bg-brand-lime"),x.classList.remove("bg-zinc-600"),x.style.height=r===1?"12px":r===0?"8px":"6px"}),i.title="Suara Aktif (Klik untuk nonaktifkan)")}i.addEventListener("click",()=>{L.toggleMute(),L.isMuted()||L.playSuccess(),d()}),d();const o=n.querySelector("#nav-views-count");return window.addEventListener("analytics_updated",()=>{o&&(o.textContent=P.formatNumber(P.getViews()))}),n}var Q={};(function n(a,i,b,d){var o=!!(a.Worker&&a.Blob&&a.Promise&&a.OffscreenCanvas&&a.OffscreenCanvasRenderingContext2D&&a.HTMLCanvasElement&&a.HTMLCanvasElement.prototype.transferControlToOffscreen&&a.URL&&a.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",x=(function(){if(!a.OffscreenCanvas)return!1;try{var t=new OffscreenCanvas(1,1),e=t.getContext("2d");e.fillRect(0,0,1,1);var l=t.transferToImageBitmap();e.createPattern(l,"no-repeat")}catch{return!1}return!0})();function r(){}function k(t){var e=i.exports.Promise,l=e!==void 0?e:a.Promise;return typeof l=="function"?new l(t):(t(r,r),null)}var S=(function(t,e){return{transform:function(l){if(t)return l;if(e.has(l))return e.get(l);var p=new OffscreenCanvas(l.width,l.height),h=p.getContext("2d");return h.drawImage(l,0,0),e.set(l,p),p},clear:function(){e.clear()}}})(x,new Map),s=(function(){var t=Math.floor(16.666666666666668),e,l,p={},h=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(v){var w=Math.random();return p[w]=requestAnimationFrame(function c(y){h===y||h+t-1<y?(h=y,delete p[w],v()):p[w]=requestAnimationFrame(c)}),w},l=function(v){p[v]&&cancelAnimationFrame(p[v])}):(e=function(v){return setTimeout(v,t)},l=function(v){return clearTimeout(v)}),{frame:e,cancel:l}})(),f=(function(){var t,e,l={};function p(h){function v(w,c){h.postMessage({options:w||{},callback:c})}h.init=function(c){var y=c.transferControlToOffscreen();h.postMessage({canvas:y},[y])},h.fire=function(c,y,C){if(e)return v(c,null),e;var A=Math.random().toString(36).slice(2);return e=k(function(T){function I(z){z.data.callback===A&&(delete l[A],h.removeEventListener("message",I),e=null,S.clear(),C(),T())}h.addEventListener("message",I),v(c,A),l[A]=I.bind(null,{data:{callback:A}})}),e},h.reset=function(){h.postMessage({reset:!0});for(var c in l)l[c](),delete l[c]}}return function(){if(t)return t;if(!b&&o){var h=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([h])))}catch(v){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",v),null}p(t)}return t}})(),g={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function j(t,e){return e?e(t):t}function B(t){return t!=null}function E(t,e,l){return j(t&&B(t[e])?t[e]:g[e],l)}function U(t){return t<0?0:Math.floor(t)}function q(t,e){return Math.floor(Math.random()*(e-t))+t}function O(t){return parseInt(t,16)}function H(t){return t.map(G)}function G(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:O(e.substring(0,2)),g:O(e.substring(2,4)),b:O(e.substring(4,6))}}function J(t){var e=E(t,"origin",Object);return e.x=E(e,"x",Number),e.y=E(e,"y",Number),e}function W(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function X(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function re(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}function se(t,e,l,p,h,v,w,c,y){t.save(),t.translate(e,l),t.rotate(v),t.scale(p,h),t.arc(0,0,1,w,c,y),t.restore()}function oe(t){var e=t.angle*(Math.PI/180),l=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:t.startVelocity*.5+Math.random()*t.startVelocity,angle2D:-e+(.5*l-Math.random()*l),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:t.gravity*3,ovalScalar:.6,scalar:t.scalar,flat:t.flat}}function le(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var l=e.tick++/e.totalTicks,p=e.x+e.random*e.tiltCos,h=e.y+e.random*e.tiltSin,v=e.wobbleX+e.random*e.tiltCos,w=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-l)+")",t.beginPath(),u&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))t.fill(ce(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(v-p)*.1,Math.abs(w-h)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var c=Math.PI/10*e.wobble,y=Math.abs(v-p)*.1,C=Math.abs(w-h)*.1,A=e.shape.bitmap.width*e.scalar,T=e.shape.bitmap.height*e.scalar,I=new DOMMatrix([Math.cos(c)*y,Math.sin(c)*y,-Math.sin(c)*C,Math.cos(c)*C,e.x,e.y]);I.multiplySelf(new DOMMatrix(e.shape.matrix));var z=t.createPattern(S.transform(e.shape.bitmap),"no-repeat");z.setTransform(I),t.globalAlpha=1-l,t.fillStyle=z,t.fillRect(e.x-A/2,e.y-T/2,A,T),t.globalAlpha=1}else if(e.shape==="circle")t.ellipse?t.ellipse(e.x,e.y,Math.abs(v-p)*e.ovalScalar,Math.abs(w-h)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):se(t,e.x,e.y,Math.abs(v-p)*e.ovalScalar,Math.abs(w-h)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var M=Math.PI/2*3,$=4*e.scalar,F=8*e.scalar,R=e.x,N=e.y,D=5,K=Math.PI/D;D--;)R=e.x+Math.cos(M)*F,N=e.y+Math.sin(M)*F,t.lineTo(R,N),M+=K,R=e.x+Math.cos(M)*$,N=e.y+Math.sin(M)*$,t.lineTo(R,N),M+=K;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(h)),t.lineTo(Math.floor(v),Math.floor(w)),t.lineTo(Math.floor(p),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}function de(t,e,l,p,h){var v=e.slice(),w=t.getContext("2d"),c,y,C=k(function(A){function T(){c=y=null,w.clearRect(0,0,p.width,p.height),S.clear(),h(),A()}function I(){b&&!(p.width===d.width&&p.height===d.height)&&(p.width=t.width=d.width,p.height=t.height=d.height),!p.width&&!p.height&&(l(t),p.width=t.width,p.height=t.height),w.clearRect(0,0,p.width,p.height),v=v.filter(function(z){return le(w,z)}),v.length?c=s.frame(I):T()}c=s.frame(I),y=T});return{addFettis:function(A){return v=v.concat(A),C},canvas:t,promise:C,reset:function(){c&&s.cancel(c),y&&y()}}}function Z(t,e){var l=!t,p=!!E(e||{},"resize"),h=!1,v=E(e,"disableForReducedMotion",Boolean),w=o&&!!E(e||{},"useWorker"),c=w?f():null,y=l?W:X,C=t&&c?!!t.__confetti_initialized:!1,A=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,T;function I(M,$,F){for(var R=E(M,"particleCount",U),N=E(M,"angle",Number),D=E(M,"spread",Number),K=E(M,"startVelocity",Number),ue=E(M,"decay",Number),be=E(M,"gravity",Number),xe=E(M,"drift",Number),te=E(M,"colors",H),ge=E(M,"ticks",Number),ae=E(M,"shapes"),he=E(M,"scalar"),fe=!!E(M,"flat"),ne=J(M),ie=R,Y=[],ve=t.width*ne.x,we=t.height*ne.y;ie--;)Y.push(oe({x:ve,y:we,angle:N,spread:D,startVelocity:K,color:te[ie%te.length],shape:ae[q(0,ae.length)],ticks:ge,decay:ue,gravity:be,drift:xe,scalar:he,flat:fe}));return T?T.addFettis(Y):(T=de(t,Y,y,$,F),T.promise)}function z(M){var $=v||E(M,"disableForReducedMotion",Boolean),F=E(M,"zIndex",Number);if($&&A)return k(function(K){K()});l&&T?t=T.canvas:l&&!t&&(t=re(F),document.body.appendChild(t)),p&&!C&&y(t);var R={width:t.width,height:t.height};c&&!C&&c.init(t),C=!0,c&&(t.__confetti_initialized=!0);function N(){if(c){var K={getBoundingClientRect:function(){if(!l)return t.getBoundingClientRect()}};y(K),c.postMessage({resize:{width:K.width,height:K.height}});return}R.width=R.height=null}function D(){T=null,p&&(h=!1,a.removeEventListener("resize",N)),l&&t&&(document.body.contains(t)&&document.body.removeChild(t),t=null,C=!1)}return p&&!h&&(h=!0,a.addEventListener("resize",N,!1)),c?c.fire(M,R,D):I(M,R,D)}return z.reset=function(){c&&c.reset(),T&&T.reset()},z}var _;function ee(){return _||(_=Z(null,{useWorker:!0,resize:!0})),_}function ce(t,e,l,p,h,v,w){var c=new Path2D(t),y=new Path2D;y.addPath(c,new DOMMatrix(e));var C=new Path2D;return C.addPath(y,new DOMMatrix([Math.cos(w)*h,Math.sin(w)*h,-Math.sin(w)*v,Math.cos(w)*v,l,p])),C}function me(t){if(!u)throw new Error("path confetti are not supported in this browser");var e,l;typeof t=="string"?e=t:(e=t.path,l=t.matrix);var p=new Path2D(e),h=document.createElement("canvas"),v=h.getContext("2d");if(!l){for(var w=1e3,c=w,y=w,C=0,A=0,T,I,z=0;z<w;z+=2)for(var M=0;M<w;M+=2)v.isPointInPath(p,z,M,"nonzero")&&(c=Math.min(c,z),y=Math.min(y,M),C=Math.max(C,z),A=Math.max(A,M));T=C-c,I=A-y;var $=10,F=Math.min($/T,$/I);l=[F,0,0,F,-Math.round(T/2+c)*F,-Math.round(I/2+y)*F]}return{type:"path",path:e,matrix:l}}function pe(t){var e,l=1,p="#000000",h='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof t=="string"?e=t:(e=t.text,l="scalar"in t?t.scalar:l,h="fontFamily"in t?t.fontFamily:h,p="color"in t?t.color:p);var v=10*l,w=""+v+"px "+h,c=new OffscreenCanvas(v,v),y=c.getContext("2d");y.font=w;var C=y.measureText(e),A=Math.ceil(C.actualBoundingBoxRight+C.actualBoundingBoxLeft),T=Math.ceil(C.actualBoundingBoxAscent+C.actualBoundingBoxDescent),I=2,z=C.actualBoundingBoxLeft+I,M=C.actualBoundingBoxAscent+I;A+=I+I,T+=I+I,c=new OffscreenCanvas(A,T),y=c.getContext("2d"),y.font=w,y.fillStyle=p,y.fillText(e,z,M);var $=1/l;return{type:"bitmap",bitmap:c.transferToImageBitmap(),matrix:[$,0,0,$,-A*$/2,-T*$/2]}}i.exports=function(){return ee().apply(this,arguments)},i.exports.reset=function(){ee().reset()},i.exports.create=Z,i.exports.shapeFromPath=me,i.exports.shapeFromText=pe})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Q,!1);const V=Q.exports;Q.exports.create;function Le(){const n=document.createElement("section");n.id="hero",n.className="relative pt-8 pb-20 sm:pb-28 px-4 sm:px-8 max-w-7xl mx-auto overflow-visible";const a=m.avatar.defaultUrl;n.innerHTML=`
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
          <span>${m.school.grade} • ${m.school.name}</span>
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
          ${m.tagline}
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
              src="${a}" 
              alt="${m.name} - SMKN 20 Jakarta" 
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
                <p class="font-display font-bold text-white text-xs tracking-wide">${m.name}</p>
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
                  ${P.formatNumber(P.getViews())}
                </span>
              </div>

              <div class="p-2 rounded-xl bg-white/[0.04] border border-brand-lime/20 flex items-center justify-between" title="Total link & tombol yang diklik pengunjung">
                <span class="flex items-center gap-1 text-zinc-400">
                  <span class="text-brand-lime">🔗</span> Clicks
                </span>
                <span id="hero-clicks-count" class="font-bold text-brand-lime text-xs">
                  ${P.formatNumber(P.getTotalClicks())}
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
  `,n.querySelectorAll(".draggable-sticker").forEach(r=>{let k=!1,S=0,s=0,f=0,g=0;const j=B=>{L.playClick(),k=!0,S=B.clientX||B.touches&&B.touches[0].clientX,s=B.clientY||B.touches&&B.touches[0].clientY;const E=r.getBoundingClientRect(),U=r.parentElement.getBoundingClientRect();f=E.left-U.left,g=E.top-U.top,r.style.position="absolute",r.style.left=`${f}px`,r.style.top=`${g}px`,r.style.transform="scale(1.08) rotate(4deg)",r.style.zIndex="50";const q=H=>{if(!k)return;const G=H.clientX||H.touches&&H.touches[0].clientX,J=H.clientY||H.touches&&H.touches[0].clientY,W=G-S,X=J-s;r.style.left=`${f+W}px`,r.style.top=`${g+X}px`},O=()=>{k=!1,r.style.transform="scale(1) rotate(0deg)",r.style.zIndex="20",window.removeEventListener("mousemove",q),window.removeEventListener("mouseup",O),window.removeEventListener("touchmove",q),window.removeEventListener("touchend",O)};window.addEventListener("mousemove",q),window.addEventListener("mouseup",O),window.addEventListener("touchmove",q),window.addEventListener("touchend",O)};r.addEventListener("mousedown",j),r.addEventListener("touchstart",j,{passive:!0})});const b=n.querySelector("#hero-copy-email-btn"),d=n.querySelector("#copy-label"),o=n.querySelector("#copy-icon");b==null||b.addEventListener("click",()=>{P.incrementClick("email"),L.playSuccess(),navigator.clipboard.writeText(m.contact.email).then(()=>{d.textContent="Email Tersalin! ✨",o.textContent="✓",b.classList.add("border-brand-lime","text-brand-lime"),V({particleCount:50,spread:70,origin:{y:.6}}),setTimeout(()=>{d.textContent=m.contact.email,o.textContent="📋",b.classList.remove("border-brand-lime","text-brand-lime")},2500)})});const u=n.querySelector("#hero-views-count"),x=n.querySelector("#hero-clicks-count");return window.addEventListener("analytics_updated",()=>{u&&(u.textContent=P.formatNumber(P.getViews())),x&&(x.textContent=P.formatNumber(P.getTotalClicks()),x.classList.add("scale-125","text-white"),setTimeout(()=>x.classList.remove("scale-125","text-white"),300))}),n.querySelectorAll("a, button").forEach(r=>{r.addEventListener("mouseenter",()=>L.playHover())}),n}function Me(){const n=document.createElement("section");n.id="overview",n.className="py-16 px-4 sm:px-8 max-w-7xl mx-auto",n.innerHTML=`
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
            <div class="text-brand-lime font-bold text-sm mt-0.5">${m.personal.birthFormatted}</div>
          </div>
          <div class="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div class="text-zinc-400 text-[10px]">USIA</div>
            <div class="text-white font-bold text-sm mt-0.5">${m.personal.age} Tahun</div>
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
          ${[{name:"Laravel (PHP)",tag:"Backend Framework",color:"border-red-500/30 text-red-300"},{name:"Flutter (Dart)",tag:"Mobile Development",color:"border-cyan-500/30 text-cyan-300"},{name:"Figma",tag:"UI/UX & Prototype",color:"border-purple-500/30 text-purple-300"},{name:"Flowchart & UML",tag:"Logika Sistem RPL",color:"border-amber-500/30 text-amber-300"},{name:"MySQL Database",tag:"Basis Data Relasional",color:"border-blue-500/30 text-blue-300"},{name:"Git & GitHub",tag:"Version Control",color:"border-zinc-500/30 text-zinc-300"}].map(i=>`
            <div class="px-3.5 py-2.5 rounded-xl bg-white/[0.03] border ${i.color} flex items-center justify-between gap-3 text-xs font-mono hover:scale-[1.03] hover:bg-white/[0.08] transition-all cursor-default">
              <span class="text-white font-semibold">${i.name}</span>
              <span class="text-[10px] text-zinc-400">${i.tag}</span>
            </div>
          `).join("")}
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
            href="#" 
            class="text-brand-lime hover:underline flex items-center gap-1"
            id="explore-projects-shortcut"
          >
            Lihat Proyek Buatan Saya ➔
          </a>
        </div>
      </div>

    </div>
  `,n.querySelectorAll(".bento-card, .bento-card a").forEach(i=>{i.addEventListener("mouseenter",()=>L.playHover())});const a=n.querySelector("#explore-projects-shortcut");return a==null||a.addEventListener("click",i=>{var b;i.preventDefault(),L.playClick(),(b=document.querySelector("#projects"))==null||b.scrollIntoView({behavior:"smooth"})}),n}function Ce(){const n=document.createElement("section");n.id="projects",n.className="py-16 px-4 sm:px-8 max-w-7xl mx-auto";let a="all";function i(s="all"){return(s==="all"?m.projects:m.projects.filter(g=>s==="laravel"?g.id.includes("laravel"):s==="flutter"?g.id.includes("flutter"):s==="design"?g.id.includes("figma"):!0)).map(g=>`
      <div 
        class="bento-card group flex flex-col justify-between p-6 sm:p-7 relative border-white/10 hover:border-brand-lime/40 transition-all duration-300"
        data-project-id="${g.id}"
      >
        <!-- Browser Bar Simulation (Editorial Touch) -->
        <div>
          <div class="flex items-center justify-between pb-4 mb-5 border-b border-white/10 font-mono text-[11px] text-zinc-400">
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              <span class="ml-2 text-zinc-400 font-mono truncate max-w-[150px] sm:max-w-[200px]">
                almahdi://${g.id}
              </span>
            </div>
            <span class="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider" style="color: ${g.accent}; background-color: ${g.accent}15; border: 1px solid ${g.accent}40;">
              ${g.category}
            </span>
          </div>

          <!-- Title & Tagline -->
          <h3 class="text-xl sm:text-2xl font-display font-bold text-white mb-2 group-hover:text-brand-lime transition-colors">
            ${g.title}
          </h3>
          <p class="text-xs sm:text-sm text-zinc-300 mb-5 leading-relaxed font-normal">
            ${g.tagline}
          </p>

          <!-- Problem & Solution Snippet -->
          <div class="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 mb-6 text-xs">
            <div class="text-[11px] font-mono text-brand-lime mb-1 font-semibold">Tantangan & Implementasi:</div>
            <p class="text-zinc-400 leading-relaxed">${g.impact}</p>
          </div>

          <!-- Stack Tags -->
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${g.stack.map(j=>`
              <span class="px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-700/60 text-[11px] font-mono text-zinc-300">
                ${j}
              </span>
            `).join("")}
          </div>
        </div>

        <!-- Footer Actions (Hanya Tampilkan Tombol GitHub Jika Proyek Punya GitHub) -->
        <div class="pt-4 border-t border-white/10 flex items-center justify-between">
          <button 
            class="open-case-study-btn text-xs font-mono text-brand-lime hover:underline flex items-center gap-1.5"
            data-id="${g.id}"
          >
            <span>Detail Penjelasan</span>
            <span>➔</span>
          </button>

          <div class="flex items-center gap-2">
            ${g.hasGithub&&g.github?`
              <a 
                href="${g.github}" 
                target="_blank" 
                rel="noreferrer" 
                data-track-id="${g.id}"
                class="project-github-link px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 hover:border-brand-lime/40 transition-all font-mono text-xs flex items-center gap-2"
                title="Buka Repositori GitHub (${P.getClickCount(g.id)} klik)"
              >
                <span>GitHub</span>
                <span class="px-1.5 py-0.5 rounded bg-brand-lime/10 text-brand-lime font-bold text-[10px] border border-brand-lime/20" id="badge-${g.id}">
                  ${P.getClickCount(g.id)}
                </span>
                <span class="text-[10px] text-zinc-500">↗</span>
              </a>
            `:`
              <span class="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-[10px] font-mono text-zinc-400">
                Figma & Flowchart
              </span>
            `}

            <button 
              class="quick-launch-btn px-3 py-1.5 rounded-lg bg-brand-lime text-black font-mono text-xs font-bold hover:bg-[#d6ff47] transition-all"
              data-id="${g.id}"
            >
              Lihat Ringkasan
            </button>
          </div>
        </div>
      </div>
    `).join("")}n.innerHTML=`
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
      ${i("all")}
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
  `;const b=n.querySelector("#projects-grid"),d=n.querySelectorAll(".filter-btn"),o=n.querySelector("#case-study-modal"),u=n.querySelector("#modal-content"),x=n.querySelector("#close-modal-btn");d.forEach(s=>{s.addEventListener("click",()=>{L.playClick(),d.forEach(f=>{f.classList.remove("active","bg-brand-lime","text-black","font-bold"),f.classList.add("text-zinc-400")}),s.classList.add("active","bg-brand-lime","text-black","font-bold"),s.classList.remove("text-zinc-400"),a=s.dataset.category,b.innerHTML=i(a),S()})});function r(s){var g;const f=m.projects.find(j=>j.id===s);f&&(L.playSuccess(),u.innerHTML=`
      <div class="flex items-center gap-2 font-mono text-xs mb-3" style="color: ${f.accent};">
        <span>// DOKUMENTASI PROYEK</span>
        <span>•</span>
        <span>${f.category}</span>
      </div>

      <h3 class="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
        ${f.title}
      </h3>

      <p class="text-zinc-300 text-sm leading-relaxed mb-6 font-medium">
        ${f.tagline}
      </p>

      <div class="space-y-4 mb-6 text-xs sm:text-sm">
        <div class="p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <h4 class="font-mono text-brand-lime text-xs font-bold mb-1 uppercase tracking-wider">Deskripsi & Ruang Lingkup:</h4>
          <p class="text-zinc-300 leading-relaxed">${f.description}</p>
        </div>

        <div class="p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <h4 class="font-mono text-brand-cyan text-xs font-bold mb-1 uppercase tracking-wider">Tujuan & Hasil Implementasi:</h4>
          <p class="text-zinc-300 leading-relaxed">${f.impact}</p>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="font-mono text-zinc-400 text-xs mb-2">Stack & Alat yang Digunakan:</h4>
        <div class="flex flex-wrap gap-2">
          ${f.stack.map(j=>`
            <span class="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-200">
              ${j}
            </span>
          `).join("")}
        </div>
      </div>

      <div class="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div class="text-[11px] font-mono text-zinc-400">
          Muhammad Almahdi • Siswa XI RPL SMKN 20 JKT
        </div>
        <div class="flex items-center gap-2.5">
          ${f.hasGithub&&f.github?`
            <a 
              href="${f.github}" 
              target="_blank" 
              class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono text-white transition-all flex items-center gap-1.5"
            >
              <span>Buka GitHub Repo</span>
              <span>↗</span>
            </a>
          `:`
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
    `,o.classList.remove("hidden"),o.classList.add("flex"),(g=u.querySelector("#modal-close-action-btn"))==null||g.addEventListener("click",k))}function k(){L.playClick(),o.classList.add("hidden"),o.classList.remove("flex")}x.addEventListener("click",k),o.addEventListener("click",s=>{s.target===o&&k()});function S(){n.querySelectorAll(".open-case-study-btn, .quick-launch-btn").forEach(s=>{s.addEventListener("click",()=>r(s.dataset.id))}),n.querySelectorAll(".project-github-link").forEach(s=>{s.addEventListener("click",()=>{const f=s.dataset.trackId;if(f){const g=P.incrementClick(f),j=s.querySelector(`#badge-${f}`);j&&(j.textContent=g,j.classList.add("scale-125","bg-brand-lime","text-black"),setTimeout(()=>j.classList.remove("scale-125","bg-brand-lime","text-black"),350))}})}),n.querySelectorAll(".bento-card").forEach(s=>{s.addEventListener("mouseenter",()=>L.playHover())})}return S(),n}function Te(){const n=document.createElement("section");n.id="terminal",n.className="py-16 px-4 sm:px-8 max-w-7xl mx-auto",n.innerHTML=`
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
  `;const a=n.querySelector("#terminal-output"),i=n.querySelector("#terminal-input"),b=n.querySelector("#terminal-submit-btn"),d=n.querySelector("#terminal-clear-btn"),o=[];let u=-1;function x(S,s="text"){const f=document.createElement("div");s==="cmd"?f.className="text-brand-lime font-bold flex items-center gap-2":s==="error"?f.className="text-red-400":f.className="text-zinc-300",f.innerHTML=S,a.appendChild(f),a.scrollTop=a.scrollHeight}function r(S){const s=S.trim().toLowerCase();if(s)switch(L.playClick(),x(`<span>almahdi@smkn20:~$</span> <span class="text-white">${k(S)}</span>`,"cmd"),o.push(S),u=o.length,s){case"help":x(`
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
        `);break;case"bio":x(`
          <div class="p-3 rounded-lg bg-white/5 space-y-1 text-zinc-300">
            <div><strong>Nama:</strong> ${m.name} (${m.nickname})</div>
            <div><strong>Status:</strong> ${m.school.grade} — ${m.school.name}</div>
            <div><strong>Jurusan:</strong> ${m.school.major}</div>
            <div><strong>Tanggal Lahir:</strong> ${m.personal.birthFormatted} (${m.personal.age} Tahun)</div>
            <div><strong>Lokasi:</strong> ${m.personal.location}</div>
            <div class="text-zinc-400 mt-2 text-xs">${m.bio}</div>
          </div>
        `);break;case"school":x(`
          <div class="p-3 rounded-lg bg-white/5 space-y-1 text-zinc-300">
            <div><strong>Sekolah:</strong> ${m.school.name} (SMKN 20)</div>
            <div><strong>Wilayah:</strong> ${m.school.location}</div>
            <div><strong>Kompetensi:</strong> Rekayasa Perangkat Lunak (RPL)</div>
            <div><strong>Kurikulum & Fokus:</strong> Pemrograman Web, OOP, Basis Data, Laravel, JavaScript, Clean Code</div>
            <div class="text-brand-lime mt-1">Status: Siap Magang / PKL Industri 2026!</div>
          </div>
        `);break;case"skills":x(`
          <div class="space-y-2 text-xs">
            <div><strong class="text-red-400">Web & Backend:</strong> Laravel (PHP), MySQL Database, RESTful API, MVC Architecture</div>
            <div><strong class="text-brand-cyan">Mobile App:</strong> Flutter & Dart (Cross-Platform Android/iOS)</div>
            <div><strong class="text-purple-400">UI/UX & Modeling:</strong> Figma (Wireframe & Prototype), Flowchart & UML Logika Sistem</div>
            <div><strong class="text-brand-lime">Version Control:</strong> Git & GitHub Repository</div>
          </div>
        `);break;case"projects":x(`
          <div class="space-y-2">
            ${m.projects.map(g=>`
              <div class="border-b border-white/5 pb-1.5">
                <span class="text-white font-bold">${g.title}</span> <span class="text-zinc-500">[${g.category}]</span>
                <div class="text-zinc-400 text-xs">${g.tagline}</div>
                <div class="text-brand-lime text-[11px] font-mono">Stack: ${g.stack.join(", ")}</div>
              </div>
            `).join("")}
          </div>
        `);break;case"contact":x(`
          <div class="space-y-1 text-zinc-300">
            <div>Email: <a href="mailto:${m.contact.email}" class="text-brand-lime underline">${m.contact.email}</a></div>
            <div>GitHub: <a href="${m.contact.github}" target="_blank" class="text-brand-cyan underline">${m.contact.github}</a></div>
            <div>Instagram: <a href="${m.contact.instagram}" target="_blank" class="text-brand-amber underline">${m.contact.instagram}</a></div>
          </div>
        `);break;case"indomie":L.playSuccess(),x(`
          <div class="text-amber-300 font-mono">
            🍜 RESEP RAHASIA SISWA RPL:<br/>
            Indomie Goreng Double + Telur Setengah Matang + Kopi Susu Dingin = 200 baris kode tanpa error!
          </div>
        `);break;case"matrix":L.playSuccess(),document.body.classList.toggle("matrix-active");const f=document.body.classList.contains("matrix-active");x(`Matrix mode: <span class="text-green-400 font-bold">${f?"ENABLED 🟩":"DISABLED ⬛"}</span>`);break;case"sudo hire":case"hire":L.playSuccess(),V({particleCount:100,spread:90,origin:{y:.6}}),x(`
          <div class="p-4 rounded-xl bg-brand-lime/10 border border-brand-lime/40 text-brand-lime space-y-1">
            <div class="font-bold text-sm">🎉 PERINTAH DITERIMA: ACCESS GRANTED!</div>
            <div>Terima kasih atas minat Anda untuk bekerja sama dengan Muhammad Almahdi!</div>
            <div class="text-white text-xs mt-1">Silakan langsung kirim pesan ke <a href="mailto:${m.contact.email}" class="underline font-bold text-brand-lime">${m.contact.email}</a> atau kontak WhatsApp.</div>
          </div>
        `);break;case"clear":a.innerHTML="";break;default:L.playClick(),x(`Perintah tidak dikenal: '<span class="text-red-300">${k(s)}</span>'. Ketik <span class="text-brand-lime font-bold">help</span> untuk melihat daftar perintah.`,"error");break}}function k(S){return S.replace(/[&<>'"]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[s]||s)}return i.addEventListener("keydown",S=>{if(L.playKey(),S.key==="Enter"){const s=i.value;i.value="",r(s)}else S.key==="ArrowUp"?o.length>0&&u>0&&(u--,i.value=o[u]||""):S.key==="ArrowDown"&&(u<o.length-1?(u++,i.value=o[u]||""):(u=o.length,i.value=""))}),b.addEventListener("click",()=>{const S=i.value;i.value="",r(S)}),d.addEventListener("click",()=>{L.playClick(),a.innerHTML=""}),n}function Ee(){const n=document.createElement("section");return n.id="experience",n.className="py-16 px-4 sm:px-8 max-w-7xl mx-auto",n.innerHTML=`
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
      ${m.timeline.map((a,i)=>`
        <div class="relative group">
          <!-- Dot Indicator -->
          <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#090b10] border-2 border-brand-lime flex items-center justify-center group-hover:scale-125 transition-transform">
            <div class="w-1.5 h-1.5 rounded-full bg-brand-lime"></div>
          </div>

          <!-- Card Content -->
          <div class="bento-card p-5 sm:p-6 hover:border-brand-lime/30 transition-all">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono text-xs">
              <span class="px-2.5 py-1 rounded bg-brand-lime/10 text-brand-lime border border-brand-lime/30 font-bold">
                ${a.year}
              </span>
              <span class="text-zinc-400">${a.role}</span>
            </div>

            <h3 class="text-xl font-display font-bold text-white mb-2 group-hover:text-brand-lime transition-colors">
              ${a.title}
            </h3>

            <p class="text-zinc-300 text-sm leading-relaxed font-normal">
              ${a.desc}
            </p>
          </div>
        </div>
      `).join("")}
    </div>
  `,n.querySelectorAll(".bento-card").forEach(a=>{a.addEventListener("mouseenter",()=>L.playHover())}),n}function Ae(){const n=document.createElement("section");n.id="contact",n.className="py-20 px-4 sm:px-8 max-w-7xl mx-auto",n.innerHTML=`
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
                <span id="contact-copy-text">Salin Email: ${m.contact.email}</span>
              </button>

              <a 
                href="mailto:${m.contact.email}"
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
                href="${m.contact.github}" 
                target="_blank" 
                data-track="github"
                class="social-track-link p-3 rounded-xl bg-white/[0.03] hover:bg-white/10 border border-white/5 hover:border-brand-lime/30 flex flex-col items-center justify-center gap-1 text-center text-zinc-300 hover:text-white transition-all group"
              >
                <div class="font-bold flex items-center gap-1">GitHub <span>↗</span></div>
                <span class="text-[10px] text-brand-lime font-mono" id="track-github">
                  ${P.getClickCount("github")} klik
                </span>
              </a>

              <a 
                href="${m.contact.instagram}" 
                target="_blank" 
                data-track="instagram"
                class="social-track-link p-3 rounded-xl bg-white/[0.03] hover:bg-white/10 border border-white/5 hover:border-brand-amber/30 flex flex-col items-center justify-center gap-1 text-center text-zinc-300 hover:text-white transition-all group"
              >
                <div class="font-bold flex items-center gap-1">Instagram <span>↗</span></div>
                <span class="text-[10px] text-brand-amber font-mono" id="track-instagram">
                  ${P.getClickCount("instagram")} klik
                </span>
              </a>

              <a 
                href="${m.contact.linkedin}" 
                target="_blank" 
                data-track="linkedin"
                class="social-track-link p-3 rounded-xl bg-white/[0.03] hover:bg-white/10 border border-white/5 hover:border-brand-cyan/30 flex flex-col items-center justify-center gap-1 text-center text-zinc-300 hover:text-white transition-all group"
              >
                <div class="font-bold flex items-center gap-1">LinkedIn <span>↗</span></div>
                <span class="text-[10px] text-brand-cyan font-mono" id="track-linkedin">
                  ${P.getClickCount("linkedin")} klik
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
        <span>© 2026 ${m.name} — SMKN 20 Jakarta (XI RPL)</span>
      </div>
      <div class="text-zinc-500 text-[11px]">
        Dirakit tanpa template AI generik • 60 FPS • Web Audio Synthesized
      </div>
    </footer>
  `;const a=n.querySelector("#contact-copy-email-btn"),i=n.querySelector("#contact-copy-icon"),b=n.querySelector("#contact-copy-text");a.addEventListener("click",()=>{P.incrementClick("email"),L.playSuccess(),navigator.clipboard.writeText(m.contact.email).then(()=>{b.textContent="Alamat Email Tersalin! ✓",i.textContent="✨",V({particleCount:60,spread:70,origin:{y:.8}}),setTimeout(()=>{b.textContent=`Salin Email: ${m.contact.email}`,i.textContent="📋"},3e3)})});const d=n.querySelector("#msg-send-btn"),o=n.querySelector("#msg-sender"),u=n.querySelector("#msg-body"),x=n.querySelector("#msg-feedback");return d.addEventListener("click",()=>{const r=o.value.trim(),k=u.value.trim();if(!k){L.playClick(),u.focus();return}L.playSuccess(),x.classList.remove("hidden"),V({particleCount:40,spread:50,origin:{y:.7}});const S=`mailto:${m.contact.email}?subject=Kolaborasi dari ${encodeURIComponent(r||"Pengunjung Portofolio")}&body=${encodeURIComponent(k)}`;setTimeout(()=>{window.open(S,"_blank"),x.classList.add("hidden"),o.value="",u.value=""},1200)}),n.querySelectorAll(".social-track-link").forEach(r=>{r.addEventListener("click",()=>{const k=r.dataset.track;if(k){const S=P.incrementClick(k),s=r.querySelector(`#track-${k}`);s&&(s.textContent=`${S} klik`,s.classList.add("scale-125","font-bold"),setTimeout(()=>s.classList.remove("scale-125","font-bold"),300))}})}),n.querySelectorAll("a, button").forEach(r=>{r.addEventListener("mouseenter",()=>L.playHover())}),n}function Ie(){if(!window.matchMedia("(pointer: fine)").matches)return;const n=document.createElement("div");n.className="custom-cursor-dot";const a=document.createElement("div");a.className="custom-cursor-ring",document.body.appendChild(n),document.body.appendChild(a);let i=window.innerWidth/2,b=window.innerHeight/2,d=i,o=b;window.addEventListener("mousemove",k=>{i=k.clientX,b=k.clientY,n.style.transform=`translate3d(${i}px, ${b}px, 0)`}),window.addEventListener("mousedown",()=>{a.classList.add("clicking")}),window.addEventListener("mouseup",()=>{a.classList.remove("clicking")});function u(){document.querySelectorAll('a, button, [role="button"], input, textarea, .interactive-card, [data-cursor-hover]').forEach(S=>{S.addEventListener("mouseenter",()=>{a.classList.add("hovering")}),S.addEventListener("mouseleave",()=>{a.classList.remove("hovering")})})}function x(){d+=(i-d)*.18,o+=(b-o)*.18,a.style.transform=`translate3d(${d}px, ${o}px, 0)`,requestAnimationFrame(x)}requestAnimationFrame(x),u(),new MutationObserver(()=>{u()}).observe(document.body,{childList:!0,subtree:!0})}function Pe(){const n=document.createElement("div");n.id="cmd-palette-modal",n.className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md hidden items-start justify-center pt-20 px-4",n.innerHTML=`
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
  `,document.body.appendChild(n);const a=n.querySelector("#cmd-palette-input"),i=n.querySelector("#cmd-palette-list"),b=[{id:"projects",title:"Koleksi Proyek & Studi Kasus",category:"Navigasi",shortcut:"G P",run:()=>{var r;(r=document.querySelector("#projects"))==null||r.scrollIntoView({behavior:"smooth"})}},{id:"terminal",title:"Buka Interactive Terminal CLI",category:"Fitur",shortcut:"G T",run:()=>{var r,k;(r=document.querySelector("#terminal"))==null||r.scrollIntoView({behavior:"smooth"}),(k=document.querySelector("#terminal-input"))==null||k.focus()}},{id:"overview",title:"Bento Lab & Filosofi Craftsmanship",category:"Navigasi",shortcut:"G B",run:()=>{var r;(r=document.querySelector("#overview"))==null||r.scrollIntoView({behavior:"smooth"})}},{id:"experience",title:"Milestone & Perjalanan Belajar SMK RPL",category:"Navigasi",shortcut:"G E",run:()=>{var r;(r=document.querySelector("#experience"))==null||r.scrollIntoView({behavior:"smooth"})}},{id:"contact",title:"Hubungi Almahdi (Email / Form / WhatsApp)",category:"Kontak",shortcut:"G C",run:()=>{var r;(r=document.querySelector("#contact"))==null||r.scrollIntoView({behavior:"smooth"})}},{id:"audio",title:"Toggle Audio Synthesizer SFX",category:"Setting",shortcut:"M",run:()=>{L.toggleMute(),L.playSuccess();const r=document.querySelector("#sound-toggle-btn");r==null||r.click()}},{id:"matrix",title:"Toggle Hacker Matrix Mode",category:"Easter Egg",shortcut:"X",run:()=>{document.body.classList.toggle("matrix-active"),L.playSuccess()}},{id:"email",title:"Salin Alamat Email ke Clipboard",category:"Aksi Cepat",shortcut:"C",run:()=>{navigator.clipboard.writeText(m.contact.email),L.playSuccess(),V({particleCount:50,spread:70,origin:{y:.5}})}}];function d(r=""){const k=r.toLowerCase().trim(),S=b.filter(s=>s.title.toLowerCase().includes(k)||s.category.toLowerCase().includes(k)||s.id.toLowerCase().includes(k));if(S.length===0){i.innerHTML=`
        <div class="p-6 text-center text-zinc-500 font-mono text-xs">
          Tidak ada aksi yang cocok dengan "${r}"
        </div>
      `;return}i.innerHTML=S.map((s,f)=>`
      <div 
        class="cmd-item p-3 rounded-xl hover:bg-white/10 flex items-center justify-between cursor-pointer transition-colors ${f===0?"bg-white/5 border border-brand-lime/30":""}"
        data-index="${f}"
      >
        <div class="flex items-center gap-3">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-lime"></span>
          <div>
            <div class="text-white font-medium">${s.title}</div>
            <div class="text-[10px] text-zinc-500">${s.category}</div>
          </div>
        </div>
        <span class="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
          ${s.shortcut}
        </span>
      </div>
    `).join(""),i.querySelectorAll(".cmd-item").forEach((s,f)=>{s.addEventListener("mouseenter",()=>L.playHover()),s.addEventListener("click",()=>{L.playClick(),S[f].run(),u()})})}function o(){L.playClick(),n.classList.remove("hidden"),n.classList.add("flex"),a.value="",d(""),setTimeout(()=>a.focus(),50)}function u(){n.classList.add("hidden"),n.classList.remove("flex")}window.addEventListener("keydown",r=>{(r.metaKey||r.ctrlKey)&&r.key.toLowerCase()==="k"?(r.preventDefault(),n.classList.contains("hidden")?o():u()):r.key==="Escape"&&!n.classList.contains("hidden")&&u()}),a.addEventListener("input",r=>{L.playKey(),d(r.target.value)}),n.addEventListener("click",r=>{r.target===n&&u()});const x=document.querySelector("#cmd-palette-trigger");x==null||x.addEventListener("click",o)}document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("app");if(!n)return;const a=document.createElement("div");a.className="noise-overlay",document.body.appendChild(a),n.appendChild(Se()),n.appendChild(Le()),n.appendChild(Me()),n.appendChild(Ce()),n.appendChild(Te()),n.appendChild(Ee()),n.appendChild(Ae()),Ie(),Pe();const i=()=>{L.init(),window.removeEventListener("click",i),window.removeEventListener("keydown",i)};window.addEventListener("click",i),window.addEventListener("keydown",i)});
