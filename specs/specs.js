describe('coinCounter', function() {
    it("will display a penny if the user inputs 1", function() {
        expect(coinCounter(1)).to.equal('1 pennies');
    });

    it("will display a nickel if the user inputs 5", function() {
        expect(coinCounter(5)).to.equal('1 nickel');
    });
});
