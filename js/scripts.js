// current year in footer
const theTime = new Date();
document.querySelector('#year').textContent = theTime.getFullYear();

const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks')

hamburgerElement.addEventListener('click', () => {
    hamburgerElement.classList.toggle('open');
    navElement.classList.toggle('open');
})