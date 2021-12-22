let Heap = require("../Heap")

function heap_sort(type, arr) {

    let tmp = []
    let heap = new Heap(type)

    if (type == 0) {

        for (v of arr) {
            heap.insert(v)
        }

        while (heap.size()) {
            tmp.push(heap.remove())
        }
    }

    else {

        for (v of arr) {
            heap.insert(v)
        }

        while (heap.size()) {
            tmp.push(heap.remove())
        }
    }

    return tmp

}

let arr = [12, 3, 43, 4, 21, 33, 23, 32, 33]

console.log("asc before", arr)
arr = heap_sort(0, arr)
console.log("asc after", arr)
console.log()
console.log("desc before", arr)
arr = heap_sort(1, arr)
console.log("desc after", arr)
