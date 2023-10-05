# 입력받은 n만큼 반복
n = int(input())
for _ in range(n):
    # 각 줄에 있는 d, f, p 값을 입력받음
    d, f, p = map(float, input().split())
    # 필요한 총 금액을 계산: 강아지 수 x 강아지당 필요한 사료의 양 x 사료의 가격
    total = d * f * p
    # 결과를 출력. 소수 둘째자리까지 반올림하여 출력
    print(f"${total:.2f}")