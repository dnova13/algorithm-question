const fs = require('fs')
const content = fs.readFileSync("in1.txt").toString();
const Queue = require('../Queue')

let arr = content.trim().split(' ').map(v => Number(v))

let n = arr[0]
let k = arr[1]

let _list = Array.from(Array(n), (v, i) => i + 1)
let que = new Queue(_list)


console.log(n, k, que)
let cnt = 1

while (que.size() > 1) {

    num = que.popleft()

    if (cnt == k)
        cnt = 0

    else
        que.append(num)

    cnt += 1

}
console.log("answer:", que.popleft())
