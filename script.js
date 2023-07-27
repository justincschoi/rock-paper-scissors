function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return 'rock';
    }
    else if (choice === 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {

        return `Draw both played ${playerSelection}`;
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || playerSelection == "scissors" && computerSelection == "paper") {
        playerWins++;
        return `Player has won! Player chose ${playerSelection} and computer chose ${computerSelection}`;
    }
    else {
        computerWins++;
        return `Computer has won. Player chose ${playerSelection} and computer chose ${computerSelection}`;
    }

}

function checkWinner() {
    if (computerWins == 5) {
        result.innerText += "\nCPU HAS WON";
        playerWins = 0;
        computerWins = 0;
    }
    else if (playerWins == 5) {
        result.innerText += "\nPLAYER HAS WON";
        playerWins = 0;
        computerWins = 0;
    }

}

function choiceToEmoji(selection) {
    const selectionMap = {
        rock: "✊",
        paper: "✋",
        scissors: "✌️",
    };

    const mappedSelection = selectionMap[selection];
    return mappedSelection;
}


let computerWins = 0;
let playerWins = 0;
const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');
const scorePlayer = document.getElementById('score-player');
const scoreComputer = document.getElementById('score-computer');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        const playerSelection = e.target.className;
        console.log(playerSelection);
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        result.innerText = playRound(playerSelection, computerSelection);
        playerChoice.innerText = choiceToEmoji(playerSelection);
        computerChoice.innerText = choiceToEmoji(computerSelection);
        scorePlayer.textContent = `Player: ${playerWins}`;
        scoreComputer.textContent = `Computer: ${computerWins}`;
        checkWinner();
    });
});

