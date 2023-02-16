function solution(n)
{
    var answer = 0;
    var string = n.toString();
    var mapFn = (arg) => Number(arg);
    var arr = Array.from(string, mapFn);
    
    arr.reduce((a, b) => answer = a + b, 0)


    return parseInt(answer);
}