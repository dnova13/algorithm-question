let fs = require("fs");
let content = fs.readFileSync("in3.txt").toString();

n = 9
let arr = Array.from(Array(n), () => new Array(n))


let x = 0, y = 0
for (i of content.split('\n')) {

    for (j of i.trim().split(' ')) {

        arr[x][y] = j
        y++
    }
    x++
    y = 0
}

console.log(arr)

function check_one_to_nine(_arr) {

    let arr2 = [..._arr] // 배열 깊은 복사 or _arr.slice()

    for (let i = 0; i < 9; i++) {
        if (i + 1 != arr2.sort()[i])
            return false
    }
    return true
}


let is_solve = true

for (let i = 0; i < n; i++) {
    let col = []


    for (let j = 0; j < n; j++) {
        col.push(arr[j][i])
    }

    if (!check_one_to_nine(arr[i])) {
        is_solve = false
        break
    }

    if (!check_one_to_nine(col)) {
        is_solve = false
        break
    }
}

console.log(is_solve)


if (is_solve) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            let _arr = []

            for (let x = i * 3; x < 3 + i * 3; x++) {
                for (let y = j * 3; y < 3 + j * 3; y++) {
                    _arr.push(arr[x][y])
                }
            }

            if (!check_one_to_nine(_arr)) {
                is_solve = false
                break
            }

        }
    }
}

console.log(is_solve ? "YES" : "NO")
