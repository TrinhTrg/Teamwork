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

