let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

let num1 = Number(input[0]);
let num2 = Number(input[1]);

let oneNum = num2 % 10;
let tenNum = Math.floor((num2 % 100) / 10);
let hundredNum = Math.floor(num2 / 100);

console.log(num1 * oneNum);
console.log(num1 * tenNum);
console.log(num1 * hundredNum);
console.log(num1 * num2);