const closeBtn = document.querySelector('.image');
const mobileNavItem = document.querySelectorAll('.mobile-item');
const humburgerIcon = document.querySelector('.toggler-img');

function showMenu() {
  document.querySelector('.mobile-menu').setAttribute('style', 'display:flex');
  document.querySelector('.grid-container').setAttribute('style', 'display:none');
  document.querySelector('.footer').setAttribute('style', 'display:none');
  document.querySelector('.about-me').setAttribute('style', 'display:none');
}

function hideMenu() {
  document.querySelector('.mobile-menu').setAttribute('style', 'display:none');
  document.querySelector('.grid-container').setAttribute('style', 'display:grid');
  document.querySelector('.footer').setAttribute('style', 'display:flex');
  document.querySelector('.about-me').setAttribute('style', 'display:block');
}

// click on the hamburger icon
humburgerIcon.addEventListener('click', showMenu);

// click on the close icon
closeBtn.addEventListener('click', hideMenu);

mobileNavItem.forEach((item) => {
  item.addEventListener('click', hideMenu);
});