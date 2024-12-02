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

