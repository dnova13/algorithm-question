let fs = require("fs");
let content = fs.readFileSync("in3.txt").toString();

let arr = content.split('\n').map((v, i) => {

    return i > 0 ? Number(v.trim()) : v.trim().split(' ')
})

// console.log(arr)

let k = parseInt(arr[0][0])
let n = parseInt(arr[0][1])
let Line = arr.slice(1)
let largest = Math.max.apply(null, Line);


function Count(len) {
    cnt = 0
    for (x of Line) {
        cnt += parseInt(x / len)
    }
    return cnt

}

let res = 0

let lt = 1
let rt = largest
let _n
// console.log(lt, rt)

while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2)
    let cnt = Count(mid)

    if (n <= cnt) {
        res = mid
        lt = mid + 1
        _n = cnt
    }
    else { rt = mid - 1 }

}

console.log("n개 :", _n)
console.log("최대 길이 :", res)


