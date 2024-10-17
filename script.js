const slider = document.querySelector(".slider");
const list = document.querySelector(".list");
const thumbnail = document.querySelector(".thumbnail");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let runAutoPlay;
let menuIsActive = false; // Untuk mengecek apakah menu sedang aktif
let chatIsActive = false; // Untuk mengecek apakah chat sedang aktif

// Fungsi untuk mengaktifkan autoplay slider
const startAutoPlay = () => {
  if (!chatIsActive) {
    // Pastikan autoplay hanya berjalan jika chat tidak aktif
    stopAutoPlay(); // Hentikan autoplay sebelumnya jika ada
    runAutoPlay = setTimeout(() => {
      if (!menuIsActive) {
        next.click(); // Panggil tombol next secara otomatis jika menu tidak aktif
      }
    }, 5000);
  }
};

// Fungsi untuk menghentikan autoplay
const stopAutoPlay = () => {
  clearTimeout(runAutoPlay); // Menghapus timeout yang sedang berjalan
};

// Memulai autoplay ketika halaman dimuat
startAutoPlay();

// Fungsi untuk mengganti slide berdasarkan tipe (next atau prev)
const initSlider = (type) => {
  const sliderItems = list.querySelectorAll(".item");
  const thumbnailItems = thumbnail.querySelectorAll(".item");

  if (type === "next") {
    // Memindahkan item pertama ke akhir (move forward)
    list.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");
  } else if (type === "prev") {
    // Memindahkan item terakhir ke depan (move backward)
    list.prepend(sliderItems[sliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    slider.classList.add("prev");
  }

  // Hapus kelas animasi setelah 2 detik
  setTimeout(() => {
    slider.classList.remove("next");
    slider.classList.remove("prev");
  }, 800); // Percepat waktu animasi jadi 800ms

  stopAutoPlay(); // Hentikan autoplay setiap kali ada interaksi manual
  if (!menuIsActive && !chatIsActive) {
    // Pastikan autoplay dimulai ulang jika menu tidak aktif
    startAutoPlay();
  }
};

// Event listener untuk tombol next
next.addEventListener("click", () => {
  initSlider("next");
});

// Event listener untuk tombol prev
prev.addEventListener("click", () => {
  initSlider("prev");
});

// Menu Logic
const menu = document.querySelector("#menu");
const navbarNav = document.querySelector(".navbar-nav");

// Fungsi untuk membuka/menutup menu dan menghentikan autoplay
menu.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  navbarNav.classList.toggle("active");
  menuIsActive = navbarNav.classList.contains("active");

  if (menuIsActive) {
    stopAutoPlay(); // Hentikan autoplay saat menu aktif
  } else {
    startAutoPlay(); // Lanjutkan autoplay saat menu ditutup
  }
});

// Klik di mana saja di luar menu untuk menutupnya dan lanjutkan autoplay
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    menuIsActive = false;
    startAutoPlay(); // Lanjutkan autoplay setelah menutup menu
  }
});

// Geser gambar menggunakan touchscreen
