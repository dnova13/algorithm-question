import random as r
n = 5
arr = [[r.randrange(1, 100) for i in range(n)] for j in range(n)]

for i in arr:
    for j in i:
        print(j, end=" ")
    print()

print()

half = n//2
total = 0

for i in range(n):
    if (i <= half):
        # print(arr[i][(half-1)-i:(half-1)+i+1])
        total += sum(arr[i][(half)-i:(half)+i+1])
    else:
        # print(arr[i][(half-1)-(n-1-i):(half-1)+(n-1-i)+1])
        total += sum(arr[i][(half)-(n-1-i):(half)+(n-1-i)+1])

print(total)


""" ------------------------------------------------------------------- """
total = 0

for i in range(n):
    if (i <= half):
        for a in arr[i][(half)-i:(half)+i+1]:
            total += a
    else:
        for a in arr[i][(half)-(n-1-i):(half)+(n-1-i)+1]:
            total += a

print(total)


""" ------------------------------------------------------------------- """
total = 0
start = end = half

for i in range(n):
    for j in range(start, end+1):
        total += arr[i][j]
    if i < n//2:
        start -= 1
        end += 1
    else:
        start += 1
        end -= 1

print(total)
