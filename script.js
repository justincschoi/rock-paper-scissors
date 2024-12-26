const buttons = document.querySelector('.btnContainer');
const results = document.querySelector('.result');
const score = document.querySelector('.score');

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(event) {
    let target = event.target;

    switch (target.id) {
        case 'rock':
            return 'rock';
            break;
        case 'paper':
            return 'paper';
            break;
        case 'scissors':
            return 'scissors';
            break;
    }
}
let humanScore = 0;
let computerScore = 0;

function playRound(event) {
    let humanChoice = getHumanChoice(event);
    let computerChoice = getComputerChoice();

    if (
        (humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')
    ) {
        results.innerText = `Human has selected ${humanChoice} and Computer has selected ${computerChoice}. Human wins!`;
        humanScore++;
        score.innerText = `HUMAN: ${humanScore} - COMPUTER: ${computerScore}`;
    }
    else if (
        (humanChoice == 'rock' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'rock')
    ) {
        results.innerText = `Human has selected ${humanChoice} and Computer has selected ${computerChoice}. Computer wins!`;
        computerScore++;
        score.innerText = `HUMAN: ${humanScore} - COMPUTER: ${computerScore}`;
    }
    else {
        results.innerText = `Human has selected ${humanChoice} and Computer has selected ${computerChoice}. DRAW!`;
        score.innerText = `HUMAN: ${humanScore} - COMPUTER: ${computerScore}`;
    }
}

buttons.addEventListener('click', playRound);