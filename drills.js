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

filter(myNames);
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