let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    return prompt("Please select: rock, paper or scissors");
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'scissors' || humanChoice == 'paper' && computerChoice == 'rock' || humanChoice == 'scissors' && computerSelection == 'paper') {
        console.log(`Human has selected ${humanSelection} and Computer has selected ${computerSelection}. Human wins!`);
        humanScore++;
    }
    else if (humanChoice == 'rock' && computerChoice == 'paper' || humanChoice == 'paper' && computerChoice == 'scissors' || humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log(`Human has selected ${humanSelection} and Computer has selected ${computerSelection}. Computer wins!`);
        computerScore++;
    }
    else {
        console.log(`Human has selected ${humanSelection} and Computer has selected ${computerSelection}. DRAW!`);
    }
}

playRound(humanSelection, computerSelection);