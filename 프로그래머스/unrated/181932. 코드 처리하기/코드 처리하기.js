function solution(code) {
    let mode = 0;
    let ret = '';

    for(let idx = 0; idx < code.length; idx++) {
        if(code[idx] === '1') {
            mode = 1 - mode; // mode를 변경합니다. 만약 mode가 0이었다면 1이 되고, 1이었다면 0이 됩니다.
        } else {
            if ((mode === 0 && idx % 2 === 0) || (mode === 1 && idx % 2 !== 0)) {
                ret += code[idx]; // mode와 idx가 만족하는 조건에 따라 ret에 code[idx]를 추가합니다.
            }
        }
    }

    return ret === '' ? 'EMPTY' : ret; // ret이 빈 문자열이라면 "EMPTY"를, 아니라면 ret을 return 합니다.
}