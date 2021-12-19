import sys
import random as r
from collections import deque

sys.stdin = open("in2.txt", 'r')
n = int(input())
sq = [list(map(int, input().split())) for _ in range(n)]
chk = [[0]*n for i in range(n)]


que = deque()

print(chk)
print(sq)

que.append([n//2, n//2])
total = sq[n//2][n//2]
chk[n//2][n//2] = 1

while True:

    new = que.popleft()
    if 0 in new:
        break

    arr = [[new[0]-1, new[1]], [new[0], new[1] + 1],
           [new[0] + 1, new[1]], [new[0], new[1]-1]]

    for next in arr:

        if chk[next[0]][next[1]] == 1:
            continue

        que.append(next)
        chk[next[0]][next[1]] = 1

        total += sq[next[0]][next[1]]

print(total)
