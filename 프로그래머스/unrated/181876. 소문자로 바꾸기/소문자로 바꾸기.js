function solution(myString) {
    let arr = myString.split('');
    return arr.map((str, i) => arr[i] === str.toUpperCase() ? str.toLowerCase() : str).join('');
}