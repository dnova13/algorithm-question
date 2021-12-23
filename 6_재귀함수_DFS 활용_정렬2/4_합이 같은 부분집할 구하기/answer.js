const fs = require('fs')
const content = fs.readFileSync("in4.txt").toString();


let n
let arr

content.trim().split('\n').map((v, i) => {

    i == 0 ? n = Number(v) : arr = v.trim().split(' ').map(v => Number(v))
})

console.log(n)
console.log(arr)

function DFS(v) {
    if (v == n + 1) {

        let _arr = []
        for (let i = 1; i < n + 1; i++) {
            if (ch[i] == 1) {
                _arr.push(arr[i - 1])
                // # print(i, end = ' ')
            }
        }

        if (ch[1] == 1)
            part_arr1.push(_arr)
        else
            part_arr2.push(_arr)
    }
    else {
        ch[v] = 1  // # 왼쪽노드 상태 있다는 것을 체크
        DFS(v + 1)  // # 중위 순회 # 이진 트리 왼쪽 노드 검색
        ch[v] = 0  // # 오른쪽 노드 없다는거 체크
        DFS(v + 1) // # 후위 순회 # 이진 트리 오른쪽 노드 검색
    }
}


let part_arr1 = []
let part_arr2 = []

let ch = Array.from(Array(n + 1).fill(0))
DFS(1)

console.log(part_arr1)
console.log(part_arr2)
console.log()

let chk = 0

for (let i = 1; i < part_arr1.length - 1; i++) {

    let sum1 = part_arr1[i].reduce((a, b) => a + b, 0)
    let sum2 = part_arr2[part_arr2.length - i - 1].reduce((a, b) => a + b, 0)

    if (sum1 == sum2) {
        chk = 1
        console.log("YES")
        console.log(`합은 ${sum1}`)
        console.log("부분 집합 :", part_arr1[i], part_arr2[part_arr2.length - i - 1])
        console.log
    }
}

!chk ? console.log("NO") : ''