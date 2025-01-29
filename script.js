// create a array duplicate values
// define the value  
const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let cardDeck = [...cardValues, ...cardValues];
let firstCard, secondCard;
let lockBoard = false;
let matchedPairs = 0;

const gameBoard = document.getElementById('game-board');
const restartButton = document.getElementById('restart-button');
// get user name in prompt method 
function nameTitle() {
    let username=prompt("Please Enter Your Name");
    if (username != null) {
        document.getElementById("show-greet").innerText =
        "Hiiii...." + username +"..." + " All The Best..!";
      }  
}
// use match.random dom property 
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
// create new div and add or set the card & addEventListener 
function createCard(value) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = value;
    card.addEventListener('click', flipCard);
    return card;
}

function flipCard() {
    if (lockBoard) return;
    this.classList.add('flipped');
    if (!firstCard) {
        firstCard = this;
    } else {
        secondCard = this;
        checkForMatch();
    }
}

function checkForMatch() {
    lockBoard = true;
    const isMatch = firstCard.dataset.value === secondCard.dataset.value;
    if (isMatch) {
        matchedPairs++;
        resetBoard();
        if (matchedPairs === cardValues.length) {
            setTimeout(() => alert('You Won The Match!'), 500);
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetBoard();
        }, 1000);
    }
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function startGame() {
    matchedPairs = 0;
    gameBoard.innerHTML = '';
    shuffle(cardDeck);
    cardDeck.forEach(value => {
        const card = createCard(value);
        gameBoard.appendChild(card);
    });
}

restartButton.addEventListener('click', startGame);
startGame();
nameTitle();