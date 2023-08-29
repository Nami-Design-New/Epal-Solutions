const { pathname } = window.location;
let navLinks = document.querySelectorAll(".nav-links li");
let links = document.querySelectorAll(".nav-links li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].classList.remove("active");
}
for (var i = 0; i < navLinks.length; i++) {
  const linkPathname = new URL(links[i].href).pathname;
  if (linkPathname === pathname) {
    navLinks[i].classList.add("active");
  }
  if (pathname === "/") {
    navLinks[0].classList.add("active");
  }
}
// navigation header
let bar = document.querySelector(".header");
window.addEventListener("scroll", () => {
  this.scrollY === 0
    ? bar.classList.remove("scrolled")
    : bar.classList.add("scrolled");
});
// swiper-team
// let aboutSwiper = new Swiper(".teamSwiper", {
//   spaceBetween: 50,
//   grabCursor: true,
//   pagination: true,
//   loop: true,
//   pagination: {
//     el: ".teamSwiperPagination",
//     clickable: true
//   },
//   breakpoints: {
//     992: {
//       slidesPerView: 4
//     },
//     768: {
//       slidesPerView: 3
//     },
//     350: {
//       slidesPerView: 1
//     }
//   }
// });
//contact higlight inputs
function highlight(el) {
  el.previousElementSibling.classList.add("h");
}
function dehighlight(el) {
  if (el.value === "") {
    el.previousElementSibling.classList.remove("h");
  }
}
// counters
let numbers = document.querySelectorAll(".num");
let started = false;
function startCount(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
window.onscroll = function () {
  if (this.scrollY >= 100) {
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
};
// testimonials slider
// var swiper = new Swiper(".testimonilas", {
//   loop: true,
//   spaceBetween: 30,
//   speed: 2000,
//   centeredSlides: true,
//   pagination: {
//     el: ".testimonialsSwiperPagination",
//     clickable: true
//   },
//   autoplay: {
//     delay: 2500
//   },
//   breakpoints: {
//     992: {
//       slidesPerView: 3
//     },
//     768: {
//       slidesPerView: 2
//     },
//     350: {
//       slidesPerView: 1
//     }
//   }
// });
//projects slider
var projectsSwiper = new Swiper(".projects", {
  loop: true,
  spaceBetween: 50,
  speed: 3000,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    992: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 4,
    },
    350: {
      slidesPerView: 1,
    },
  },
});


let toggler = document.querySelector(".toogler");
let menu = document.querySelector(".nav-links");
toggler.addEventListener("click", () => {
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    toggler.classList.add("close");
  } else {
    toggler.classList.remove("close");
  }
});
//hero section slider
let heroSwiper = new Swiper(".hero-swiper", {
  loop: true,
  spaceBetween: 50,
  speed: 1000,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".heroPagination",
    clickable: true,
  },
});

$(".hero-swiper").hover(
  function () {
    this.swiper.autoplay.stop();
  },
  function () {
    this.swiper.autoplay.start();
  }
);

$(document).ready(function () {
  $(".preloader").delay(1000).fadeOut(300);
  // fav icon
  function setFavicon() {
    const favicon = document.querySelector('link[rel="shortcut icon"]');
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const faviconName = isDarkMode ? "assets/images/fav.svg" : "assets/images/fav2.svg";
    favicon.href = faviconName;
  }
  setFavicon();
});
$(document).ready(function () {
  //aos Delay
  $("section").each(function () {
      const sectionDivs = $(this).find("[data-aos]");
      sectionDivs.each(function (index) {
          $(this).attr("data-aos-delay", (index + 1) * 100);
      });
  });
  // aos
  AOS.init({
      offset: 20,
      delay: 50,
      duration: 500,
      easing: "linear",
      once: true
  });
});