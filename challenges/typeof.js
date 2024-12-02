let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 
    3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];


function checkCustomersArray(arr){
  for (let i=0; i<arr.length; i++) {
    if (typeof arr[i] != 'string') {
      console.log(`Type error: ${arr[i]} should be a string!`)
    }
  }
}
checkCustomersArray(customersArray);

function stringPush(val) {
if (typeof val === 'string') {
  customersArray.push(val)
}
};


