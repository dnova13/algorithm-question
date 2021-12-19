const fs = require('fs')
const Heap = require("../Heap")

const content = fs.readFileSync("in1.txt").toString();

const arr = content.trim().split('\n').map(v => Number(v))
console.log(arr)

let min_heap = new Heap(0)

console.log(min_heap.tree)

let i = 0

while (true) {
    let v = arr[i++]

    // console.log(":", v)

    if (v < 0)
        break

    if (v == 0)
        console.log(min_heap.remove())

    else
        min_heap.insert(v)
}

console.log(min_heap.tree)

