let humbtn = document.querySelector(".toggle-menu");


let mobinav = document.getElementById('nav')



humbtn.onclick = function () {
  mobinav.classList.toggle("hum-show")
}


const bullets = document.querySelectorAll('.bullets-nav li');




for (let i = 0; i < bullets.length; i++) {
  bullets[i].onclick = function () {
  for (let j = 0; j < bullets.length; j++) {
bullets[j].classList.remove('active')
    
  }
bullets[i].classList.add('active')
  }
  
};



// bullets.forEach(function (bullet) {
//   bullet.onclick =function () {
//     bullets.forEach(function (b) {
//           b.classList.remove('active');
//     })
//   this.classList.add('active')
//   }
// })