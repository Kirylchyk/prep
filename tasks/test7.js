//Return the length of the last word in the string.
function doThat (s) {
   let trimArray = s.trim();
   let array = trimArray.split(' ');
   let lastWord = array[array.length-1];
   return lastWord.length;

}

console.log(doThat("Hello World "));//6