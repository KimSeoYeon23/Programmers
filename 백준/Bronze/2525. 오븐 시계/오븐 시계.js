var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var time = input[0].split(' ');
var hour = parseInt(time[0]);
var minute = parseInt(time[1]);
var cookTime = parseInt(input[1]);

minute += cookTime;
if(minute >= 60) {
    hour += Math.floor(minute / 60);
    minute %= 60;
}
if(hour >= 24) hour %= 24;

console.log(hour + " " + minute);