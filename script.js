const buttons = document.querySelector('.btnContainer');

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

function playRound(event) {
    let humanChoice = getHumanChoice(event);
    let computerChoice = getComputerChoice();

    if (humanChoice == 'rock' && computerChoice == 'scissors' || humanChoice == 'paper' && computerChoice == 'rock' || humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log(`Human has selected ${humanChoice} and Computer has selected ${computerChoice}. Human wins!`);

    }
    else if (humanChoice == 'rock' && computerChoice == 'paper' || humanChoice == 'paper' && computerChoice == 'scissors' || humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log(`Human has selected ${humanChoice} and Computer has selected ${computerChoice}. Computer wins!`);

    }
    else {
        console.log(`Human has selected ${humanChoice} and Computer has selected ${computerChoice}. DRAW!`);
    }
}

buttons.addEventListener('click', playRound);