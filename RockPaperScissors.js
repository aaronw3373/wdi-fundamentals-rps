function getInput(){
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    console.read(function(playerMove) {
    });
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        computerMove='rock';
    } else if (randomNumber < 0.66) {
        computerMove='paper';
    } else {
        computerMove='scissors';
    }
    console.log(computerMove);
}

function getPlayerMove() {
    var playerMove;
    if (playerMove == null){
    getInput();
    }
}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.


function getComputerMove(move) {
    var computerMove;
    if (computerMove == null){
    randomPlay();
    }
}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.



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
}
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.



function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner;
    var playerMove;
    while (playerWins<5 && computerWins<5){
        getPlayerMove();
        getComputerMove();
        getWinner();
        if (winner == 'player'){
            playerWins += 1;
            console.log(winner + 'wins');
        }
        else if (winner == 'computer'){
            computerWins += 1;
            console.log(winner + 'wins');
        }
        else {
        console.log('it was a tie');
        }
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.