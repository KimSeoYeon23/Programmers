function solution(numbers) {
    let engNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(let i=0; i<engNum.length; i++) {
        numbers = numbers.split(engNum[i]).join(i);
    }
    return Number(numbers);
}