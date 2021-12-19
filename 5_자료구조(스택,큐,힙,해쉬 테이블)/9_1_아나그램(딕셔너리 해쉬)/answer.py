import sys
sys.stdin = open("in4.txt", "r")
a = input()
b = input()

a_arr = list(map(str, str(a)))
b_arr = list(map(str, str(b)))

print(a_arr)
dic1 = dict()
dic2 = dict()

for k in a_arr:

    if not dic1.get(k, False):
        dic1[k] = 1
    else:
        dic1[k] += 1

for k in b_arr:

    if not dic2.get(k, False):
        dic2[k] = 1
    else:
        dic2[k] += 1

print(dic1, dic2)


result = "YES"

for k, v in dic1.items():
    if dic2.get(k, 0) != v:
        result = "NO"
        break


print(result)
