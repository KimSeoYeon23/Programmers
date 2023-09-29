T, F, S, P, C = map(int, input().split())
T2, F2, S2, P2, C2 = map(int, input().split())

visiting = T*6 + F*3 + S*2 + P+C*2
home = T2*6 + F2*3 + S2*2 + P2+C2*2

print(visiting, home, end=" ")