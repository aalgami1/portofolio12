// Guns.lol Style Real-Time Click & View Counter Engine

class AnalyticsTracker {
  constructor() {
    // Kunci storage v2 untuk mereset counter ke angka real (murni dari 0)
    this.storageKeyViews = 'almahdi_views_real';
    this.storageKeyClicks = 'almahdi_clicks_real';

    // Angka dasar murni 0 agar menghitung pengunjung & klik nyata
    this.baseViews = 0;
    this.baseClicks = {
      'github': 0,
      'instagram': 0,
      'linkedin': 0,
      'email': 0,
      'portfolio-web': 0,
      'laravel-project': 0,
      'flutter-project': 0
    };

    this.init();
  }

  init() {
    // Tambah jumlah view setiap kali halaman dibuka (dimulai dari 1 untuk kunjungan pertama)
    let currentViews = parseInt(localStorage.getItem(this.storageKeyViews), 10);
    if (isNaN(currentViews) || currentViews < 0) {
      currentViews = 0;
    }
    currentViews += 1;
    localStorage.setItem(this.storageKeyViews, currentViews.toString());

    // Inisialisasi peta klik jika belum ada
    let clicksMap = this.getClicksMap();
    let updated = false;
    for (const [key, val] of Object.entries(this.baseClicks)) {
      if (clicksMap[key] === undefined) {
        clicksMap[key] = val;
        updated = true;
      }
    }
    if (updated) {
      localStorage.setItem(this.storageKeyClicks, JSON.stringify(clicksMap));
    }
  }

  getViews() {
    return parseInt(localStorage.getItem(this.storageKeyViews), 10) || 1;
  }

  getClicksMap() {
    try {
      const raw = localStorage.getItem(this.storageKeyClicks);
      return raw ? JSON.parse(raw) : { ...this.baseClicks };
    } catch (e) {
      return { ...this.baseClicks };
    }
  }

  getClickCount(linkId) {
    const map = this.getClicksMap();
    return map[linkId] !== undefined ? map[linkId] : 0;
  }

  getTotalClicks() {
    const map = this.getClicksMap();
    return Object.values(map).reduce((acc, curr) => acc + (parseInt(curr, 10) || 0), 0);
  }

  incrementClick(linkId) {
    const map = this.getClicksMap();
    map[linkId] = (map[linkId] || 0) + 1;
    localStorage.setItem(this.storageKeyClicks, JSON.stringify(map));
    this.notifyUpdate();
    return map[linkId];
  }

  formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return (num || 0).toString();
  }

  notifyUpdate() {
    window.dispatchEvent(new CustomEvent('analytics_updated'));
  }
}

export const analytics = new AnalyticsTracker();
