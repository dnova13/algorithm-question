const fs = require('fs')
const content = fs.readFileSync("in1.txt").toString();


let a_arr
let b_arr

content.trim().split('\n').map((v, i) => {

    i == 0 ? a_arr = v.trim().split('') : b_arr = v.trim().split('')

})

console.log(a_arr, b_arr)

str1 = Array.from(Array(52).fill(0))
str2 = Array.from(Array(52).fill(0))


for (x of a_arr) {
    if (x == x.toUpperCase)
        str1[x.charCodeAt() - 65] += 1
    else
        str1[x.charCodeAt() - 71] += 1
}

for (x of b_arr) {
    if (x == x.toUpperCase)
        str2[x.charCodeAt() - 65] += 1
    else
        str2[x.charCodeAt() - 71] += 1
}

let result = "YES"

for (let i = 0; i < 52; i++) {
    if (str1[i] != str2[i]) {
        result = "NO"
        break
    }
}


console.log(result)
