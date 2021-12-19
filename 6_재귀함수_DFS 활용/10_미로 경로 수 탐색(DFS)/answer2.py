import sys
from collections import deque
sys.stdin = open("in1.txt", "r")

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]


def DFS(x, y):
    global cnt

    if x == 6 and y == 6:
        cnt += 1

    else:
        for i in range(4):
            x1 = x+dx[i]
            y1 = y+dy[i]

            if 0 <= x1 <= 6 and 0 <= y1 <= 6 and board[x1][y1] == 0:
                board[x1][y1] = 1
                DFS(x1, y1)
                board[x1][y1] = 0


if __name__ == "__main__":
    board = [list(map(int, input().split())) for _ in range(7)]

    cnt = 0
    board[0][0] = 1

    DFS(0, 0)
    print(cnt)
