const input = require('fs').readFileSync("/dev/stdin").toString().trim();

let n = Number(input);
let result = 0;

for(let i=1; i<=n; i++) {
    result += i;
}

console.log(result);