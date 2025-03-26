export function numberToWordsIndian(num: number): string {
  if (num === 0) return "Zero";

  const belowTwenty = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const indianUnits = ["", "Thousand", "Lakh", "Crore"];

  function helper(n: number): string {
      if (n === 0) return "";
      else if (n < 20) return belowTwenty[n] + " ";
      else if (n < 100) return tens[Math.floor(n / 10)] + " " + helper(n % 10);
      else return belowTwenty[Math.floor(n / 100)] + " Hundred " + helper(n % 100);
  }

  function convertIntegerToWords(n: number): string {
      let result = "";
      let units = [];
      
      units.push(n % 1000);
      n = Math.floor(n / 1000);

      while (n > 0) {
          units.push(n % 100);
          n = Math.floor(n / 100);
      }

      for (let i = units.length - 1; i >= 0; i--) {
          if (units[i] !== 0) {
              result += helper(units[i]) + indianUnits[i] + " ";
          }
      }

      return result.trim();
  }

  const [integerPart, decimalPart] = num.toString().split(".");
  let words = convertIntegerToWords(parseInt(integerPart));

  if (decimalPart) {
      let decimalNumber = parseInt(decimalPart);
      if (decimalNumber > 0) {
          words += " Point " + convertIntegerToWords(decimalNumber);
      }
  }

  return words.trim();
}
