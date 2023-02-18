function solution(id_pw, db) {
    var answer = '';
    for(var i=0; i<db.length; i++) {
        console.log(`
            id : ${id_pw[0]}  db id : ${db[i][0]}
            pw: ${id_pw[1]}   db pw : ${db[i][1]}

        `)
        if(id_pw[0] === db[i][0] && id_pw[1] === db[i][1]) {
            return answer = 'login';
            break;
        } else if(id_pw[0] === db[i][0] && id_pw[1] !== db[i][1]) {
            answer = 'wrong pw';
            break;
        } else {
            answer = 'fail';
        }
    }
    return answer;
}