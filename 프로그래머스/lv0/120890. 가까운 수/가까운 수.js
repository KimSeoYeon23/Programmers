function solution(array, n) {
    var answer = 0;
    var result = [];
    array.sort((a, b) => a - b);
    for (let i=0; i<array.length; i++){
      result.push(Math.abs(array[i]-n))
    } 
    answer = Math.min(...result);
    return array[result.indexOf(answer)];
}