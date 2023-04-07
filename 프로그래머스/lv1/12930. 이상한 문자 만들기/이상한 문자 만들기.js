function solution(s) {
    let arr = s.split(' ');
    var result2 = '';
    let result = [];
    
    arr.map((item) => {
        for(let i=0; i<item.length; i++) {
            if(i % 2 !== 0) {
                result2 += item[i].toLowerCase();
            } else {
                result2 += item[i].toUpperCase();
            }
        }
        result.push(result2);
        result2 = ''
    })
    
    let answer = result.join([' ']);
    return answer;
}