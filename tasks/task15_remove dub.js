//remove duplicates


function task(arr) {

   let sortedArr = arr.sort((a,b) => a-b); //asc
   let result = [];

   for (let i = 0; i<sortedArr.length; i++){
       if (sortedArr[i] === sortedArr[i + 1]) {
           continue;

       } else {
           result.push(sortedArr[i]);
       }
   }

    return result;

}

arr = [6,1,2,3,3,4,5,5];

console.log(task(arr))