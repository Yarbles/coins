var coinCounter = function(input) {
    var p = 1;
    var n = 5;
    var d = 10;
    var q = 25;

    var quarters = input.split(".");
    console.log(quarters);
    var temp =   quarters[0];
    console.log(temp);
    var dollars = parseInt(temp) * 4;
    console.log(dollars);
    var cents = input[2].concat(input[3]);
    console.log(cents);
    var change = parseInt(cents);
    var qcounter = 0;
    var dcounter = 0;
    var ncounter = 0;
    var pcounter = 0;

    while (parseInt(change / 25) >= 1) {
             change = change - q;
            qcounter++;
            if (qcounter == 3) break;
            console.log("Change " + change);
            console.log("q: " + qcounter);
        }
        while (parseInt(change / 10) >= 1) {
            console.log(change);
            change = change - d;
            dcounter++;
            console.log(dcounter);
            if (dcounter > 9) break;
        }
        while (parseInt(change / 5) >= 1) {
            change = change - n;
            ncounter++;
            console.log(ncounter);
            if (ncounter > 19) break;
        }
        pcounter = change;
        var total_quarters = dollars + qcounter;
        return total_quarters + (" quarters, ") + dcounter + (" dimes, ") + ncounter + (" nickels, ") + pcounter + (" pennies.");

};
