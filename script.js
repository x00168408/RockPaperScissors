let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.33) {
        return ("rock")
    }
    else if (choice <= 0.66) {
        return ("paper")
    }
    else {
        return ("scissors")
    }
}

function getHumanChoice() {
    let choice = prompt("Enter choice:")
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice === "scissoers") {
        console.log("You win! Rock beats Scissors")
        humanScore++
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose! Paper beats Rock")
        computerScore++
    }
    else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("You Tie!")
    }
    else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("You Tie!")
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock")
        humanScore++
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You Lose! Scissors beats Paper")
        computerScore++
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("You Tie!")
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors beats Paper")
        humanScore++
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You Lose! Rock beats Scissors")
        computerScore++
    }
}

function playGame() {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

}

for (let i = 0; i < 5; i++) {
    playGame();
}

if (humanScore > computerScore) {
    console.log(`Human won ${humanScore} - ${computerScore}`)
}
else {
    console.log(`Computer won ${computerScore} - ${humanScore}`)
}