/**
 * Understanding the Spread Operator
 */

let a = [7, 8, 9];
let b = [6, ...a, 10];
console.log(b);

function print(a, b, c) {
  console.log(a, b, c);
}

let z = [1, 2, 3];
print(...z);

function print2(...z) {
  console.log(z);
}

print2(1,2,3,4,5,6);

/**
 * Destructing Assignment - Arrays
 */

let c = [100, 200];
let aa = c[0];
let bb = c[1];

console.log(aa,bb);


let fellowship = ["Frodo", "Gandalf", "Aragon"];
let [hobbit, wizard, ranger] = fellowship;
console.log(hobbit, wizard, ranger);

let d = [100, 200, 300, 400];
let [head, ...tail] = d;
console.log(head, tail);


let wizard2 = {
  magical: true,
  power: 10
};

//let magical = wizard2.match;
//let power = wizard2.power;
let { magical, power } = wizard2;

console.log(magical, power);



