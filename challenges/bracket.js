function isValid(s) {

    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // Stack to keep track of opening brackets
    const stack = [];
    

    for (let char of s) {
        if (char in bracketMap) {  
            let topElement = stack.length > 0 ? stack.pop() : '#';
  
            if (bracketMap[char] !== topElement) {
                return false;
            }
        } else {  
            stack.push(char);
        }
    }
    
    return stack.length === 0;  
}


const s = "([{}])";
console.log(isValid(s));  

