import sys
sys.stdin = open("in4.txt", "r")
a = input()
b = input()

a_arr = list(map(str, str(a)))
b_arr = list(map(str, str(b)))

print(a_arr)
dic = dict()

for k in a_arr:
    dic[k] = dic.get(k, 0) + 1


for k in b_arr:
    dic[k] = dic.get(k, 0) - 1

# print(dic)

result = "YES"

for k in a_arr:
    if (dic.get(k) > 0):
        print("NO")
        break


print(result)
