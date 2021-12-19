import sys
import random as r
from collections import deque

sys.stdin = open("in2.txt", 'r')

n = 7
sq = [list(map(int, input().split())) for _ in range(n)]

for i in sq:
    for j in i:
        print(j, end=" ")
    print()

print()

que = deque()
chk = [[0]*n for i in range(n)]
dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]
chk[0][0] = 1

que.append([0, 0])
lv = 0

cnt = 0

while que:

    new = que.popleft()

    cnt += 1

    if new[0] == new[1] and new[0] == 6:
        break

    for i in range(4):

        x = new[0]+dx[i]
        y = new[1]+dy[i]

        # 좌표 범위 초과시
        if x <= -1 or x >= 7 or y <= -1 or y >= 7:
            continue

        # 경로 및 노드 중복 검사.
        if chk[x][y] > 0 or sq[x][y] > 0:
            continue

        que.append([x, y])
        chk[x][y] = chk[new[0]][new[1]] + 1

print(chk[6][6] - 1)
print(cnt)
