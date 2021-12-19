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


// # order by y asc,a asc
// 오름 차순
meetings.sort((a, b) => a[1] == b[1] ? a[1] - b[1] : a[1] - b[1] + (a[0] - b[0]) * 0.0001)

let et = 0
let cnt = 0

console.log(meetings)

for (meet of meetings) {
    let x = meet[0]
    let y = meet[1]

    // console.log(x, y)
    if (x >= et) {
        et = y
        cnt += 1
    }
}

console.log("최대 사용 개수 :", cnt)
