class Queue {
    constructor(arr) {
        this.storage = arr ? arr : []
    }

    size() {
        return this.storage.length
    }

    append(value) {
        this.storage.push(value)
    }

    popleft() {
        return this.storage.shift()
    }

    clear() {
        this.storage = []
    }
}

module.exports = Queue