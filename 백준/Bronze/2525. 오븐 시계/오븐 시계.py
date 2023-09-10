H, M = map(int, input().split())
N = int(input())

# 총 분을 계산한다.
total_minutes = H * 60 + M + N

# 총 분을 다시 시간과 분으로 변환한다.
new_H = (total_minutes // 60) % 24  # 24시간을 넘기면 0으로 리셋해야 하므로 % 24를 사용

new_M = total_minutes % 60

print(new_H, new_M)
