//gets input from user via the console

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    playerMove = prompt();
    return playerMove;
}

//randomly creates a move for the computer
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        computerMove= 'rock';
    } else if (randomNumber < 0.66) {
        computerMove= 'paper';
    } else {
        computerMove= 'scissors';
    }
    return computerMove;
}

//gets player move
//if move not specified runs getInput()
function getPlayerMove(playerMove) {
    if (playerMove == null){
    playerMove = getInput();
    return playerMove;
    }
}

//gets computer move
//if move not specified runs randomPlay()
function getComputerMove(computerMove) {
    if (computerMove == null){
    computerMove=randomPlay();
    return computerMove;
    }
}

//determines winner based on playerMove and computerMove
//returns winner as player, computer or tie
function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove==computerMove){
        winner = 'tie';
    }
    else if (playerMove == 'rock'){
        if (computerMove == 'paper'){
            winner = 'computer';
        }
        else{
            winner = 'player';
        }
    }
    else if (playerMove == 'paper'){
        if (computerMove == 'scissors'){
            winner = 'computer';
        }
        else{
            winner = 'player';
        }
    }
    else if (playerMove == 'scissors'){
        if (computerMove == 'rock'){
            winner = 'computer';
        }
        else{
            winner = 'player';
        }
    }
    return winner;
}

//sets the score based on each rounds winner
function score(winner) {
    if (winner == 'player'){
        playerWins += 1;
        console.log(winner + ' wins');
    }
    else if (winner == 'computer'){
        computerWins += 1;
        console.log(winner + ' wins');
    }
    else {
    console.log('it was a tie');
    }
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
}

//plays to specified number of wins
var playerWins = 0;
var computerWins = 0;
var winner;
function playTo(plays) {
    console.log("Let's play Rock, Paper, Scissors");
    while (playerWins<plays && computerWins<plays){
        score(getWinner(getPlayerMove(),getComputerMove()));
    }
    return [playerWins, computerWins];
}
