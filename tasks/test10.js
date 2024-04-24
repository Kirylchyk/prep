//find vowels

function doThat(str) {

    let vowels = ['a', 'o', 'y', 'u'];

    for (let char of str) {
         if (vowels.includes(char)) {
             return true;
         }
    }
    return false;
}

console.log(doThat("hhhtfdsar"));
