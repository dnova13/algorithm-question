import sys
sys.stdin = open("in1.txt", "r")
wires_cnt, n = map(int, input().split())

print(wires_cnt, n)
wires = [int(input()) for _ in range(wires_cnt)]


print("wires", wires)
print("원하는 개수: ", n, end='\n')

cnt = 0
rest = 0
lt = None
rt = 0

# 최소값 최대값 구함.
for w in wires:

    if (lt == None or lt > w):
        lt = w
    if (rt < w):
        rt = w

print(lt, rt)

# 이분 검색 시작.
# 나누기 원하는 n 개의 길이는 같거나 커야됨.
while(not (lt > rt and n <= cnt)):

    mid = (lt+rt)//2
    cnt = 0

    for w in wires:
        k = w//mid
        cnt += k

    print("#### n :", cnt)
    # 최소 길이 구하기 원하다면 이쪽에 = 붙임
    if (n > cnt):
        rt = mid-1

    # 최대 길이를 구하기 위해 = 붙입
    elif (n <= cnt):
        lt = mid+1

    print("mid", mid)
    print(lt, rt, mid)

print("n개 :", cnt)
print("최대 길이 :", mid)


# print(f"선 {cnt}개 에 대한 최대 길이: {mid}")
