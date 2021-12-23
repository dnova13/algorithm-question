
def test(x):
    if x > 0:
        test(x-1)
        print(x, end=' ')


test(6)
print()


# 이진수 변환
a = 11


def decimal2binary(x):
    if x < 2:
        return x
    else:
        return f"{decimal2binary(x//2)}{x % 2}"


print(decimal2binary(a))


""" 팩토리얼 """


def factorial(x):

    if x == 1:
        return x
    else:
        return x*factorial(x-1)


print(factorial(4))
print()


# 피보나치 수열


def fibonacci(i):
    arr = [1, 1]

    if i < 3:
        return 1
    else:
        return (fibonacci(i-2) + fibonacci(i-1))


for i in range(8):
    print(i+1, "번째:", fibonacci(i+1))
