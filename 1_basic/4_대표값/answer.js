let n = 15
let stds = [12, 34, 17, 6, 11, 15, 27, 42, 39, 31, 26, 36, 35, 24, 17]

let total = sum = stds.reduce((a, b) => a + b, 0);

// # avg = avg+0.5
// # avg = int(avg)
// # avg = int(round(avg))

let avg = total / stds.length
avg = Math.round(avg)
let min = null


stds.forEach((v, i) => {
    let temp = Math.abs(v - avg)

    if (min === null || min > temp) {
        min = temp
        ans = [i + 1, v]
    }

    else if (min == temp) {
        if (v > ans[1])
            ans = [i + 1, v]
    }
})

console.log("answer : ", ans)


let _arr = []

stds.forEach((v, i) => {
    _arr.push({ "num": i + 1, "score": v, "diff": Math.abs(v - avg) })
})

for (let i = 0; i < _arr.length - 1; i++) {
    for (let j = i + 1; j < _arr.length; j++) {
        if (Math.abs(_arr[i]["score"] - avg) > Math.abs(_arr[j]["score"] - avg)) {
            temp = _arr[i]
            _arr[i] = _arr[j]
            _arr[j] = temp

            if (i < j) {
                if (i != 0 && _arr[i - 1]["diff"] == _arr[i]["diff"] && _arr[i - 1]["score"] < _arr[i]["score"]) {
                    temp = _arr[i - 1]
                    _arr[i - 1] = _arr[i]
                    _arr[i] = temp
                }
            }

            else {
                if (j != 0 && _arr[j - 1]["diff"] == _arr[j]["diff"] && _arr[j - 1]["score"] < _arr[j]["score"]) {
                    temp = _arr[j - 1]
                    _arr[j - 1] = _arr[j]
                    _arr[j] = temp
                }
            }
        }
    }
}


console.log(_arr)


