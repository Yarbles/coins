// var coinCounter = function(input) {
//     var p = 1;
//     var n = 5;
//     var d = 10;
//     var q = 25;
//      if (input === 1) {
//          return '1 penny';
//         }
//         else if (input === 5) {
//             return '1 nickel';
//         }
//          else if (input === 10) {
//             return '1 dime';
//         }
//         else if (input === 25) {
//             return '1 quarter';
//         }
//         else if (input === p+n) {
//             return '1 penny, 1 nickel';
//         }
//         else if (input === p+n+d) {
//             return '1 penny, 1 nickel, 1 dime';
//         }
//         else if (input === p+n+d+q) {
//             return '1 penny, 1 nickel, 1 dime, 1 quarter';
//         }
// };

var coinCounter = function(input) {
    var p = 1;
    var n = 5;
    var d = 10;
    var q = 25;
    if (input <= 4) {
        return input.toString().concat(' pennies');
    }
};
