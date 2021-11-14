const closeIcon = document.querySelector('#clear-text');
const searchInput = document.querySelector('#search-bar');
const menuBurger = document.querySelector('.menu-burger');
const burger = document.querySelector('.burger');
const closeBurger = document.querySelector('.close');

closeIcon.onclick = () => {
  searchInput.value = ""
  searchInput.focus()
}

menuBurger.addEventListener('click', () => {
  burger.classList.toggle('active');
});

closeBurger.addEventListener('click', () => {
  burger.classList.remove('active');
})