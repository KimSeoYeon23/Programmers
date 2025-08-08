function solution(my_strings, parts) {
    var answer = '';
    for (let i = 0; i < my_strings.length; i++) {
        const firstParts = parts[i][0]
        const secondParts = parts[i][1] + 1
        const str = my_strings[i].substring(firstParts, secondParts)
        answer += str
    }
    return answer;
}