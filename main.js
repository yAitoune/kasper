let humbtn = document.querySelector(".toggle-menu");


let mobinav = document.getElementById('nav')



humbtn.onclick = function () {
  mobinav.classList.toggle("hum-show")
}


const bullets = document.querySelectorAll('.bullets-nav li');
const landings = document.querySelectorAll(".landing div:nth-child(-n+3)")






for (let i = 0; i < bullets.length; i++) {
  bullets[i].onclick = function () {
  for (let j = 0; j < bullets.length; j++) {
    bullets[j].classList.remove('active')
    landings[j].style.display = 'none';
    
  }
    bullets[i].classList.add('active')
    landings[i].style.display = 'block';
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