var coinCounter = function(input) {
    var p = 1;
    var n = 5;
    var d = 10;
    var q = 25;

    var quarters = input.split(".");
    var temp =   quarters[0];
    var dollars = parseInt(temp) * 4;
    var cents = input[2].concat(input[3]);
    var change = parseInt(cents);
    var qcounter = 0;
    var dcounter = 0;
    var ncounter = 0;
    var pcounter = 0;

    while (parseInt(change / 25) >= 1) {
             change = change - q;
            qcounter++;
            if (qcounter == 3) break;
        }
        while (parseInt(change / 10) >= 1) {
            change = change - d;
            dcounter++;
            if (dcounter > 9) break;
        }
        while (parseInt(change / 5) >= 1) {
            change = change - n;
            ncounter++;
            if (ncounter > 19) break;
        }
        pcounter = change;
        var total_quarters = dollars + qcounter;
        return total_quarters + (" quarters, ") + dcounter + (" dimes, ") + ncounter + (" nickels, ") + pcounter + (" pennies.");

};
