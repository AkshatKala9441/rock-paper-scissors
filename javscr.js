let playerScore = 0;
let computerScore = 0;

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

// Function to update the scores and check for a winner
function updateScoreAndCheckWinner() {
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;

    if (playerScore === 5) {
        document.getElementById('results').textContent = "Congratulations! You win the game!";
        disableButtons();
    } else if (computerScore === 5) {
        document.getElementById('results').textContent = "Sorry! Computer wins the game.";
        disableButtons();
    }
}

// Function to disable game buttons once the game is over
function disableButtons() {
    document.getElementById('rockBtn').disabled = true;
    document.getElementById('paperBtn').disabled = true;
    document.getElementById('scissorsBtn').disabled = true;
}

// Event listeners for player's choice
document.getElementById('rockBtn').addEventListener('click', () => {
    let result = playRound('rock', computerChoice());
    document.getElementById('results').textContent = result;
    updateScoreAndCheckWinner();
});

document.getElementById('paperBtn').addEventListener('click', () => {
    let result = playRound('paper', computerChoice());
    document.getElementById('results').textContent = result;
    updateScoreAndCheckWinner();
});

document.getElementById('scissorsBtn').addEventListener('click', () => {
    let result = playRound('scissors', computerChoice());
    document.getElementById('results').textContent = result;
    updateScoreAndCheckWinner();
});

// Function to generate computer's choice
function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
