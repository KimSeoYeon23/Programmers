N = int(input())
number = []
for i in range(N):
    nNumber = int(input())
    number.append(nNumber)
sortNum = sorted(number)

for i in range(len(number)):
    print(sortNum[i])
 