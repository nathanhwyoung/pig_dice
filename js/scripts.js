var turn = true;

function Player(rollScore, turnScore, totalScore) {
    this.rollScore = rollScore;
    this.turnScore = turnScore;
    this.totalScore = totalScore;
}

Player.prototype.roll = function() {
    this.rollScore = randomNumber();
}

var randomNumber = function() {

    var resultNumber = Math.floor(Math.random() * 6 ) + 1;

    return resultNumber;
};

Player.prototype.decision = function() {

    // if (this.rollScore === 1) {
    //     this.turnScore = 0;
    // } else {
    //     this.turnScore += this.rollScore;
    // }
}

Player.prototype.switch = function() {
    this.totalScore += this.turnScore;
    turn = !true;
}

$(document).ready(function() {

    $("form#player1").submit(function(event) {
        var input = ($("input#input").val());
        var result = randomNumber();

        $(".output").text(result);

        $("#result").show();
        event.preventDefault();
    });

    $("form#player2").submit(function(event) {
        var input = ($("input#input").val());
        var result = randomNumber();

        $(".output").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
