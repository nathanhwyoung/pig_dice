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
    // var rand = testNumber;
    var rand = randomNumber();
    if (rand === 1) {
        return false;
    } else return rand;
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

        player1.rollScore = player1.roll();
        var currentRoll = player1.rollScore;
        $(".player1rollresult").text(currentRoll);

        player1.turnScore += player1.rollScore;
        var currentTurn = player1.turnScore;
        $(".player1turnresult").text(currentTurn);

        // $(".output").text(result);

        $("#result").show();
        event.preventDefault();
    });

    // $("form#player2roll").submit(function(event) {
    //
    //     player2.rollScore = player2.roll();
    //     var currentRoll = player2.rollScore;
    //     $(".output").text(currentRoll);
    //
    //     player2.turnScore += player2.rollScore;
    //     var currentTurn = player2.turnScore;
    //
    //     $(".output").text(result);
    //
    //     $("#result").show();
    //     event.preventDefault();
    // });

    $("form#player1hold").submit(function(event) {

        $(".output").text(result);

        $("#result").show();
        event.preventDefault();
    });

    // $("form#player2roll").submit(function(event) {
    //
    //     // var roll = randomNumber();
    //
    //     $(".output").text(result);
    //
    //     $("#result").show();
    //     event.preventDefault();
    // });
    //
    // $("form#player2hold").submit(function(event) {
    //
    //
    //     $(".output").text(result);
    //
    //     $("#result").show();
    //     event.preventDefault();
    // });

});
