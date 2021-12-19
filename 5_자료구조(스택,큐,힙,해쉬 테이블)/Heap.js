class Heap {

    constructor(type) {
        this.type = type ? 1 : 0
        this.tree = []
    }

    insert(value) {

        let heap = this.tree

        heap.push(value)
        let l = heap.length

        while (l > 1) {

            if (this.type == 0) {
                if (heap[parseInt(l / 2) - 1] > heap[l - 1]) {
                    let tmp = heap[parseInt(l / 2) - 1]

                    heap[parseInt(l / 2) - 1] = heap[l - 1]
                    heap[l - 1] = tmp
                    l = parseInt(l / 2)
                }
                else
                    l = 0
            }

            else {
                if (heap[parseInt(l / 2) - 1] < heap[l - 1]) {
                    let tmp = heap[parseInt(l / 2) - 1]

                    heap[parseInt(l / 2) - 1] = heap[l - 1]
                    heap[l - 1] = tmp
                    l = parseInt(l / 2)
                }
                else
                    l = 0
            }
        }
    }

    remove() {
        let heap = this.tree

        if (heap.length < 1)
            return undefined

        let result = heap[0]
        let _pop = heap.pop()

        if (heap.length < 1)
            return result

        heap[0] = _pop
        let l = 1

        while (heap.length >= 2 * l) {

            if (this.type == 0) {
                if ((heap[l - 1] <= heap[2 * l - 1] && heap.length < 2 * l + 1) || (heap[l - 1] <= heap[2 * l - 1] && heap[l - 1] <= heap[2 * l]))
                    return result

                // # 왼쪽
                if (heap.length < 2 * l + 1 || (heap[2 * l - 1] <= heap[2 * l])) {
                    let tmp = heap[2 * l - 1]

                    heap[2 * l - 1] = heap[l - 1]
                    heap[l - 1] = tmp
                    l = 2 * l
                }

                // # 오른쪽
                else if (heap[2 * l - 1] > heap[2 * l]) {
                    let tmp = heap[2 * l]

                    heap[2 * l] = heap[l - 1]
                    heap[l - 1] = tmp
                    l = 2 * l + 1
                }
            }
            else {
                if ((heap[l - 1] >= heap[2 * l - 1] && heap.length < 2 * l + 1) || (heap[l - 1] >= heap[2 * l - 1] && heap[l - 1] >= heap[2 * l]))
                    return result

                // # 왼쪽
                if (heap.length < 2 * l + 1 || (heap[2 * l - 1] >= heap[2 * l])) {
                    let tmp = heap[2 * l - 1]

                    heap[2 * l - 1] = heap[l - 1]
                    heap[l - 1] = tmp
                    l = 2 * l
                }
                // # 오른쪽
                else if (heap[2 * l - 1] < heap[2 * l]) {
                    let tmp = heap[2 * l]

                    heap[2 * l] = heap[l - 1]
                    heap[l - 1] = tmp
                    l = 2 * l + 1
                }
            }
        }

        return result
    }
}

module.exports = Heap