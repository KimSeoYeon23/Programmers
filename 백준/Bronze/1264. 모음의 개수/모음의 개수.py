vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

while True:
  s = input()
  count = 0
  if s == '#':
    break
  for c in s:
    if c in vowel:
      count += 1
  print(count)
    