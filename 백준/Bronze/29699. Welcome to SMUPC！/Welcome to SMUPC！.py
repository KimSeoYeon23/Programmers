s = "WelcomeToSMUPC"
N = int(input())

if N >= 1 and N < 15:
  print(s[N-1])
elif N == 15:
  print(s[0])
elif N > 15:
  if (N%14) == 0:
    print(s[13])
  elif (N%14) != 0:
    print(s[(N%14) - 1])