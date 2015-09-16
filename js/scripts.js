var randomNumber = function() {

    var resultNumber = Math.floor(Math.random() * 6 ) + 1;

    return resultNumber;
};

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
