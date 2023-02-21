function solution(my_string) {
    var answer = 0;
    let found = my_string.match(/[0-9]+/g);
    return found
        ? found.map((n) => {
                return parseInt(n)
            }).reduce((a, c) => {
                return a + c
            }, 0)
        : 0;
}