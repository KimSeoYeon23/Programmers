function solution(str_list, ex) {
    var answer = str_list.map((str, i) => {
        if(!str.includes(ex)) {
            return str
        }
    }).join('')
    return answer;
}