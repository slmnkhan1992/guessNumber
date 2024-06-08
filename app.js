const guessNumber = Math.ceil(Math.random()*20)
console.log(guessNumber);

const abc = document.body.style.backgroundColor = 'green'
console.log(abc);

const input = document.querySelector('#input');
const check = document.querySelector('#check');
const display = document.querySelector('#display')
const highScore = document.querySelector('#hs')
const score = document.querySelector('#score')



function checkHandler () {
    const userInput = +(input.value)
   if (guessNumber == userInput) {
    display.innerHTML = guessNumber
    document.body.style.backgroundColor = 'blue'
    highScore.innerHTML = guessNumber
    score.innerHTML = 


   } else {
    alert('wrong')
   }
}