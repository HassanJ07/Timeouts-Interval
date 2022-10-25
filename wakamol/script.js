const circles = document.querySelectorAll('.circle');
const mole = document.querySelector('.mole');
const score = document.getElementById('score');


let result = 0;
let hitPosition;
let timerId = null
const randomCircles = () => {
    circles.forEach(circle => {
        circle.classList.remove('mole')
    })

    let randomCircles = circles[Math.floor(Math.random() *12)]
    randomCircles.classList.add('mole')
    hitPosition = randomCircles.id
    moveMole()
}

circles.forEach(circle => {
    circle.addEventListener('mousedown', () => {
        if (circle.id == hitPosition) {
          result++
          score.textContent = "Your score is : " + result 
          hitPosition = null
          if(result === 10){
            counter = 800
          }
          else if(result === 20){
            counter = 700
          }
          else if (result === 30){
            counter = 600
          }
          else if(result === 40){
            counter = 300
          }

        }
      })
    })

let counter = 1000

const moveMole = () => {
   setTimeout(randomCircles, counter)
    // timerId = setInterval(randomCircles, 700)
}
 moveMole()