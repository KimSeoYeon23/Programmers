function solution(myString) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
    
    for (let char of alphabet) {
        myString = myString.replaceAll(char, 'l');
    }
    
    return myString;
}