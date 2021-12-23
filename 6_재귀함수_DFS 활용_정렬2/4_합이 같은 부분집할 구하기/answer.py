import sys
sys.stdin = open("in2.txt", "r")


def DFS(v):
    if v == n+1:

        _arr = []
        for i in range(1, n+1):
            if ch[i] == 1:
                _arr.append(arr[i-1])
                # print(i, end=' ')

        if ch[1] == 1:
            part_arr1.append(_arr)
        else:
            part_arr2.append(_arr)
    else:
        ch[v] = 1  # 왼쪽노드 상태 있다는 것을 체크
        DFS(v+1)  # 중위 순회 # 이진 트리 왼쪽 노드 검색
        ch[v] = 0  # 오른쪽 노드 없다는거 체크
        DFS(v+1)  # 후위 순회 # 이진 트리 오른쪽 노드 검색


n = int(input())
arr = list(map(int, input().split()))
part_arr1 = []
part_arr2 = []

ch = [0]*(n+1)
DFS(1)

print(part_arr1)
print(part_arr2)
print()

for i in range(1, len(part_arr1)-1):

    sum1 = sum(part_arr1[i])
    sum2 = sum(part_arr2[len(part_arr2)-i-1])

    if (sum1 == sum2):
        print("YES")
        print(f"합은 {sum1}")
        print("부분 집합 :", part_arr1[i], part_arr2[len(part_arr2)-i-1])
        print()
