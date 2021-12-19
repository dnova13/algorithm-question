const fs = require('fs')
const Heap = require("../Heap")

const content = fs.readFileSync("in1.txt").toString();

const arr = content.trim().split('\n').map(v => Number(v))
console.log(arr)

let max_heap = new Heap(1)

console.log(max_heap.tree)

let i = 0

while (1) {
    v = arr[i++]

    console.log(":", v)

    if (v < 0)
        break

    if (v == 0)
        console.log(max_heap.remove())

    else
        max_heap.insert(v)
}

console.log(max_heap.tree)
