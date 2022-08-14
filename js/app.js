const hamburger = document.querySelector('.nav__hamburger')
const navLinks = document.querySelector('.nav__links--mobile')
const modal = document.querySelector('.modal')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('nav__hamburger--active')
  navLinks.classList.toggle('nav__links--active')
  modal.classList.toggle('modal--active')
})