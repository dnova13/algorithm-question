
let n = 5

// 2차원 빈배열 생성(es6 지원시)
let _arr = Array.from(Array(n), () => new Array(n))

// 2차원 배열(값 초기화 하여 생성.)
let __arr = Array.from(Array(n), () => new Array(n).fill(0))

// 2차원 배열(램던으로 값 초기화 하여 생성.)
let arr = Array.from(Array(n), () => Array.from(Array(n), () => Math.floor(Math.random() * 100) + 1))


for (i of arr) {
    for (j of i) {
        process.stdout.write(j + " ")
    }
    console.log()
}

console.log()

let half = parseInt(n / 2)
let total = 0

for (let i = 0; i < n; i++) {
    if (i <= half) {
        for (a of arr[i].slice(half - i, half + i + 1)) {
            total += a
        }
    }
    else {
        for (a of arr[i].slice(half - (n - 1 - i), half + (n - 1 - i) + 1)) {
            total += a
        }
    }
}


console.log(total)



// """ ------------------------------------------------------------------- """
total = 0
let start = end = half

for (let i = 0; i < n; i++) {
    for (let j = start; j < end + 1; j++) {
        total += arr[i][j]
    }

    if (i < parseInt(n / 2)) {
        start--
        end++
    }
    else {
        start++
        end--
    }
}

console.log(total)
