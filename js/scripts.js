var romanNumerizer = function(input) {

    var testArray = input.split("");

    var stringArray = testArray.reverse();

    var place1 = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var place2 = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var place3 = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var place4 = ["M", "MM", "MMM"];
    var returnArray = [];

    for (var i = 0; i < stringArray.length; i++) {
        var character = parseInt(stringArray[i]);
        if (i === 0) {
            returnArray.push(place1[character - 1]);
        } else if (i === 1) {
            returnArray.push(place2[character - 1]);
        } else if (i === 2) {
            returnArray.push(place3[character - 1]);
        } else if (i === 3) {
            returnArray.push(place4[character - 1]);
        }
    }
    return returnArray.reverse().join("");

};


$(document).ready(function() {
    $("form#roman").submit(function(event) {
        var input = ($("input#input").val());
        var result = romanNumerizer(input);

        $(".output").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
