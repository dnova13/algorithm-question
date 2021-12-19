const fs = require('fs')
const content = fs.readFileSync("in2.txt").toString();
const Queue = require('../Queue');


let c_arr = content.trim().split('\n')

let n = parseInt(c_arr)
let sq = Array.from(Array(n), () => new Array(n))

let x = 0, y = 0
for (i of c_arr) {

    if (x > 0) {

        for (j of i.trim().split(' ')) {
            sq[x - 1][y] = Number(j)
            y++
        }
    }
    x++
    y = 0
}

console.log(sq)

let chk = Array.from(Array(n), () => new Array(n).fill(0))
let dx = [-1, 0, 1, 0]
let dy = [0, 1, 0, -1]

let sum = 0
let que = new Queue()

chk[parseInt(n / 2)][parseInt(n / 2)] = 1
sum += sq[parseInt(n / 2)][parseInt(n / 2)]

que.append([parseInt(n / 2), parseInt(n / 2)])
let L = 0

while (1) {

    if (L == parseInt(n / 2))
        break

    let size = que.size()

    for (let i = 0; i < size; i++) {
        tmp = que.popleft()

        for (let j = 0; j < 4; j++) {
            x = tmp[0] + dx[j]
            y = tmp[1] + dy[j]

            if (chk[x][y] == 0) {
                sum += sq[x][y]
                chk[x][y] = 1
                que.append([x, y])
            }
        }
    }
    L++
}
console.log("Total", sum)
