def solution(myString, pat):
    text = ''
    for str in myString:
        if str == "A":
            text += "B"
        else:
            text += "A"
    return int(pat in text)