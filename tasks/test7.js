//Return the length of the last word in the string.
function doThat (s) {
   let trimArray = s.trim();
   let array = trimArray.split(' ');
   let lastWord = array[array.length-1];
   let lastWordlength = lastWord.length;
   return lastWordlength;

}

console.log(doThat("Hello World "));