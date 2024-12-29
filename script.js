const buttons = document.querySelector('.btnContainer');
const results = document.querySelector('.result');
const score = document.querySelector('.score');
const end = document.querySelector('.end');

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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    function playRound(event) {
        let humanChoice = getHumanChoice(event);
        let computerChoice = getComputerChoice();
        end.innerText = '';
        results.innerText = '';

        if (
            (humanChoice == 'rock' && computerChoice == 'scissors') ||
            (humanChoice == 'paper' && computerChoice == 'rock') ||
            (humanChoice == 'scissors' && computerChoice == 'paper')
        ) {
            results.innerText = `Human has selected ${humanChoice} and Computer has selected ${computerChoice}. Human wins!`;
            humanScore++;
            round++;
            score.innerText = `HUMAN: ${humanScore} - COMPUTER: ${computerScore}`;
        }
        else if (
            (humanChoice == 'rock' && computerChoice == 'paper') ||
            (humanChoice == 'paper' && computerChoice == 'scissors') ||
            (humanChoice == 'scissors' && computerChoice == 'rock')
        ) {
            results.innerText = `Human has selected ${humanChoice} and Computer has selected ${computerChoice}. Computer wins!`;
            computerScore++;
            round++;
            score.innerText = `HUMAN: ${humanScore} - COMPUTER: ${computerScore}`;
        }
        else {
            results.innerText = `Human has selected ${humanChoice} and Computer has selected ${computerChoice}. DRAW!`;
            round++;
            score.innerText = `HUMAN: ${humanScore} - COMPUTER: ${computerScore}`;
        }

        if (round === 5) {
            if (humanScore > computerScore) {
                end.innerText = `Human win! Human has won ${humanScore} while Computer has won ${computerScore}.`;
            }
            else if (computerScore > humanScore) {
                end.innerText = `Computer win! Computer has won ${computerScore} while human has won ${humanScore}.`;
            }
            else {
                end.innerText = `DRAW! Human and Computer has both won ${humanScore}.`;
            }
            humanScore = 0;
            computerScore = 0;
            round = 0;
        }
    }

    buttons.addEventListener('click', playRound);
}

playGame();