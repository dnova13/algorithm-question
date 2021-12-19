
let fs = require("fs");
let content = fs.readFileSync("in3.txt").toString();

let a = content.split('\n')[1].trim().split(' ').map((v) => Number(v))
n = a.length

lt = 0
rt = n - 1
last = 0
res = ""
tmp = []

while (lt <= rt) {
    if (a[lt] > last)
        tmp.push([a[lt], 'L'])
    if (a[rt] > last)
        tmp.push([a[rt], 'R'])

    tmp.sort((a, b) => a[0] - b[0])

    if (tmp.length == 0)
        break
    else {
        res = res + tmp[0][1]
        last = tmp[0][0]
        if (tmp[0][1] == 'L')
            lt = lt + 1
        else
            rt = rt - 1
    }
    tmp = []

}
console.log(res.length)
console.log(res)
