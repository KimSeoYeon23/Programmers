function solution(s) {
    var answer = '';
    let nums = s.split(' ');
    let newArr = nums.map((num) => {
        return Number(num)
    }).sort((a, b) => a - b);
    answer = `${newArr[0]} ${newArr[newArr.length - 1]}`
    return answer;
}