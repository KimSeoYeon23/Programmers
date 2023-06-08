var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();
var N = parseInt(input);

for (var i = 1; i <= 9; i++) {
    console.log(N + " * " + i + " = " + N * i);
}
