const slider = document.querySelector(".photo-slider");
const form = document.querySelector(".slider-content");
let mouseDownAt = 0;
let left = 0;
let keyDown = false;
let keySpeed = 0;
let isMouseDown = false;
slider.onmousedown = (e) => {
   isMouseDown = true;
   mouseDownAt = e.clientX;
   slider.style.userSelect = 'none';
   slider.style.cursor = 'grab';
   form.style.pointerEvents = 'none';
};
slider.onmouseup = () => {
   isMouseDown = false;
   mouseDownAt = 0;
   slider.style.userSelect = 'unset';
   slider.style.cursor = 'unset';
   form.style.pointerEvents = 'unset';
   form.classList.remove('left');
   form.classList.remove('right');
};
slider.onmouseleave = slider.onmouseup;
slider.onmousemove = (e) => {
   if (!isMouseDown) return;

   const movement = (e.clientX - mouseDownAt) * 0.6;
   let newLeft = left + movement;
   const leftLimit = form.offsetWidth - slider.offsetWidth / 2;

   if (newLeft < 0 && Math.abs(newLeft) < leftLimit) {
      left = newLeft;
      form.style.transform = `translateX(${left}px)`;
   }

   if (movement > 0) {
      form.classList.add('left');
      form.classList.remove('right');
   } else {
      form.classList.add('right');
      form.classList.remove('left');
   }

   mouseDownAt = e.clientX;
};
document.addEventListener('keydown', (e) => {
   if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      keyDown = true;
      keySpeed = e.key === 'ArrowLeft' ? -10 : 10;
      form.style.pointerEvents = 'none';
      slider.style.cursor = 'grab';
   }
});
document.addEventListener('keyup', (e) => {
   if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      keyDown = false;
      keySpeed = 0;
      form.style.pointerEvents = 'unset';
      slider.style.cursor = 'unset';
      form.classList.remove('left');
      form.classList.remove('right');
   }
});
function moveSlider() {
   if (keyDown) {
      left += keySpeed;
      const leftLimit = form.offsetWidth - slider.offsetWidth / 2;

      if (left < 0 && Math.abs(left) < leftLimit) {
         form.style.transform = `translateX(${left}px)`;
      }

      if (keySpeed < 0) {
         form.classList.add('left');
         form.classList.remove('right');
      } else {
         form.classList.add('right');
         form.classList.remove('left');
      }
   }
   requestAnimationFrame(moveSlider);
}
// Start the animation loop
moveSlider();
var TrendingSlider = new Swiper('.trending-slider', {
   effect: 'coverflow',
   grabCursor: true,
   centeredSlides: true,
   loop: true,
   slidesPerView: 'auto',
   coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.icon-right',
      prevEl: '.icon-left',
   }
});
const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) => {
   if (!menu.classList.contains("active")) {
      return;
   }
   if (e.target.closest(".menu-item-has-children")) {
      const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
   }
});
goBack.addEventListener("click", () => {
   hideSubMenu();
});
menuTrigger.addEventListener("click", () => {
   toggleMenu();
});
closeMenu.addEventListener("click", () => {
   toggleMenu();
});
document.querySelector(".menu-overlay").addEventListener("click", () => {
   toggleMenu();
});
function toggleMenu() {
   menu.classList.toggle("active");
   document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren) {
   subMenu = hasChildren.querySelector(".sub-menu");
   subMenu.classList.add("active");
   subMenu.style.animation = "slideLeft 0.5s ease forwards";
   const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
   menu.querySelector(".current-menu-title").innerHTML = menuTitle;
   menu.querySelector(".mobile-menu-head").classList.add("active");
}
function hideSubMenu() {
   subMenu.style.animation = "slideRight 0.5s ease forwards";
   setTimeout(() => {
      subMenu.classList.remove("active");
   }, 300);
   menu.querySelector(".current-menu-title").innerHTML = "";
   menu.querySelector(".mobile-menu-head").classList.remove("active");
}
window.onresize = function () {
   if (this.innerWidth > 991) {
      if (menu.classList.contains("active")) {
         toggleMenu();
      }

   }
};
document.addEventListener('DOMContentLoaded', function () {
   const dropdownToggle = document.querySelector('.dropdown-toggle');
   const dropdownMenu = document.querySelector('.dropdown-menu');

   dropdownToggle.addEventListener('click', function (event) {
      event.preventDefault();
      dropdownMenu.classList.toggle('show');
   });

   document.addEventListener('click', function (event) {
      if (!event.target.closest('.dropdown')) {
         dropdownMenu.classList.remove('show');
      }
   });
});
