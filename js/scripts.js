// GENERATES RANDOM # BETWEEN 1 AND 6
var randomNumber = function() {
    return Math.floor(Math.random() * 6 ) + 1;
}

// CONSTRUCTOR
function Player(rollScore, turnScore, totalScore) {
    this.rollScore = rollScore;
    this.turnScore = turnScore;
    this.totalScore = totalScore;
}

// ROLL METHOD
Player.prototype.roll = function() {
    var rand = randomNumber();
    return rand;
}

// GAME OVER METHOD
var gameOver = function(playerScore) {
    if (playerScore >= 10) {
        return true
    } else return false;
}

// JQUERY
$(document).ready(function() {

    var rollScore;
    var turnScore;
    var totalScore;

    var player1 = new Player(rollScore = 0, turnScore = 0, totalScore = 0);
    var player2 = new Player(rollScore = 0, turnScore = 0, totalScore = 0);

    $("#playbutton").click(function(event) {
        $("#player1buttons").show();
        $( this ).hide();
    });

    // PLAYER 1 ROLL
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

            // DISPLAY TURN SCORE
            $(".player1turnresult").text(player1.turnScore);

            // HIDE BUTTONS
            $("#player1buttons").hide();

            // SHOW PLAYER 2 BUTTONS
            $("#player2buttons").show();

        } else {

            // DISPLAY ROLL
            $(".player1rollresult").text(player1.rollScore);

            // ADD ROLL TO TURN SCORE
            player1.turnScore += player1.rollScore;
            $(".player1turnresult").text(player1.turnScore);
        }

        // GAME OVER??
        if ((player1.totalScore + player1.turnScore) >= 100) {
            alert("PLAYER ONE WINZ");
        }

        event.preventDefault();
    });

    // PLAYER 1 HOLD
    $("form#player1hold").submit(function(event) {

        // ADDS TURN SCORE TO TOTAL SCORE
        player1.totalScore += player1.turnScore;

        // DISPLAYS TOTAL SCORE
        $(".player1totalscore").text(player1.totalScore);



        // RESET VARIABLES
        player1.rollScore = 0;
        player1.turnScore = 0;

        // RESET FIELDS
        $(".player1rollresult").text("");
        $(".player1turnresult").text("");

        //HIDE PLAYER 1 BUTTONS
        $("#player1buttons").hide();

        // SHOW PLAYER 2 BUTTONS
        $("#player2buttons").show();

        event.preventDefault();
    });

    // PLAYER 2 ROLL
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

            // DISPLAY TURN SCORE
            $(".player2turnresult").text(player2.turnScore);

            //HIDE PLAYER 2 BUTTONS
            $("#player2buttons").hide();

            // SHOW PLAYER 1 BUTTONS
            $("#player1buttons").show();

        } else {

            // DISPLAY ROLL
            $(".player2rollresult").text(player2.rollScore);

            // ADD ROLL TO TURN SCORE
            player2.turnScore += player2.rollScore;
            $(".player2turnresult").text(player2.turnScore);
        }

        // GAME OVER??
        if ((player2.totalScore + player2.turnScore) >= 100) {
            alert("PLAYER TWO WINZ");
        }

        event.preventDefault();

    });

    // PLAYER 2 HOLD
    $("form#player2hold").submit(function(event) {

        // ADDS TURN SCORE TO TOTAL SCORE
        player2.totalScore += player2.turnScore;

        // DISPLAYS TOTAL SCORE
        $(".player2totalscore").text(player2.totalScore);

        // RESET VARIABLES
        player2.rollScore = 0;
        player2.turnScore = 0;

        // RESET FIELDS
        $(".player2rollresult").text("");
        $(".player2turnresult").text("");

        //HIDE PLAYER 2 BUTTONS
        $("#player2buttons").hide();

        // SHOW PLAYER 1 BUTTONS
        $("#player1buttons").show();

        event.preventDefault();
    });
});
