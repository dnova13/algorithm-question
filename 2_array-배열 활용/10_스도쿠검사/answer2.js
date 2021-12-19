let fs = require("fs");
let content = fs.readFileSync("in1.txt").toString();

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

let row = Array.from(Array(10).fill(0))
let col = Array.from(Array(10).fill(0))

function check_sudoku(_arr) {

    for (let i = 0; i < n; i++) {
        for (let j = 0; i < n; i++) {

            if (_arr[i][j] < 0 || _arr[i][j] > 10) {
                return false
            }

            if (_arr[j][i] < 0 || _arr[j][i] > 10) {
                return false
            }


            try {
                row[_arr[i][j]] = 1
                col[_arr[j][i]] = 1
            }
            catch (err) {
                if (row.reduce((sum, cur_val) => sum + cur_val) != 9 || col.reduce((sum, cur_val) => sum + cur_val) != 9) {
                    return false
                }
            }
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let temp = Array.from(Array(10), () => 0)

            for (let x = i * 3; x < 3 + i * 3; x++) {
                for (let y = j * 3; y < 3 + j * 3; y++) {
                    temp[_arr[x][y]] = 1
                }
            }

            if (temp.reduce((sum, cur_val) => sum + cur_val) != 9) {
                return false
            }
        }
    }

    return true
}

console.log(check_sudoku(arr) ? "YES" : "NO")

