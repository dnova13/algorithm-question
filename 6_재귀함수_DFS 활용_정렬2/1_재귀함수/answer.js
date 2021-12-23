
function test(x) {
    if (x > 0)
        test(x - 1)

    process.stdout.write(x + " ")
}

test(6)
console.log()


// # 이진수 변환
console.log("--------- 이진수 ---------")
let a = 11

function decimal2binary(x) {
    if (x < 2)
        return x
    else
        return `${decimal2binary(parseInt(x / 2))}${x % 2}`

}

console.log(decimal2binary(a))


// """ 팩토리얼 """
console.log("--------- 팩토리얼 ---------")

function factorial(x) {

    if (x == 1)
        return x
    else
        return x * factorial(x - 1)
}

console.log(factorial(4))
console.log()


// # 피보나치 수열

console.log("--------- 피보나치 ---------")
function fibonacci(i) {
    let arr = [1, 1]

    if (i < 3)
        return 1
    else
        return (fibonacci(i - 2) + fibonacci(i - 1))

}

for (let i = 0; i < 8; i++) {
    console.log(i + 1, "번째:", fibonacci(i + 1))
}