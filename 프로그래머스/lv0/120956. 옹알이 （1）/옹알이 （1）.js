function solution(babbling) {
    var answer = 0;
    answer = babbling
          .map((_) => _.replace(/aya|ye|woo|ma/g, ''))
          .filter((str) => !str).length;
    return answer;
}