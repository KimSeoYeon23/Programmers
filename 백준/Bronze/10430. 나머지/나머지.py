A, B, C = input().split()

print((int(A)+int(B))%int(C))
print(((int(A)%int(C))+(int(B)%int(C)))%int(C))
print((int(A)*int(B))%int(C))
print(((int(A)%int(C))*(int(B)%int(C)))%int(C))