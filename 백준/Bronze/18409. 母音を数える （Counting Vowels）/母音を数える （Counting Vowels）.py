length = int(input())
word = input()
vowel = 0

for i in word:
  if i in ["a", "i", "u", "e", "o"]:
    vowel += 1
print(vowel)