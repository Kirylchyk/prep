let codecademyCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: [number, number, string, number, number, string] = [25, 0 , 'N' , 71, 0, 'W'];


function gpsNavigate(startLatitudeDegrees:number, 
    startLatitudeMinutes:number, 
    startNorthOrSouth:string, startLongitudeDegrees: number, 
    startLongitudeMinutes: number, startEastOrWest:string, 
    endLatitudeDegrees:number, endLatitudeMinutes:number , 
    endNorthOrSouth:string, endLongitudeDegrees: number, 
    endLongitudeMinutes: number,  endEastOrWest:string) {
    /* placeholder*/
  }

gpsNavigate(...codecademyCoordinates, ...bermudaTCoordinates);
//  spread syntax 


/*
spread syntax passes elements of the tuples codecademyCoordinates and bermudaTCoordinates 
as individual arguments to the gpsNavigate function. 

each element from the tuples is taken and spread out as separate arguments.

function gpsNavigate expects individual arguments, not arrays or tuples.

 If to pass codecademyCoordinates and bermudaTCoordinates directly without using the spread syntax, 
 the function would receive two arrays instead of the expected individual values. => error 
*/

function performDanceMove(moveName:string, moveReps:number, hasFlair:boolean):void{
    console.log(`I do the ${moveName} ${moveReps} times !`);
    if(hasFlair){
      console.log('I do it with flair!');
    }
  }
  
  let danceMoves: [string, number, boolean][] = [
    ['chicken beak', 4, false],
    ['wing flap', 4, false],
    ['tail feather shake', 4, false],
    ['clap', 4, false],
    ['chicken beak', 4, true],
    ['wing flap', 4, true],
    ['tail feather shake', 4, true],
    ['clap', 4, true],
  ];
  
  danceMoves.forEach(move => performDanceMove(...move));

  
  //tsc spreadSyntax.ts
  //node spreadSyntax.js