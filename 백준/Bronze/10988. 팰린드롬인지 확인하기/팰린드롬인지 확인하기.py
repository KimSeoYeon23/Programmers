palindrome = str(input())

rev = palindrome[::-1]

if palindrome == rev:
  print(1)
else:
  print(0)