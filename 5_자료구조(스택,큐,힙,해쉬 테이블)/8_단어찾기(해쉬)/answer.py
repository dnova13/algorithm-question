

import sys
sys.stdin = open("in2.txt", "r")
n = int(input())

arr = []
dic = {}
for i in range(n):
    arr.append(input())

print(arr)

for key in range(n-1):

    dic[input()] = True

print(dic)

for key in arr:
    if (not dic.get(key, False)):
        print(key)
