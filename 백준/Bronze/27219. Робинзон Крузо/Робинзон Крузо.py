n = int(input())

# n을 5로 나눈 몫과 나머지를 구한다.
quotient, remainder = divmod(n, 5)

# quotient만큼 "V"를 출력하고 remainder만큼 "I"를 출력한다.
print("V" * quotient + "I" * remainder)