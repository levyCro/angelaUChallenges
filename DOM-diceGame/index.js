const heading = document.querySelector('h1')

const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const image1 = document.querySelectorAll('img')[0].setAttribute('src', 'images/dice'+randomNumber1+'.png')

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const image2 = document.querySelectorAll('img')[1].setAttribute('src', 'images/dice'+randomNumber2+'.png')

if(randomNumber1 === randomNumber2){
    heading.innerHTML = 'Draw!'
} else if(randomNumber1 > randomNumber2) {
    heading.innerHTML = '🚩 Player 1 Wins!'
} else {
    heading.innerHTML = 'Player 2 Wins! 🚩'
}
