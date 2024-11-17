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

//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let heroDom = document.querySelector('.hero');
let SliderDom = heroDom.querySelector('.hero .list');
let thumbnailBorderDom = document.querySelector('.hero .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.hero .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.hero .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.hero .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        heroDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        heroDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        heroDom.classList.remove('next');
        heroDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}