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