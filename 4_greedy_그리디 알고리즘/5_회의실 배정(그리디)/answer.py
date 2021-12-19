import sys
sys.stdin = open("in1.txt", "r")
n = int(input())
meetings = []
for i in range(n):
    a, b = map(int, input().split())
    meetings.append((a, b))

print(meetings)

""" 
# order by y asc
meeting.sort(key=lambda x: (x[1]))

# order by x asc
meeting.sort(key=lambda x: (x[0])) 
"""

# order by y asc,x asc
meetings.sort(key=lambda x: (x[1], x[0]))

print(meetings)

cnt = 0
tail = 0

for meet in meetings:

    if (meet[0] >= tail):
        # print(tail, meet[1])
        cnt += 1
        tail = meet[1]


print("최대 사용 개수 :", cnt)
