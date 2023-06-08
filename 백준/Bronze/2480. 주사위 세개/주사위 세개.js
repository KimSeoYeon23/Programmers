var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

input.sort((a, b) => a - b);

var result = 0;

if(input[0] === input[1] && input[1] === input[2]) {
    result = 10000 + input[0] * 1000;
} else if(input[0] === input[1] || input[1] === input[2]) {
    result = 1000 + input[1] * 100;
} else {
    result = input[2] * 100;
}

console.log(result);