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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == 'rock' && computerChoice == 'scissors' || humanChoice == 'paper' && computerChoice == 'rock' || humanChoice == 'scissors' && computerChoice == 'paper') {
            console.log(`Human has selected ${humanChoice} and Computer has selected ${computerChoice}. Human wins!`);
            humanScore++;
        }
        else if (humanChoice == 'rock' && computerChoice == 'paper' || humanChoice == 'paper' && computerChoice == 'scissors' || humanChoice == 'scissors' && computerChoice == 'rock') {
            console.log(`Human has selected ${humanChoice} and Computer has selected ${computerChoice}. Computer wins!`);
            computerScore++;
        }
        else {
            console.log(`Human has selected ${humanChoice} and Computer has selected ${computerChoice}. DRAW!`);
        }
    }

    for (let i = 1; i <= 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
        round++

        if (round === 5) {
            if (humanScore > computerScore) {
                console.log(`Human win! Human has won ${humanScore} while Computer has won ${computerScore}.`);
            }
            else if (computerScore > humanScore) {
                console.log(`Computer win! Computer has won ${computerScore} while human has won ${humanScore}.`);
            }
            else {
                console.log(`DRAW! Human and Computer has both won ${humanScore}.`)
            }
        }
    }
}

playGame();