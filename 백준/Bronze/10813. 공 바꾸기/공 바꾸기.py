# N은 바구니의 개수, M은 연산의 개수
N, M = map(int, input().split())

# 바구니 초기화 (1부터 N까지의 공을 1번 바구니부터 N번 바구니까지 넣음)
basket = [i for i in range(1, N + 1)]

# M번의 연산 수행
for _ in range(M):
    i, j = map(int, input().split())
    basket[i-1], basket[j-1] = basket[j-1], basket[i-1]

# 결과 출력
print(" ".join(map(str, basket)))
