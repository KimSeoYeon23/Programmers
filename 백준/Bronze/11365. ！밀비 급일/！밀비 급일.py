while True:
  s = input()
  if s == 'END':
    break
  reverse_s = list(s)
  reverse_s.reverse()
  print(''.join(reverse_s))