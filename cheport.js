const burgerMenu = document.querySelector('.bx-menu');
const menu = document.querySelector('.hiding-b');


burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const menuB = document.querySelectorAll('.tog');
menuB.forEach((tog) => {
  tog.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
})
console.log(menuB)