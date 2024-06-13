// script.js
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menuButton');
  const closeButton = document.getElementById('closeButton');
  const menu = document.getElementById('menu');
  const header = document.querySelector('header');

  // Function to show the menu
  function showMenu() {
      menu.classList.add('active');
  }

  // Function to hide the menu
  function hideMenu() {
      menu.classList.remove('active');
  }

  // Event listeners for menu toggle buttons
  menuButton.addEventListener('click', function () {
      if (menu.classList.contains('active')) {
          hideMenu();
      } else {
          showMenu();
      }
  });

  closeButton.addEventListener('click', hideMenu);

  // Handle the header hide/show on scroll
  let lastScrollTop = 0;
  window.addEventListener('scroll', function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
          // Scroll down
          header.classList.add('hidden');
      } else {
          // Scroll up
          header.classList.remove('hidden');
      }
      lastScrollTop = scrollTop;
  });

  // Ensure the menu icon is always visible
  window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
          hideMenu();
      }
  });
});