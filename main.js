const togglebtn = document.querySelector('.navtogglebtn');
const menu = document.querySelector('.navmenu');
const help = document.querySelector('.navhelp');

togglebtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  help.classList.toggle('active');
});
