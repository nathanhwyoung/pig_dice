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
    // this.totalScore += this.turnScore;
    turn = !turn;
}

$(document).ready(function() {

        // debugger;

        var rollScore;
        var turnScore;
        var totalScore;

        var player1 = new Player(rollScore = 0, turnScore = 0, totalScore = 0);
        var player2 = new Player(rollScore = 0, turnScore = 0, totalScore = 0);

        var state;

    $("form#player1roll").submit(function(event) {

        // PLAYER 1 ROLL
        player1.rollScore = player1.roll();

        // IF ROLL = 1, TURN OVER
        if (player1.rollScore === 1) {

            // RESET ROLL SCORE
            player1.rollScore = 0;

            // RESET TURN SCORE
            player1.turnScore = 0;

            // DISPLAY TEXT
            $(".player1rollresult").text("1 - TURN OVER");

            // CALL SWITCH FUNCTION
            player1.switch();
            console.log(turn);

            // DISPLAY TURN SCORE
            $(".player1turnresult").text(player1.turnScore);

        } else {

            // DISPLAY ROLL
            $(".player1rollresult").text(player1.rollScore);

            // ADD ROLL TO TURN SCORE
            player1.turnScore += player1.rollScore;
            $(".player1turnresult").text(player1.turnScore);
        }

        // PLAYER 1 HOLD
        $("form#player1hold").submit(function(event) {
            console.log("TOTAL AFTER " + player1.totalScore);

            player1.totalScore += player1.turnScore;

            $(".player1totalscore").text(player1.totalScore);

            player1.switch();

            event.preventDefault();
        });

        event.preventDefault();

    });

});
