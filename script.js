function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock";
    }
    else if (choice === 2) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

// function playRound(playerSelection, computerSelection) {
//     if (playerSelection == computerSelection) {
//         return `Draw both played ${playerSelection}`
//     }
//     else if ((playerSelection.toLowerCase() == "rock" && computerSelection == "scissor") || (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") || playerSelection.toLowerCase() == "scissor" && computerSelection == "paper") {
//         return `Player has won! Player chose ${playerSelection} and computer chose ${computerSelection}`;
//     }
//     else {
//         return `Computer has won =( Player chose ${playerSelection} and computer chose ${computerSelection}`;
//     }

// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerSelection = prompt("Rock paper or scissor?: ");
    const computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        return `Draw both played ${playerSelection}`
    }
    else if ((playerSelection.toLowerCase() == "rock" && computerSelection == "scissor") || (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") || playerSelection.toLowerCase() == "scissor" && computerSelection == "paper") {
        return `Player has won! Player chose ${playerSelection} and computer chose ${computerSelection}`;
    }
    else {
        return `Computer has won =( Player chose ${playerSelection} and computer chose ${computerSelection}`;
    }
}
for (i = 0; i < 5; i++) {
    console.log(game());
}