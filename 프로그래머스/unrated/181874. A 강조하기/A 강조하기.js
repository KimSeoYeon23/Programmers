function solution(myString) {
    // 모든 'a'를 'A'로 변환
    let transformed = myString.replace(/a/g, 'A');
    
    // 'A'가 아닌 모든 대문자를 소문자로 변환
    transformed = transformed.replace(/[^A]/g, (char) => char.toLowerCase());

    return transformed;
}
