import sys
sys.stdin = open("in3.txt", "rt")

q = input()

arr = list(map(str, str(q)))
print(q)
stack = []
mul = 0
cnt = 0
before = ""

for i in arr:

    stack.append(i)

    if (before + i == "()"):
        stack.pop()
        stack.pop()
        mul -= 1
        cnt += mul * 1
        print("() ", cnt, mul)

    elif (i == "("):
        mul += 1

    elif (i == ")"):
        mul -= 1
        cnt += 1

    before = i

print(cnt)


""" 
for i in range(len(s)):
    if s[i] == '(':
        stack.append(s[i])
    else:
        stack.pop()
        if s[i-1] == '(':
            cnt += len(stack)
        else:
            cnt += 1

print(cnt) 
"""
