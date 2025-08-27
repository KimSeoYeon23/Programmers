def solution(myString):
    answer = ''
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
    for i in alphabet:
        myString = myString.replace(i, 'l')
        answer = myString
    return answer