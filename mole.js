let tm;
let scoreCounter = 0;
let moleCounter;
let moleCounterEl = document.querySelector('#mole-counter')
let scoreCounterEl = document.querySelector('#score')
let lastRand;
let startButton = document.querySelector('#start')

function popUpRandomMole() {
    if (moleCounter) {
    let moles = document.querySelectorAll('.wgs__mole-head')
    let randomNum = () => Math.round(Math.random() * 7)
    let currentRand = randomNum()
    while (currentRand == lastRand) {
        currentRand = randomNum()
    }
    lastRand = currentRand;
    let currentMole = moles[currentRand];
    currentMole.classList.remove('wgs__mole-head--hidden');
    console.log(moleCounter)
    moleCounter --;
    moleCounterEl.innerHTML = `Moles: ${moleCounter}`;
    tm = setTimeout(hideMole, 750, currentMole)
    } else {
        startButton.disabled = false;
        startButton.innerHTML = 'Play Again?'
    }
}

function hideMole(mole) {
    console.log('yo')
    mole.classList.add('wgs__mole-head--hidden');
    tm = setTimeout(popUpRandomMole, 200)
}

startButton.addEventListener('click', e => {
    startButton.disabled = true;
    startButton.innerHTML = 'Start Game'
    moleCounter = 30;
    popUpRandomMole()
})

let pf = document.querySelector('.pf')
pf.addEventListener('click', e => {
    let current = e.target;
    if(current.classList.contains('wgs__mole-head')) { //includes doesn't work with classes
    scoreCounter ++;
    scoreCounterEl.innerHTML = `Score: ${scoreCounter}`;
    current.classList.add('wgs__mole-head--hidden')
    clearTimeout(tm)
    popUpRandomMole()
    }
});
