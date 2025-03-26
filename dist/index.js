"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberToWordsIndian = void 0;
function numberToWordsIndian(num) {
    if (num === 0)
        return "Zero";
    var belowTwenty = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    var tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    var indianUnits = ["", "Thousand", "Lakh", "Crore"];
    function helper(n) {
        if (n === 0)
            return "";
        else if (n < 20)
            return belowTwenty[n] + " ";
        else if (n < 100)
            return tens[Math.floor(n / 10)] + " " + helper(n % 10);
        else
            return belowTwenty[Math.floor(n / 100)] + " Hundred " + helper(n % 100);
    }
    function convertIntegerToWords(n) {
        var result = "";
        var units = [];
        units.push(n % 1000);
        n = Math.floor(n / 1000);
        while (n > 0) {
            units.push(n % 100);
            n = Math.floor(n / 100);
        }
        for (var i = units.length - 1; i >= 0; i--) {
            if (units[i] !== 0) {
                result += helper(units[i]) + indianUnits[i] + " ";
            }
        }
        return result.trim();
    }
    var _a = num.toString().split("."), integerPart = _a[0], decimalPart = _a[1];
    var words = convertIntegerToWords(parseInt(integerPart));
    if (decimalPart) {
        var decimalNumber = parseInt(decimalPart);
        if (decimalNumber > 0) {
            words += " Point " + convertIntegerToWords(decimalNumber);
        }
    }
    return words.trim();
}
exports.numberToWordsIndian = numberToWordsIndian;
