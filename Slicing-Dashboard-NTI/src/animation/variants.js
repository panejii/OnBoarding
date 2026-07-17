// src/animation/variants.js
// Kumpulan variant motion yang dipakai ulang di seluruh dashboard.
// Cukup import dari sini, jangan tulis ulang object animasi di tiap komponen.

// Fade-in sambil sedikit naik dari bawah. Dipakai untuk:
// - transisi skeleton -> data asli
// - entrance animation tiap card saat page pertama load / refresh
export const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

// Fade-in polos tanpa pergeseran. Cocok untuk elemen besar (map, section wrapper)
// yang kalau ikut geser malah terasa berat.
export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Dipasang di PARENT. staggerChildren membuat tiap child (yang pakai staggerItem/fadeInUp)
// muncul berurutan, bukan bersamaan.
export const staggerContainer = (staggerAmount = 0.12) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: staggerAmount },
  },
});

// Alias supaya pemakaian di child terasa eksplisit: "ini item di dalam stagger container"
export const staggerItem = fadeInUp;
