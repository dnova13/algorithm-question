import sys
import random as r
from collections import deque

sys.stdin = open("in0.txt", 'r')

n = 7
sq = [list(map(int, input().split())) for _ in range(n)]

for i in sq:
    for j in i:
        print(j, end=" ")
    print()

print()


cnt = 0
chk = [[0]*n for i in range(n)]

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]


def DFS(v, x, y):

    global cnt

    if x == 6 and y == 6:
        cnt += 1

    else:

        if y-1 > -1 and sq[x][y-1] == 0 and chk[x][y-1] == 0:
            chk[x][y] = 1
            DFS(v+1, x, y-1)
            chk[x][y] = 0

        if x-1 > -1 and sq[x-1][y] == 0 and chk[x-1][y] == 0:
            chk[x][y] = 1
            DFS(v+1, x-1, y)
            chk[x][y] = 0

        if x+1 < n and sq[x+1][y] == 0 and chk[x+1][y] == 0:
            chk[x][y] = 1
            DFS(v+1, x+1, y)
            chk[x][y] = 0

        if y+1 < n and sq[x][y+1] == 0 and chk[x][y+1] == 0:
            chk[x][y] = 1
            DFS(v+1, x, y+1)
            chk[x][y] = 0


DFS(0, 0, 0)

print("cnt", cnt)


""" 코드 간략화  """


dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]

cnt = 0


def DFS1(x, y):

    global cnt

    if x == 6 and y == 6:
        cnt += 1

    else:

        for i in range(4):

            x1 = x+dx[i]
            y1 = y+dy[i]

            if x1 > -1 and x1 < n and y1 > -1 and y1 < n and sq[x1][y1] == 0:

                sq[x][y] = 1
                DFS1(x1, y1)
                sq[x][y] = 0


DFS1(0, 0)

print("cnt", cnt)
