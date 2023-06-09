function solution(ineq, eq, n, m) {
    let result = 0;
    if(ineq == "<" && eq == "=") {
        if(n <= m) result = 1;
    }
    else if(ineq == "<" && eq == "!") {
        if(n < m) result = 1;
    }
    else if(ineq == ">" && eq == "=") {
        if(n >= m) result = 1;
    }
    else if(ineq == ">" && eq == "!") {
        if(n > m) result = 1;
    }
    return result
}