/**
 * Konfigurasi Utama Undangan Pernikahan (Mode Hosting Manual)
 * Taruh file foto di folder assets/images/ lalu isi path-nya di bawah ini.
 */
const WEDDING_CONFIG = {
  monogram: "N & I",
  coupleShort: "Ninda & Iftah",
  dateText: "Minggu, 29 November 2026",
  targetDateISO: "2026-11-29T08:00:00+07:00",
  akadTime: "08.00 WIB – Selesai",
  resepsiTime: "Pukul 12.30 WIB – Selesai",
  venueName: "Kediaman Mempelai Wanita",
  venueAddress: "Boyong Sari Gg 1 Panjang Baru, Pekalongan",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=-6.861966,109.680142",

  // Isi path foto secara manual, contoh: "assets/images/hero.jpg"
  photos: {
    coverBg: "", // Latar Opening Cover
    heroBg: "assets/images/IMG_5535.JPG",  // Latar Hero / Judul
    bride: "assets/images/NINDA.JPG",   // Foto Mempelai Wanita (Ninda)
    groom: "assets/images/IFTAH.JPG"    // Foto Mempelai Pria (Iftah)
  },

  bride: {
    fullName: "Ninda Alfyana Wahyono",
    parents: "Putri dari Bapak Wahyono Raharjo & Ibu Siti Rodliyah"
  },

  groom: {
    fullName: "Iftah Al-Qouf",
    parents: "Putra dari Bapak M. Abdullah & Ibu Endang Puji Astuti"
  },

  stories: [
    {
      year: "2014",
      title: "Awal Perkenalan",
      desc: "Perkenalan sederhana dari obrolan kecil saat jam istirahat sekolah.",
      photoUrl: "assets/images/story 1.jpg" // Contoh: "assets/images/story 1.jpg"
    },
    {
      year: "2016",
      title: "Menjalin Komitmen",
      desc: "Saling mengenal lebih dalam dan menyatukan langkah menuju tujuan yang sama.",
      photoUrl: "assets/images/story 2.jpg" // Contoh: "assets/images/story-2.jpg"
    },
    {
      year: "2026",
      title: "Lamaran",
      desc: "Kedua keluarga bertemu dan merestui niat baik kami untuk melangkah ke jenjang pernikahan.",
      photoUrl: "assets/images/story 3.jpg" // Contoh: "assets/images/story-3.jpg"
    },
    {
      year: "2026",
      title: "Menuju Hari Pernikahan",
      desc: "Dengan memohon ridho Allah SWT, kami siap mengikrarkan janji suci pernikahan.",
      photoUrl: "assets/images/story 4.jpg" // Contoh: "assets/images/story-4.jpg"
    }
  ],

  gallery: [
    "assets/images/galeri 1.jpg", // Contoh: "assets/images/galeri-1.jpg"
    "assets/images/galeri 2.jpg", // Contoh: "assets/images/galeri-2.jpg"
    "assets/images/galeri 3.jpg", // Contoh: "assets/images/galeri-3.jpg"
    "assets/images/galeri 4.jpg", // Contoh: "assets/images/galeri-4.jpg"
    "assets/images/galeri 5.jpg", // Contoh: "assets/images/galeri-5.jpg"
    "assets/images/galeri 6.jpg"  // Contoh: "assets/images/galeri-6.jpg"
  ],

  gifts: [
    { bank: "SEABANK", number: "901580834796", holder: "Ninda Alfyana Wahyono" },
    { bank: "BNI", number: "1983309998", holder: "Iftah Al-Qouf" }
  ]
};
