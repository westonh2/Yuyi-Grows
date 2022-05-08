function classToggle() {
  const navs = document.querySelectorAll('.nav-items')

  navs.forEach(nav => nav.classList.toggle('nav-toggle1'));
}

document.querySelector('.nav-toggle')
  .addEventListener('click', classToggle);
