var turn = true;

var randomNumber = function() {
    return Math.floor(Math.random() * 6 ) + 1;
};

function Player(rollScore, turnScore, totalScore) {
    this.rollScore = rollScore;
    this.turnScore = turnScore;
    this.totalScore = totalScore;
}

Player.prototype.roll = function() {
    var rand = randomNumber();
    return rand;
}

Player.prototype.switch = function() {
    this.totalScore += this.turnScore;
    turn = !turn;
}

$(document).ready(function() {

        // debugger;

        var rollScore;
        var turnScore;
        var totalScore;

        var player1 = new Player(rollScore = 0, turnScore = 0, totalScore = 0);
        var player2 = new Player(rollScore = 0, turnScore = 0, totalScore = 0);

    $("form#player1roll").submit(function(event) {

        var currentRoll;

        player1.rollScore = player1.roll();
        if (player1.rollScore === 1) {
            player1.rollScore = 0;
            player1.turnScore = 0;
            $(".player1rollresult").text("1 - TURN OVER");
            player1.switch();
        } else {
            currentRoll = player1.rollScore;
            $(".player1rollresult").text(currentRoll);
            player1.turnScore += player1.rollScore;
        }

        var currentTurn = player1.turnScore;
        $(".player1turnresult").text(currentTurn);
        console.log(turn);

        event.preventDefault();
    });

    $("form#player2roll").submit(function(event) {

        var currentRoll;

        player2.rollScore = player2.roll();
        if (player2.rollScore === 1) {
            player2.rollScore = 0;
            player2.turnScore = 0;
            $(".player2rollresult").text("1 - TURN OVER");
            player2.switch();
        } else {
            currentRoll = player2.rollScore;
            $(".player2rollresult").text(currentRoll);
            player2.turnScore += player2.rollScore;
        }

        var currentTurn = player2.turnScore;
        $(".player2turnresult").text(currentTurn);
        console.log(turn);

        event.preventDefault();
    });


});
