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

        // RESET OPPOSING FIELDS
        player2.rollScore = 0;
        player2.turnScore = 0;

        // RESET FIELDS
        $(".player2rollresult").text("");
        $(".player2turnresult").text("");

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

            // DISPLAY TURN SCORE
            $(".player1turnresult").text(player1.turnScore);

        } else {

            // DISPLAY ROLL
            $(".player1rollresult").text(player1.rollScore);

            // ADD ROLL TO TURN SCORE
            player1.turnScore += player1.rollScore;
            $(".player1turnresult").text(player1.turnScore);
        }

        event.preventDefault();

    });

    // PLAYER 1 HOLD
    $("form#player1hold").submit(function(event) {

        player1.totalScore += player1.turnScore;

        $(".player1totalscore").text(player1.totalScore);

        player1.switch();

        // RESET VARIABLES
        player1.rollScore = 0;
        player1.turnScore = 0;

        // RESET FIELDS
        $(".player1rollresult").text("");
        $(".player1turnresult").text("");

        event.preventDefault();
    });

    $("form#player2roll").submit(function(event) {

        // RESET OPPOSING FIELDS
        player1.rollScore = 0;
        player1.turnScore = 0;

        // RESET FIELDS
        $(".player1rollresult").text("");
        $(".player1turnresult").text("");

        // PLAYER 2 ROLL
        player2.rollScore = player2.roll();

        // IF ROLL = 1, TURN OVER
        if (player2.rollScore === 1) {

            // RESET ROLL SCORE
            player2.rollScore = 0;

            // RESET TURN SCORE
            player2.turnScore = 0;

            // DISPLAY TEXT
            $(".player2rollresult").text("1 - TURN OVER");

            // CALL SWITCH FUNCTION
            player2.switch();

            // DISPLAY TURN SCORE
            $(".player2turnresult").text(player2.turnScore);

        } else {

            // DISPLAY ROLL
            $(".player2rollresult").text(player2.rollScore);

            // ADD ROLL TO TURN SCORE
            player2.turnScore += player2.rollScore;
            $(".player2turnresult").text(player2.turnScore);
        }

        event.preventDefault();

    });

    // PLAYER 2 HOLD
    $("form#player2hold").submit(function(event) {

        player2.totalScore += player2.turnScore;

        $(".player2totalscore").text(player2.totalScore);

        player2.switch();

        // RESET VARIABLES
        player2.rollScore = 0;
        player2.turnScore = 0;

        // RESET FIELDS
        $(".player2rollresult").text("");
        $(".player2turnresult").text("");

        event.preventDefault();
    });

});
