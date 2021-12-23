
function DFS(v) {
    if (v == n + 1) {
        let a = 0

        for (let i = 1; i < n + 1; i++) {
            a += ch[i]

            if (ch[i] == 1)
                process.stdout.write(i + " ")
        }

        if (a == 0)
            process.stdout.write("0 ")

        process.stdout.write("| ")

    }
    else {
        ch[v] = 1  // # 왼쪽노드 상태 있다는 것을 체크
        DFS(v + 1)  // # 중위 순회 # 이진 트리 왼쪽 노드 검색
        ch[v] = 0  // # 오른쪽 노드 없다는거 체크
        DFS(v + 1)  // # 후위 순회 # 이진 트리 오른쪽 노드 검색
    }

}

let n = 3
let ch = Array.from(Array(n).fill(0))

DFS(1)
