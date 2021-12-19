const fs = require('fs')
const content = fs.readFileSync("in4.txt").toString();
const Queue = require('../Queue');

let tmp = content.trim().split(' ')
let start = Number(tmp[0]), dest = Number(tmp[1])

const MAX = 100000

let lv = 0
let chk = Array.from(Array(MAX).fill(0))
let dis = Array.from(Array(MAX).fill(0))

let q = new Queue()

q.append(start)
chk[start] = 1

console.log(start, dest)

let _new

while (q) {

    _new = q.popleft()

    // console.log(q)

    if (_new == dest)
        break

    let arr = [_new - 1, _new + 1, _new + 5]

    for (_next of arr) {

        if (chk[_next] == 1 || _next < 1 || _next > MAX)
            continue

        q.append(_next)
        dis[_next] = dis[_new] + 1 // # 부모 노드 + 1 : lv 정보 넣음.
        chk[_next] = 1
    }

}

console.log(`시작 위치: ${start}, 도착 위치: ${dest}, 최단 경로: ${dis[_new]}`)
