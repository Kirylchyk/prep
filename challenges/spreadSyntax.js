var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var codecademyCoordinates = [40, 43.2, 'N', 73, 59.8, 'W'];
var bermudaTCoordinates = [25, 0, 'N', 71, 0, 'W'];
function gpsNavigate(startLatitudeDegrees, startLatitudeMinutes, startNorthOrSouth, startLongitudeDegrees, startLongitudeMinutes, startEastOrWest, endLatitudeDegrees, endLatitudeMinutes, endNorthOrSouth, endLongitudeDegrees, endLongitudeMinutes, endEastOrWest) {
    /* placeholder*/
}
gpsNavigate.apply(void 0, __spreadArray(__spreadArray([], codecademyCoordinates, false), bermudaTCoordinates, false));
//  spread syntax 
/*
spread syntax passes elements of the tuples codecademyCoordinates and bermudaTCoordinates
as individual arguments to the gpsNavigate function.

each element from the tuples is taken and spread out as separate arguments.

function gpsNavigate expects individual arguments, not arrays or tuples.

 If to pass codecademyCoordinates and bermudaTCoordinates directly without using the spread syntax,
 the function would receive two arrays instead of the expected individual values. => error
*/
function performDanceMove(moveName, moveReps, hasFlair) {
    console.log("I do the ".concat(moveName, " ").concat(moveReps, " times !"));
    if (hasFlair) {
        console.log('I do it with flair!');
    }
}
var danceMoves = [
    ['chicken beak', 4, false],
    ['wing flap', 4, false],
    ['tail feather shake', 4, false],
    ['clap', 4, false],
    ['chicken beak', 4, true],
    ['wing flap', 4, true],
    ['tail feather shake', 4, true],
    ['clap', 4, true],
];
danceMoves.forEach(function (move) { return performDanceMove.apply(void 0, move); });
//tsc spreadSyntax.ts
//node spreadSyntax.js
