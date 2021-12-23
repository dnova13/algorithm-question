
def DFS(v):
    if v == n+1:
        a = 0
        for i in range(1, n+1):
            a += ch[i]
            if ch[i] == 1:
                print(i, end=' ')

        if a == 0:
            print(0)
    else:
        ch[v] = 1  # 왼쪽노드 상태 있다는 것을 체크
        DFS(v+1)  # 중위 순회 # 이진 트리 왼쪽 노드 검색
        ch[v] = 0  # 오른쪽 노드 없다는거 체크
        DFS(v+1)  # 후위 순회 # 이진 트리 오른쪽 노드 검색


if __name__ == "__main__":
    n = 3
    ch = [0]*(n+1)
    DFS(1)
