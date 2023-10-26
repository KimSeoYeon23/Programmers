def solution(s, n):
    answer = []
    for char in s:
        if char.isalpha():
            start = ord('A') if char.isupper() else ord('a')
            answer.append(chr((ord(char) - start + n) % 26 + start))
        else:
            answer.append(char)
    return ''.join(answer)