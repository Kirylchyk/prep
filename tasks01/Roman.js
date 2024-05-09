//Roman to Integer

function romanToInt(romanNumeral) {

    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < romanNumeral.length; i++) {

        const current = romanNumerals[romanNumeral[i]]; //arabic numeral
        const next = romanNumerals[romanNumeral[i+1]];

        if (next > current) {
            result += next - current;
            i++; // Skip the next character
        } else {
            result += current;
        }

    }

    return result;
}

console.log(romanToInt("XXI"))
console.log(romanToInt("IV"))
console.log(romanToInt("VII"))


//Integer to Roman
function intToRoman(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let roman = '';
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            //append/add value to roman
            roman += numerals[i];
            //reduce num by found value
            num -= values[i];
        }
    }
    return roman;
}

// Examples
console.log(intToRoman(21));  // Outputs: "XXI"
console.log(intToRoman(4));   // Outputs: "IV"
console.log(intToRoman(7));   // Outputs: "VII"

