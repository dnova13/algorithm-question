const fs = require('fs')
const content = fs.readFileSync("in1.txt").toString();

let arr = []
let n

content.trim().split('\n').map((v, i) => {

    if (i == 0) {
        n = Number(v)
    }
    else arr.push(v.trim())
})


dic1 = []
dic2 = {}

console.log(n, arr)

for (let i = 0; i < n; i++) {
    dic1.push(arr[i])
}

console.log(dic1)

for (let i = n; i < arr.length; i++) {

    dic2[arr[i]] = true
}

for (key of dic1) {
    if (!dic2[key])
        console.log(key)
}