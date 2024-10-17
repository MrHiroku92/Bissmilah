// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//Ketika Menu di Klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
//Klik Diluar sidebar untuk menutup menu navbar
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
