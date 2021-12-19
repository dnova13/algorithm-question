const fs = require('fs')
const content = fs.readFileSync("in2.txt").toString();
const Queue = require('../Queue');

n = 7
let sq = Array.from(Array(n), () => new Array(n))
let c_arr = content.trim().split('\n')
let x = 0, y = 0

for (i of c_arr) {
    for (j of i.trim().split(' ')) {
        sq[x][y] = Number(j)
        y++
    }
    x++
    y = 0
}

console.log(sq)

let chk = Array.from(Array(n), () => new Array(n).fill(0))
let que = new Queue()
let dx = [-1, 0, 1, 0]
let dy = [0, -1, 0, 1]
chk[0][0] = 1

que.append([0, 0])

let lv = 0
let cnt = 0

while (que) {

    let _new = que.popleft()

    cnt += 1

    if (_new[0] == _new[1] && _new[0] == 6)
        break

    for (let i = 0; i < 4; i++) {

        x = _new[0] + dx[i]
        y = _new[1] + dy[i]

        // # 좌표 범위 초과시
        if (x <= -1 || x >= 7 || y <= -1 || y >= 7)
            continue

        // # 경로 및 노드 중복 검사.
        if (chk[x][y] > 0 || sq[x][y] > 0)
            continue

        que.append([x, y])
        chk[x][y] = chk[_new[0]][_new[1]] + 1
    }
}
console.log("최단거리 칸수 : ", chk[6][6] - 1)
console.log(cnt)
