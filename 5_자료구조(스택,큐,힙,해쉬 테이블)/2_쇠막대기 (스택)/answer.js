const fs = require('fs')
const content = fs.readFileSync("in2.txt").toString();
const Stack = require('../Stack')

let arr = content.trim().split('')
console.log(content)


let stack = new Stack()
let mul = 0
let cnt = 0
let before = ""

for (i of arr) {

    stack.push(i)

    if (before + i == "()") {
        stack.pop()
        stack.pop()
        mul -= 1
        cnt += mul * 1
        console.log("() ", cnt, mul)
    }

    else if (i == "(")
        mul += 1

    else if (i == ")") {
        mul -= 1
        cnt += 1
    }

    before = i
}

console.log(cnt)
/* other answer */
cnt = 0
stack.clear()

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '(')
        stack.push(arr[i])

    else {
        stack.pop()

        if (arr[i - 1] == '(')
            cnt += stack.size()
        else
            cnt += 1
    }
}

console.log(cnt)

