function solution(i, j, k) {
    var answer = 0;
    var cnt = 0;
    for(let m=i; m<=j; m++){
        if(String(m).length > 1){
            for(var key in String(m)){
                if(String(m)[key].includes(String(k))){
                    cnt++
                }  
            }
        } else {
            if(String(m).includes(String(k))){
                cnt++
            }  
        }
    }

    return cnt;
}