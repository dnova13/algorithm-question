import sys
from collections import deque
sys.stdin = open("in2.txt", "r")

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

board = [list(map(int, input().split())) for _ in range(7)]
dis = [[0]*7 for _ in range(7)]

Q = deque()
Q.append((0, 0))
board[0][0] = 1

cnt = 0

while Q:
    tmp = Q.popleft()

    cnt += 1

    for i in range(4):
        x = tmp[0]+dx[i]
        y = tmp[1]+dy[i]

        if 0 <= x <= 6 and 0 <= y <= 6 and board[x][y] == 0:

            # 가지 못하게 막음. board 1로 막음.
            board[x][y] = 1
            dis[x][y] = dis[tmp[0]][tmp[1]]+1
            Q.append((x, y))

if dis[6][6] == 0:
    print(-1)
else:
    print(dis[6][6])

print(cnt)
