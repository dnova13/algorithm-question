const fs = require('fs')
const content = fs.readFileSync("in4.txt").toString();


let a_arr
let b_arr

content.trim().split('\n').map((v, i) => {

    i == 0 ? a_arr = v.trim().split('') : b_arr = v.trim().split('')

})


console.log(a_arr, b_arr)

let dic1 = {}
let dic2 = {}



for (k of a_arr) {

    if (!dic1[k])
        dic1[k] = 1
    else
        dic1[k] += 1
}

for (k of b_arr) {

    if (!dic2[k])
        dic2[k] = 1
    else
        dic2[k] += 1
}

// console.log(dic1, dic2)


let result = "YES"

for (const [k, v] of Object.entries(dic1)) {
    if (dic2[k] != v) {
        result = "NO"
        break
    }
}

console.log(result)
