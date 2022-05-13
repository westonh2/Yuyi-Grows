function classToggle() {
  const navs = document.querySelectorAll('.nav-items')

  navs.forEach(nav => nav.classList.toggle('nav-toggle1'));
}

document.querySelector('.nav-toggle')
  .addEventListener('click', classToggle);


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var contents = this.nextElementSibling;
    if (contents.style.display === "block") {
      contents.style.display = "none";
    } else {
      contents.style.display = "block";
    }
  });
}
