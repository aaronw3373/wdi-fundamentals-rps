function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    playerMove = prompt();
    return playerMove;
}


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

function getPlayerMove(playerMove) {
    if (playerMove == null){
    playerMove = getInput();
    return playerMove;
    }
}


function getComputerMove(computerMove) {
    if (computerMove == null){
    computerMove=randomPlay();
    return computerMove;
    }
}


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
