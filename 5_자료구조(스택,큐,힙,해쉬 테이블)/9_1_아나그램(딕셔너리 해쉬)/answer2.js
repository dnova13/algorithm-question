const fs = require('fs')
const content = fs.readFileSync("in1.txt").toString();


let a_arr
let b_arr

content.trim().split('\n').map((v, i) => {

    i == 0 ? a_arr = v.trim().split('') : b_arr = v.trim().split('')

})


console.log(a_arr, b_arr)

let dic = {}

for (k of a_arr) {

    dic[k] = (dic[k] || 0) + 1
}

for (k of b_arr) {

    dic[k] = (dic[k] || 0) - 1
}


let result = "YES"

for (k of a_arr) {
    if (dic[k] > 0) {
        result = "NO"
        break
    }
}


console.log(result)
