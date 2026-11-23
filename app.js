function applyPhoto(element, url, placeholderText) {
  if (!element) return;
  if (url && url.trim() !== "") {
    element.style.backgroundImage = `url('${url}')`;
    element.classList.remove("is-empty");
  } else {
    element.style.backgroundImage = "none";
    element.classList.add("is-empty");
    if (placeholderText) {
      element.setAttribute("data-placeholder", placeholderText);
    }
  }
}

function copyText(text, btn) {
  navigator.clipboard.writeText(text);
  const original = btn.textContent;
  btn.textContent = "Tersalin!";
  setTimeout(() => {
    btn.textContent = original;
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  // Nama Tamu dari Parameter URL (?to=Nama%20Tamu)
  const params = new URLSearchParams(window.location.search);
  const guest = params.get("to");
  if (guest) {
    document.getElementById("guest-name").textContent = guest;
    document.getElementById("rsvp-name").value = guest;
    document.getElementById("wish-name").value = guest;
  }

  // Buka Undangan
  document.getElementById("btn-open-invitation").addEventListener("click", () => {
    document.getElementById("opening-cover").classList.add("hidden");
    document.body.classList.remove("no-scroll");
  });

  // Terapkan Data Teks
  document.getElementById("nav-monogram").textContent = WEDDING_CONFIG.monogram;
  document.getElementById("cover-couple-names").textContent = WEDDING_CONFIG.coupleShort;
  document.getElementById("cover-wedding-date").textContent = WEDDING_CONFIG.dateText;
  document.getElementById("hero-couple-names").textContent = WEDDING_CONFIG.coupleShort;
  document.getElementById("hero-meta").textContent = `29 November 2026 • ${WEDDING_CONFIG.venueAddress}`;
  document.getElementById("bride-name").textContent = WEDDING_CONFIG.bride.fullName;
  document.getElementById("bride-parents").textContent = WEDDING_CONFIG.bride.parents;
  document.getElementById("groom-name").textContent = WEDDING_CONFIG.groom.fullName;
  document.getElementById("groom-parents").textContent = WEDDING_CONFIG.groom.parents;
  document.getElementById("akad-time").textContent = WEDDING_CONFIG.akadTime;
  document.getElementById("resepsi-time").textContent = WEDDING_CONFIG.resepsiTime;
  document.getElementById("akad-venue").textContent = WEDDING_CONFIG.venueName;
  document.getElementById("resepsi-venue").textContent = WEDDING_CONFIG.venueName;
  document.getElementById("venue-address").textContent = WEDDING_CONFIG.venueAddress;
  document.getElementById("btn-google-maps").href = WEDDING_CONFIG.googleMapsUrl;
  document.getElementById("footer-couple-names").textContent = WEDDING_CONFIG.coupleShort;

  // Terapkan Foto Manual
  const coverBgEl = document.getElementById("cover-bg-photo");
  if (WEDDING_CONFIG.photos.coverBg && WEDDING_CONFIG.photos.coverBg.trim() !== "") {
    coverBgEl.style.backgroundImage = `url('${WEDDING_CONFIG.photos.coverBg}')`;
  }
  applyPhoto(document.getElementById("hero-photo"), WEDDING_CONFIG.photos.heroBg, "Slot Foto Hero");
  applyPhoto(document.getElementById("bride-photo"), WEDDING_CONFIG.photos.bride, "Foto Ninda");
  applyPhoto(document.getElementById("groom-photo"), WEDDING_CONFIG.photos.groom, "Foto Iftah");

  // Render Our Story
  const storyContainer = document.getElementById("story-container");
  WEDDING_CONFIG.stories.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "story-card";
    card.innerHTML = `
      <div class="story-photo photo-slot" id="story-photo-${idx}"></div>
      <div class="story-body">
        <span class="story-year">${item.year}</span>
        <h3 class="story-title">${item.title}</h3>
        <p class="story-desc">${item.desc}</p>
      </div>
    `;
    storyContainer.appendChild(card);
    applyPhoto(document.getElementById(`story-photo-${idx}`), item.photoUrl, `Foto Story ${idx + 1}`);
  });

  // Render Galeri
  const galleryContainer = document.getElementById("gallery-container");
  WEDDING_CONFIG.gallery.forEach((url, idx) => {
    const item = document.createElement("div");
    item.className = "gallery-item photo-slot";
    galleryContainer.appendChild(item);
    applyPhoto(item, url, `Foto Galeri ${idx + 1}`);
  });

  // Render Wedding Gift
  const giftContainer = document.getElementById("gift-container");
  WEDDING_CONFIG.gifts.forEach((g) => {
    const card = document.createElement("div");
    card.className = "gift-card";
    card.innerHTML = `
      <p class="gift-bank">${g.bank}</p>
      <p class="gift-number">${g.number}</p>
      <p class="gift-holder">a.n. ${g.holder}</p>
      <button type="button" class="btn btn-outline" onclick="copyText('${g.number}', this)">Salin Rekening</button>
    `;
    giftContainer.appendChild(card);
  });

  // Countdown Timer
  const targetTime = new Date(WEDDING_CONFIG.targetDateISO).getTime();
  setInterval(() => {
    const diff = Math.max(0, targetTime - Date.now());
    document.getElementById("cd-days").textContent = String(Math.floor(diff / 86400000)).padStart(2, "0");
    document.getElementById("cd-hours").textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0");
    document.getElementById("cd-minutes").textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
    document.getElementById("cd-seconds").textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
  }, 1000);

  // RSVP LocalStorage
  document.getElementById("rsvp-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
      name: document.getElementById("rsvp-name").value,
      status: document.getElementById("rsvp-status").value,
      guests: document.getElementById("rsvp-guests").value
    };
    localStorage.setItem("wedding_rsvp_ninda_iftah", JSON.stringify(data));
    document.getElementById("rsvp-feedback").textContent =
      "Terima kasih, konfirmasi kehadiran Anda telah tercatat di perangkat ini.";
  });

  // Wishes LocalStorage
  const wishesList = document.getElementById("wishes-list");
  const savedWishes = JSON.parse(localStorage.getItem("wedding_wishes_ninda_iftah") || "[]");

  function renderWishes() {
    wishesList.innerHTML = savedWishes.length
      ? savedWishes
          .map(
            (w) =>
              `<div class="wish-item"><div class="wish-author">${w.name}</div><div class="wish-text">${w.message}</div></div>`
          )
          .join("")
      : `<p style="font-size: 0.85rem; color: var(--text-brown-light);">Belum ada ucapan. Jadilah yang pertama mengirimkan doa restu.</p>`;
  }
  renderWishes();

  document.getElementById("wish-form").addEventListener("submit", (e) => {
    e.preventDefault();
    savedWishes.unshift({
      name: document.getElementById("wish-name").value,
      message: document.getElementById("wish-message").value
    });
    localStorage.setItem("wedding_wishes_ninda_iftah", JSON.stringify(savedWishes));
    document.getElementById("wish-message").value = "";
    renderWishes();
  });
});
