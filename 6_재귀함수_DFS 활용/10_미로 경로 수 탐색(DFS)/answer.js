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
let cnt = 0


function DFS(v, x, y) {

    if (x == 6 && y == 6)
        cnt++

    else {

        if (y - 1 > -1 && sq[x][y - 1] == 0 && chk[x][y - 1] == 0) {
            chk[x][y] = 1
            DFS(v + 1, x, y - 1)
            chk[x][y] = 0
        }

        if (x - 1 > -1 && sq[x - 1][y] == 0 && chk[x - 1][y] == 0) {
            chk[x][y] = 1
            DFS(v + 1, x - 1, y)
            chk[x][y] = 0
        }

        if (x + 1 < n && sq[x + 1][y] == 0 && chk[x + 1][y] == 0) {
            chk[x][y] = 1
            DFS(v + 1, x + 1, y)
            chk[x][y] = 0
        }

        if (y + 1 < n && sq[x][y + 1] == 0 && chk[x][y + 1] == 0) {
            chk[x][y] = 1
            DFS(v + 1, x, y + 1)
            chk[x][y] = 0
        }
    }
}


DFS(0, 0, 0)

console.log("갈 수 있는 개수:", cnt)


// """ 코드 간략화  """

let dx = [-1, 0, 1, 0]
let dy = [0, 1, 0, -1]

cnt = 0


function DFS1(x, y) {

    if (x == 6 && y == 6)
        cnt += 1

    else {

        for (let i = 0; i < 4; i++) {

            let x1 = x + dx[i]
            let y1 = y + dy[i]

            if (x1 > -1 && x1 < n && y1 > -1 && y1 < n && sq[x1][y1] == 0) {

                sq[x][y] = 1
                DFS1(x1, y1)
                sq[x][y] = 0
            }
        }
    }
}

DFS1(0, 0)

console.log("갈 수 있는 개수:", cnt)
