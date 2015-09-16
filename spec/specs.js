describe('randomNumber', function() {

    it("rolls a random number between 1 and 6", function() {
        expect(randomNumber()).to.above(0);
    });

    it("rolls a random number between 1 and 6", function() {
        expect(randomNumber()).to.below(7);
    });


});
