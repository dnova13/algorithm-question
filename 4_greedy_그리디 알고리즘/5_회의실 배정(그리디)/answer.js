let fs = require("fs");
let content = fs.readFileSync("in2.txt").toString();

console.log(content)

let n;
let meetings = []

content.trim().split('\n').map((v, i) => {

    if (i == 0) {
        n = parseInt(v.trim())
    }

    else {
        meetings.push(v.trim().split(' ').map(v => Number(v)))
    }
})

console.log(n)
console.log(meetings)

// # order by y asc,a asc
// 오름 차순
meetings.sort((a, b) => a[1] == b[1] ? a[1] - b[1] : a[1] - b[1] + (a[0] - b[0]) * 0.0001)
console.log(meetings)


let cnt = 0
let tail = 0

for (meet of meetings) {

    if (meet[0] >= tail) {
        // console.log(tail, meet[1])
        cnt += 1
        tail = meet[1]
    }
}


console.log("최대 사용 개수 :", cnt)
