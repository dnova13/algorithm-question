const fs = require('fs')
const content = fs.readFileSync("in2.txt").toString();
const Queue = require('../Queue');


let c_arr = content.trim().split('\n')

n = parseInt(c_arr)
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

que = new Queue()


que.append([parseInt(n / 2), parseInt(n / 2)])
total = sq[parseInt(n / 2)][parseInt(n / 2)]
chk[parseInt(n / 2)][parseInt(n / 2)] = 1



while (1) {

    _new = que.popleft()
    if (_new.includes(0))
        break

    arr = [[_new[0] - 1, _new[1]], [_new[0], _new[1] + 1],
    [_new[0] + 1, _new[1]], [_new[0], _new[1] - 1]]

    for (next of arr) {

        if (chk[next[0]][next[1]] == 1)
            continue

        que.append(next)
        chk[next[0]][next[1]] = 1

        total += sq[next[0]][next[1]]
    }
}

console.log("total:", total)
