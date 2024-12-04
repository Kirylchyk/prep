// Arrays:
var bestNumbers = [7, 77, 4];
var bestLunches = ['chicken soup', 'non-chicken soup'];
var bestBreakfasts = ['fasting', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
var bestBooleans = [true, false];
// Multidimensional Arrays:
var bestMealPlan = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
var bestBooleansTwice = [bestBooleans, bestBooleans];
var numbersMulti = [[[1], [2, 3]], [[7], bestNumbers]];
// tuple =  array with elements of specific types
var favoriteCoordinates = [17, 45, 'N', 142, 30, 'E'];
var tup = ['hi', 'bye'];
var arr = ['there', 'there'];
tup = ['there', 'there']; // No Errors.
//tup = arr; // Type Error! An array cannot be assigned to a tuple.
var tuple = [1, 2, 3];
var concatResult = tuple.concat([4, 5, 6]); // concatResult has the value [1,2,3,4,5,6]
// ... other/ rest params
function addPower(p) {
    var numsToAdd = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numsToAdd[_i - 1] = arguments[_i];
    }
    var answer = 0;
    for (var i = 0; i < numsToAdd.length; i++) {
        answer += Math.pow(numsToAdd[i], p);
    }
    return answer;
}
console.log(addPower(1, 2, 3, 4));
console.log(addPower(2, 2, 3, 4));
