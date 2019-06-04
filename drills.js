'use strict';

function repeat(fn, n){
  for (let i = 0; i < n; i++){
    fn();
  }

}
function hello(){
  console.log('Hello world');
}

function goodbye(){
  console.log('Goodbye world');
}

repeat(hello, 5);



function filter(arr, fn) {
  const newArray = [];
  for (let i =0; i < arr.length; i++) {
    if(fn(arr[i]) === true) {
      newArray.push(arr[i]);
    }

  }
  return newArray;
}


// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

//-------------------------------------------------------------------------
function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location){
    warningCounter ++;
    let time = (warningCounter > 1) ? 'times' : 'time';
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${time} today!`) ;
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const waterWarning = hazardWarningCreator('Flooding on road');
const fireWarning = hazardWarningCreator('Fires everywhere');

rocksWarning('1st and Mercer');
rocksWarning('Columbus and Main St');
waterWarning('198th NE and 128th NW');
waterWarning('Bob street and First Ave');
fireWarning('Mountain Street and River Way');
fireWarning('Boston Ave N and Acton St');

//-------------------------------------------------------------------------


const turtleMovement = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
const positiveMovement = turtleMovement.filter(steps => steps[0] >= 0 && steps[1] >=0);
console.log(positiveMovement);

const totalSteps = positiveMovement.map(steps => Math.abs(steps[0]) + Math.abs(steps [1]));

totalSteps.forEach(steps => console.log(steps));
//Movement #1: 3 steps
//Movement #2: 1 step

totalSteps.forEach(function(value, index){
    
  let plural = 'step';
  if (value !== 1){
    plural = 'steps';
  }
    
  console.log(`Movement #${index + 1}: ${value} ${plural}`);
});

//----------------------------------------

let wordsToDecode = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
const newArray = wordsToDecode.split(' ');

let decoded = newArray.reduce(function(decodedMessage, word){
  if (word.length === 3){
    return decodedMessage + ' ';
  } else {
    return decodedMessage + word[word.length-1].toUpperCase();
  }
},'');



