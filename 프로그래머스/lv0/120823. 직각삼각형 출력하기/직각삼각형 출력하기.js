const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    var n = input[0];
    var array = [,,,];
    for(var i=0; i<n; i++) {
        if(i !== n) {
            array[n] += '*'
        }
        console.log(array[n].split('undefined').join(''))
    }
    
});