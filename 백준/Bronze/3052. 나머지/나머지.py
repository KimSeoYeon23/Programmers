num = []

for _ in range(1, 11):
    num_list = int(input())
    num.append(num_list%42)
print(len(set(num)))
    