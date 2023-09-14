N = int(input())
M = list(map(int, input().split()))
max_score = max(M)

new_list = []

for score in M:
  new_list.append(score/max_score * 100)

test_avg = sum(new_list)/N
print(test_avg)