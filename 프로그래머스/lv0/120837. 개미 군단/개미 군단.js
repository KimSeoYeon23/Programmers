function solution(hp) {
    var answer = 0;
    let general = Math.floor(hp / 5)
    let soldier = Math.floor((hp - general * 5) / 3)
    let worker = hp - (general * 5) - (soldier * 3)

    answer = general + soldier + worker

    return answer;
}