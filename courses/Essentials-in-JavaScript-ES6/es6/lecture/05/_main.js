
// function blastoff() {
//   console.log("3...2...1... blastoff");
// }
// blastoff();

// setTimeout(() => {
//   console.log("3...2...1... blastoff");  
// }, 1000)

// const blastoff = () => {
//   console.log("3...2...1... blastoff");  
// }
// blastoff();


/**
 * Helping With the Map Method
 */

let points = [10, 20, 30];

let addOne = (elem) => {
  return elem + 1;
} 

points = points.map(addOne);
points = points.map(elem => elem + 1);

console.log(points);


let lengths = [3, 7, 5];
let multiple = 8;

const scale = (multiple) => {
  return lengths.map(elem => elem * multiple);
};

console.log(scale(multiple));


/**
 * Filtering in ES6
 */

let isPassing = (grade) => {
  return grade >= 70;
}
let scores = [90, 80, 70, 50, 20];
//let passing = scores.filter(isPassing);
let passing = scores.filter(elem => elem >= 70);

console.log(">>",passing);


