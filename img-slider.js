let next = document.getElementById("next");
let prev = document.getElementById("prev");
let slider = document.querySelector(".slider");

next.addEventListener("click", function () {
  let slides = document.querySelectorAll(".slides");
  slider.appendChild(slides[0]);
});

prev.addEventListener("click", function () {
  let slides = document.querySelectorAll(".slides");
  slider.prepend(slides[slides.length - 1]);
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
