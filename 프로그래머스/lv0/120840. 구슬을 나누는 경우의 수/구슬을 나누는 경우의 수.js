function factorial(n) {
    let bigN = BigInt(n);
    
    if(bigN === BigInt(1) || bigN === BigInt(0)){
        return BigInt(1);
    }
    
    return bigN * factorial(bigN - BigInt(1));
}

function solution(balls, share) {
    return factorial(balls) / (factorial(share) * factorial(balls - share));
}