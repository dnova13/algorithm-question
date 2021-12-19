
num = [5, 2, 7, 6, 9, 8, 2, 3]
m = 3

stack = []
for x in num:
    while stack and m > 0 and stack[-1] < x:
        stack.pop()
        m -= 1
    stack.append(x)


if m != 0:
    stack = stack[:-m]

res = ''.join(map(str, stack))
print(res)
