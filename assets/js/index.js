document.addEventListener("DOMContentLoaded", function (){
  const links = document.getElementsByClassName('nav__link')
  for (var i = 0; i<links.length; i++){
    links[i].addEventListener('click', function (event) {
      const current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
})


