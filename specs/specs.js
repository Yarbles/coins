describe('coinCounter', function() {
    it("will display a penny if the user inputs 1", function() {
        expect(coinCounter(1)).to.equal('1 penny');
    });

    it("will display a nickel if the user inputs 5", function() {
        expect(coinCounter(5)).to.equal('1 nickel');
    });
    it("will display a dime if the user inputs 10", function() {
        expect(coinCounter(10)).to.equal('1 dime');
    });
    it("will display a quarter if the user inputs 25", function() {
        expect(coinCounter(25)).to.equal('1 quarter');
    });
    it("will display a nickel and a penny if the user inputs 6", function() {
        expect(coinCounter(6)).to.equal('1 penny, 1 nickel');
    });
    it("will display a nickel and a penny and a dime if the user inputs 16", function() {
        expect(coinCounter(16)).to.equal('1 penny, 1 nickel, 1 dime');
    });
    it("will display a penny, a nickel, a dime, and a quarter if the user inputs 41", function () {
        expect(coinCounter(41)).to.equal('1 penny, 1 nickel, 1 dime, 1 quarter');
    });
    it("will display 4 pennies if the user inputs 4", function() {
        expect(coinCounter(4)).to.equal('4 pennies');
    });
});
