//Write a  function for finding whether a string is a palindrome or not
function doThat (str) {
    let result = [];
    result = str.split('').reverse().join('');
    if (str===result) {
        return true
    }
}

//Write a  function for finding whether a number is a palindrome or not
function isPalindrome(x) {
    if (x < 0) {
        return false;
    }
    const reversed = parseInt(x.toString().split('').reverse().join(''));
    return x === reversed;
}

//Write a recursive function for finding whether a string is a palindrome or not
function isPalindrome2(str) {
    // Base case: if the string is empty or has only one character, it's a palindrome
    if (str.length <= 1) {
        return true;
    }
    // Compare the first and last characters of the string
    if (str[0] !== str[str.length - 1]) {
        return false; // If they are different, it's not a palindrome
    }
    // Slice string (remove 1 and last char.
    // And then recursively check the substring without
    // the first and last characters. So each time the sting will be reduced.
    return isPalindrome2(str.slice(1, -1));
}

function isPalindrome3(str) {
    let left = 0; // Start pointer
    let right = str.length-1; // End pointer, bz of index

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}


console.log(doThat('madam'))
console.log(isPalindrome(111))
console.log(isPalindrome2('madam'))
console.log(isPalindrome3('madam')) //classic solution

