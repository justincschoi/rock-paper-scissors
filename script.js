function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return 'rock';
    }
    else if (choice === 2) {
        return 'paper';
    }
    else {
        return 'scissor';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {

        return `Draw both played ${playerSelection}\n Player: ${playerWins} vs Computer: ${computerWins}`
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissor') || (playerSelection == 'paper' && computerSelection == 'rock') || playerSelection == "scissor" && computerSelection == "paper") {
        playerWins++;
        return `Player has won! Player chose ${playerSelection} and computer chose ${computerSelection}\n Player: ${playerWins} vs Computer: ${computerWins}`;
    }
    else {
        computerWins++;
        return `Computer has won. Player chose ${playerSelection} and computer chose ${computerSelection}\n Player: ${playerWins} vs Computer: ${computerWins}`;
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

let computerWins = 0;
let playerWins = 0;
const buttons = document.querySelectorAll('button');
const result = document.getElementById('result')
buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        const playerSelection = e.target.className;
        const computerSelection = getComputerChoice();
        result.innerText = playRound(playerSelection, computerSelection);
        checkWinner();
    });
});

