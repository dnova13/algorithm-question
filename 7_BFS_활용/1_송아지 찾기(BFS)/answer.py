import sys
from collections import deque

sys.stdin = open("in4.txt", "r")

start, dest = map(int, input().split())

MAX = 100000

lv = 0
chk = [0]*MAX
dis = [0]*MAX

q = deque()

q.append(start)
chk[start] = 1

while q:

    new = q.popleft()

    if new == dest:
        break

    arr = [new - 1, new + 1, new + 5]

    for next in arr:

        if chk[next] == 1 or not (1 <= next <= MAX):
            continue

        q.append(next)
        dis[next] = dis[new] + 1  # 부모 노드 + 1 : lv 정보 넣음.
        chk[next] = 1


print(f"시작 위치: {start}, 도착 위치: {dest}, 최단 경로: {dis[new]}")
