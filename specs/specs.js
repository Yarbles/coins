describe('coinCounter', function() {
    it("will display a penny if the user inputs 1", function() {
        expect(coinCounter('0.55')).to.equal('2 quarters, 0 dimes, 1 nickels, 0 pennies.');
    });

    // it("will display a nickel if the user inputs 5", function() {
    //     expect(coinCounter('0.05')).to.equal('1 nickels');
    // });
    // it("will display a dime if the user inputs 10", function() {
    //     expect(coinCounter('0.10')).to.equal('1 dimes');
    // });
    // it("will display a quarter if the user inputs 25", function() {
    //     expect(coinCounter('0.25')).to.equal('1 quarters');
    // });
    // it("will display a nickel and a penny if the user inputs 6", function() {
    //     expect(coinCounter('0.06')).to.equal('1 penny, 1 nickels');
    // });
    // it("will display a nickel and a penny and a dime if the user inputs 16", function() {
    //     expect(coinCounter('0.16')).to.equal('1 pennies, 1 nickels, 1 dimes');
    // });
    // it("will display a penny, a nickel, a dime, and a quarter if the user inputs 41", function () {
    //     expect(coinCounter('0.41')).to.equal('1 pennies, 1 nickels, 1 dimes, 1 quarters');
    // });
    // it("will display 4 pennies if the user inputs 4", function() {
    //     expect(coinCounter('0.04')).to.equal('4 pennies');
    // });
    // it("will display 1 nickels and 3 pennies if the user inputs 8", function() {
    //     expect(coinCounter('0.08')).to.equal('1 nickels, 3 pennies');
    // });
});
