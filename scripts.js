function computerPlay() {
    var move = ["rock", "paper", "scissors"];
    return move[Math.floor(Math.random() * 3)];
}

var playerScore = 0,
    computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt().toLowerCase();
    computerSelection = computerPlay();
    console.log('Computer played: ' + computerSelection);

    switch (playerSelection) {
        case ('rock'):
            if (computerSelection === 'rock') {
                console.log('It\'s a draw!');
            }
            if (computerSelection === 'paper') {
                console.log('You lose this round! Paper beats Rock');
                computerScore++;
            }
            if (computerSelection === 'scissors') {
                console.log('You win this round! Rock beats Scissors');
                playerScore++;
            }
            break;
        case ('paper'):
            if (computerSelection === 'rock') {
                console.log('You win this round! Paper beats Rock');
                playerScore++;
            }
            if (computerSelection === 'paper') {
                console.log('It\'s a draw!');
            }
            if (computerSelection === 'scissors') {
                console.log('You lose this round! Scissors beats Paper');
                computerScore++;
            }
            break;
        case ('scissors'):
            if (computerSelection === 'rock') {
                console.log('You lose this round! Rock beats Scissors');
                computerScore++;
            }
            if (computerSelection === 'paper') {
                console.log('You win this round! Scissors beats Paper');
                playerScore++;
            }
            if (computerSelection === 'scissors') {
                console.log('It\'s a draw!');
            }
            break;
    }
}

function game() {
    console.log('Your score: ' + playerScore);
    console.log('Computer score: ' + computerScore);
    playRound();
    if (playerScore === 5 || computerScore === 5) {
        console.log('Game over!');
        console.log('Your score: ' + playerScore);
        console.log('Computer score: ' + computerScore);
        if (playerScore > computerScore) {
            console.log('Congratulations! You won the game!');
        } else {
            console.log('The computer won!');
        }
    } else {
        game();
    }
}
