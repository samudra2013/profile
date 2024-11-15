// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar side menu nav nya hilang
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Pilih semua tautan navigasi
const navLinks = document.querySelectorAll(".nav-link");

// Fungsi untuk menghapus class "active" dari semua tautan
function removeActiveClass() {
  navLinks.forEach((link) => link.classList.remove("active"));
}

// Tambahkan event listener saat scrolling
window.addEventListener("scroll", () => {
  const fromTop = window.scrollY;

  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));

    if (
      section.offsetTop <= fromTop + 50 &&
      section.offsetTop + section.offsetHeight > fromTop + 50
    ) {
      removeActiveClass();
      link.classList.add("active");
    }
  });
});
