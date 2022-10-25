// console.log("WARNING! In exactly five seconds something will explode");

// function theExplosion() {
//   console.log("BOOM!");
// }

// let prout = document.querySelector('p');
// let interval;
// console.log (prout);

// function typeWritter() {
//     prout= ["p","r","o","u","t"]
//     for (i =0 ; i < prout.lenght ; i++){
//        prout.textContent += i
//     }

    
// }
// interval = setInterval(typeWritter, 1000);
// console.log (prout)



//Write a function that mimics the behaviour of a typewriter.
//Using setInterval display the word prout one character at a time (one letter per second). Once the word is written on the screen clear the interval.


let i = 0;
let txt = 'prout'; 


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerText += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 1000);
  }

}
typeWriter()

//Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.

const displayPara = document.getElementById('sec');

const _initTime = Date.now()
console.log(_initTime)
const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

console.log (displayPara)

let time = 0;
function displayTime() {
  console.log( getElapsedTime() + " have passed"); 
  time++ 
  displayPara.textContent = getElapsedTime() + " have passed";
  if(Number((Date.now() - _initTime) / 1000).toFixed(2) == 60){
    alert ("one minute has passed") 
  }
  else if(Number((Date.now() - _initTime) / 1000).toFixed(2) == 120){
    alert ("two minutes has passed") 
  }
  else if(Number((Date.now() - _initTime) / 1000).toFixed(2) == 180){
    alert ("three minutes has passed") 
  }


}
setInterval(displayTime, 1000);

displayTime()
