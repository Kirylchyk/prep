// Arrays:
let bestNumbers: number[] = [7,77,4];
let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts: string[]= ['fasting', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleans: boolean[] = [true, false];

// Multidimensional Arrays:
let bestMealPlan: string[][] = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
let bestBooleansTwice: boolean[][] = [bestBooleans, bestBooleans];
let numbersMulti: number[][][] = [ [[1],[2,3]], [[7],bestNumbers] ];


// tuple =  array with elements of specific types

let favoriteCoordinates:[number, number, string, number, number, string] = [17, 45, 'N', 142, 30, 'E'];

let tup: [string, string] = ['hi', 'bye'];
let arr: string[] = ['there','there'];
tup = ['there', 'there']; // No Errors.
//tup = arr; // Type Error! An array cannot be assigned to a tuple.

let tuple: [number, number, number] = [1,2,3];
let concatResult = tuple.concat([4,5,6]); // concatResult has the value [1,2,3,4,5,6]

// ... other/ rest params
function addPower(p: number, ...numsToAdd: number[]): number {
    let answer = 0;
    for (let i = 0; i < numsToAdd.length; i++) {
      answer += numsToAdd[i] ** p;
    }
    return answer;
  }
  
  console.log(addPower(1, 2, 3, 4)); // 2^1+3^1+4^1 = 9
  console.log(addPower(2, 2, 3, 4)); // 2^2+3^2+4^2 = 29
