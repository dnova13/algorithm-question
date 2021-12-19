import sys
from collections import deque
sys.stdin = open("in1.txt", "rt")

n, k = map(int, input().split())

quen = list(range(1, n+1))

# deque 양방향 큐
""" 
데크(deque)에 존재하는 메서드(method)는 대략 다음과 같다.

deque.append(item): item을 데크의 오른쪽 끝에 삽입한다.
deque.appendleft(item): item을 데크의 왼쪽 끝에 삽입한다.
deque.pop(): 데크의 오른쪽 끝 엘리먼트를 가져오는 동시에 데크에서 삭제한다.
deque.popleft(): 데크의 왼쪽 끝 엘리먼트를 가져오는 동시에 데크에서 삭제한다.
deque.extend(array): 주어진 배열(array)을 순환하면서 데크의 오른쪽에 추가한다.
deque.extendleft(array): 주어진 배열(array)을 순환하면서 데크의 왼쪽에 추가한다.
deque.remove(item): item을 데크에서 찾아 삭제한다.
deque.rotate(num): 데크를 num만큼 회전한다(양수면 오른쪽, 음수면 왼쪽).
"""

dq = deque(quen)
cnt = 1

while(len(dq) > 1):

    num = dq.popleft()

    if (cnt == k):
        cnt = 0

    else:
        dq.append(num)

    cnt += 1


print("answer:", dq.popleft())
