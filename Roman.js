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