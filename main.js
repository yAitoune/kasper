const humbtn = document.querySelector(".toggle-menu");
const mobinav = document.getElementById('nav')



humbtn.onclick = function () {
  mobinav.classList.toggle("hum-show")
}

const bullets = document.querySelectorAll('.bullets-nav li');
const landings = document.querySelectorAll(".bcg")

function removeElementActive(element) {
  for (let i = 0; i < element.length; i++) {
    element[i].classList.remove("active")
  }
}
for (let i = 0; i < bullets.length; i++) {
  bullets[i].onclick = function () {
    console.log(i); 
    removeElementActive(bullets)
    removeElementActive(landings)
    this.classList.add("active")
    landings[i].classList.add("active")
  }
}


const nextButton = document.querySelector('.change-BG-right')
const prevButton = document.querySelector('.change-BG-left')


function activeElement(element) {
  for (let i = 0; i < element.length; i++) {
    if (element[i].classList.contains("active")) {
      return i
    } 
  }
}

function nextElement(element) {
  if (activeElement(element) < element.length - 1) {
    return activeElement(element) + 1
  }
  else if (activeElement(element) === element.length - 1) {
    return 0
  }
}
function prevElement(element) {
  if (activeElement(element) > 0) {
    return activeElement(element) - 1
  }
  else if (activeElement(element) === 0) {
    return element.length-1
  }
}

function nextMove(element) {
  let next=nextElement(element)
  for (let i = 0; i < element.length; i++) {
    element[i].classList.remove("active")
  }
  element[next].classList.add("active")
}
function prevMove(element) {
  let previous = prevElement(element)
    for (let i = 0; i < element.length; i++) {
    element[i].classList.remove("active")
  }
  element[previous].classList.add("active")
}

nextButton.onclick=function () {
  nextMove(landings)
  nextMove(bullets)
}

prevButton.onclick=function () {
  prevMove(landings)
  prevMove(bullets)
}
