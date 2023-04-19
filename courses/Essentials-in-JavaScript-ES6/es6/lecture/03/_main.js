/**
 * Constats
 */ 

const array = [1, 2, 3];
array.push(4);
console.log(array);
// array = 3; -- error;


/**
 * Literals and Strings
 */

var a = "helo";
var b = "world";
var c = a + " " + b;
console.log("Using '+': ", c);

let d = `hello ${b}`;
console.log("Using ` `:", d);
