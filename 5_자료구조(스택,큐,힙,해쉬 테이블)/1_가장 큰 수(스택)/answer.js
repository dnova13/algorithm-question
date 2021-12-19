let Stack = require("../Stack")

let num = [5, 2, 7, 6, 9, 8, 2, 3]

// num = [9, 8, 7, 6, 5, 4, 3]

let m = 3

const stack = new Stack()

for (x of num) {
    while (stack && m > 0 && stack.storage[stack.size() - 1] < x) {
        stack.pop()
        m--
    }
    stack.push(x)
}

// console.log(m)
// console.log(stack)

if (m != 0)
    stack.storage = stack.storage.slice(0, stack.size() - m)

res = stack.storage.join('')
console.log(res)
