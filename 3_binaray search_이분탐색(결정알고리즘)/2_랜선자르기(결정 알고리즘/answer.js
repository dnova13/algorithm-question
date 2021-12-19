let fs = require("fs");
let content = fs.readFileSync("in3.txt").toString();

// console.log(content)

let arr = content.split('\n').map((v, i) => {

    return i > 0 ? Number(v.trim()) : v.trim().split(' ')
})

console.log(arr)

let wires_cnt = parseInt(arr[0][0])
let n = parseInt(arr[0][1])
let wires = arr.slice(1)

console.log("wires", wires)
console.log("원하는 개수: ", n, end = '\n')

let cnt = 0
let rest = 0
let lt = undefined
let rt = 0


// # 최소값 최대값 구함.
for (w of wires) {
    if (lt == undefined || lt > w) {
        lt = w
    }

    if (rt < w)
        rt = w
}


console.log(lt, rt)

// # 이분 검색 시작.
// # 나누기 원하는 n 개의 길이는 같거나 커야됨.
while (!(lt > rt && n <= cnt)) {
    mid = parseInt((lt + rt) / 2)
    cnt = 0

    for (w of wires) {
        k = parseInt(w / mid)
        cnt += k
    }

    console.log("#### n :", cnt)
    // # 최소 길이 구하기 원하다면 이쪽에 = 붙임
    if (n > cnt)
        rt = mid - 1

    // # 최대 길이를 구하기 위해 = 붙입
    else if (n <= cnt)
        lt = mid + 1

    console.log("mid", mid)
    console.log(lt, rt, mid)


}

console.log("n개 :", cnt)
console.log("최대 길이 :", mid)

