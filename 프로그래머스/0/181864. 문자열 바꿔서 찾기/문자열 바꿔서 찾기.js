function solution(myString, pat) {
    let text = ''
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === 'A') {
            text += 'B'
        } else {
            text += 'A'
        }
    }
    return Number(text.includes(pat))
}