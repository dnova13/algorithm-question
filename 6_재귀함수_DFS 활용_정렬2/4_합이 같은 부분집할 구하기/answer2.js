const fs = require('fs')
const content = fs.readFileSync("in1.txt").toString();

let n
let arr

content.trim().split('\n').map((v, i) => {

    i == 0 ? n = Number(v) : arr = v.trim().split(' ').map(v => Number(v))
})

console.log(n)
console.log(arr)

let result = "NO"

function DFS(L, sum) {
    if (sum > parseInt(total / 2))
        return
    if (L == n) {
        if (sum == (total - sum)) {
            result = "YES"
            return
        }
    }
    else {
        DFS(L + 1, sum + arr[L])
        DFS(L + 1, sum)
    }

}

let total = arr.reduce((a, b) => a + b, 0)
DFS(1, 0)
console.log(result)
