document.addEventListener("DOMContentLoaded", function () {
  const links = document.getElementsByClassName('nav__link')
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
      const current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  let completedCount = document.getElementById('completedCounter').innerHTML
  let openCount = document.getElementById('openCounter').innerHTML
  openCount = parseInt(openCount);
  completedCount = parseInt(completedCount);
  document.getElementById('completedCounter').onclick = function () {
    if (openCount > 0) {
      let sumbit = confirm("Are you sure you want to change the number of tasks?");
      if (sumbit == true && openCount > 0) {
        completedCount++;
        openCount--;
        document.getElementById('completedCounter').innerHTML = completedCount;
        document.getElementById('openCounter').innerHTML = openCount;
      }
    }
  }


  let images = ["https://static4.depositphotos.com/1000423/454/i/600/depositphotos_4548401-stock-photo-symbol-of-yin-and-yang.jpg", "https://cs8.pikabu.ru/post_img/big/2016/02/04/7/145458292112119207.jpg", "https://static4.depositphotos.com/1000423/454/i/600/depositphotos_4548401-stock-photo-symbol-of-yin-and-yang.jpg", "https://cs8.pikabu.ru/post_img/big/2016/02/04/7/145458292112119207.jpg"];

  images.forEach((element, index) => {
    let img = document.createElement("img");
    img.width = '100';
    img.height = '100';
    img.src = element;
    document.getElementById("imgContainer").appendChild(img)
    img.onclick = function (){
      document.getElementById('notif').innerHTML = index;
    }
  })

})



