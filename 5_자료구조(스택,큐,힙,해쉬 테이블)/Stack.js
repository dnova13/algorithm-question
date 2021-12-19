class Stack {
    constructor(arr) {
        this.storage = arr ? arr : []
    }

    size() {
        return this.storage.length
    }

    push(value) {
        this.storage.push(value)
    }

    pop() {
        return this.storage.pop()
    }

    clear() {
        this.storage = []
    }
}

module.exports = Stack