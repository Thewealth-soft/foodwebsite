
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open_menu_btn");
const closeBtn = document.querySelector("#close_menu_btn");
const links = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("section");
const link = document.querySelectorAll(".nav__link");
const isSmallDevice = window.screen.width < 768;

// show/hide menu
menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// close nav menu
closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
});



//when menu is click on the small phone
if (isSmallDevice) {
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", () => {
      menu.style.display = "none";
      closeBtn.style.display = "none";
      menuBtn.style.display = "inline-block";
    });
  }
}

//for an active menu
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    for (let j = 0; j < links.length; j++) {
      links[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}

// Change in menu bar when scrolling
window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;
  for (let i = 0; i < sections.length; i++) {

    const sectionTop = sections[i].offsetTop - 150;
    const sectionBottom = sectionTop + sections[i].offsetHeight;

    if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
      for (let j = 0; j < links.length; j++) {
        links[j].classList.remove("active");
      }
      links[i].classList.add("active");
    }
  }
});

// Move from menu to order
document
  .getElementById("order__details")
  .addEventListener("click", function () {
    window.location.href = "#order";
  });


//slide script
    var swiper = new Swiper(".mySwiper", {
         autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      },
    });
