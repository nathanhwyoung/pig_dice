describe('randomNumber', function() {

    it("rolls a random number between 1 and 6", function() {
        expect(randomNumber()).to.above(0);
    });

    it("rolls a random number between 1 and 6", function() {
        expect(randomNumber()).to.below(7);
    });

});

describe('roll', function() {

    it("receives a 1 and returns a false", function() {
        expect(Player.prototype.roll(1)).to.equal(false);
    });

    it("receives a 4 and returns a 4", function() {
        expect(Player.prototype.roll(4)).to.equal(4);
    });

});
