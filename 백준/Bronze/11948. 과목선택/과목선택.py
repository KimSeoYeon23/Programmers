science_subjects = []

for _ in range(4):
    science_subjects.append(int(input()))
three_subjects = sum(science_subjects) - min(science_subjects)

history_geo_subjects = []
for _ in range(2):
    history_geo_subjects.append(int(input()))
two_subjects = max(history_geo_subjects)

print(three_subjects + two_subjects)