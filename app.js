const guessNumber = Math.ceil(Math.random()*20)
console.log(guessNumber);


const input = document.querySelector('#input');
const check = document.querySelector('#check');
const display = document.querySelector('#display')
const highScore = document.querySelector('#hs')
const score = document.querySelector('#score')
const paigham = document.querySelector('#paigham')
const body = document.querySelector('body')



function checkHandler () {
    const userInput = +(input.value)
   if (guessNumber == userInput) {
    display.innerHTML = guessNumber
    paigham.innerHTML = 'Wooo "You Won"'
    highScore.innerHTML = +score.innerHTML + 1;
    document.body.style.backgroundColor = "green";   
    setTimeout(() => {
        document.body.style.backgroundColor = "black";
    }, 3000) 
    score.innerHTML = +score.innerHTML + 1;

   } else if (userInput < guessNumber) {
    display.innerHTML = '?'
    paigham.innerHTML = 'Ooops, "very Low"'
    score.innerHTML = +score.innerHTML - 1;
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor = "black";
    }, 3000)


   } else if (userInput > guessNumber) {
    display.innerHTML = '?'
    paigham.innerHTML = 'Ooops, "very High"'
    score.innerHTML = +score.innerHTML - 1;
    document.body.style.backgroundColor = "red"
    setTimeout(() => {
        document.body.style.backgroundColor = "black";
    }, 3000)

   }
}

function again() {
    display.innerHTML = '?'
    paigham.innerHTML = 'Start guessing . . . '
    score.innerHTML = '20'
    document.body.style.backgroundColor = "black"
    highScore.innerHTML = '0';
    input.value = ''
  
}