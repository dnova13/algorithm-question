n = 15
stds = [12, 34, 17, 6, 11, 15, 27, 42, 39, 31, 26, 36, 35, 24, 17]

total = sum(stds)

# avg = avg+0.5
# avg = int(avg)
# avg = int(round(avg))

avg = total/len(stds)
avg = int(round(avg, 0))
min = None

for i, v in enumerate(stds):
    temp = abs(v - avg)
    if min is None or min > temp:
        min = temp
        ans = (i+1, v)
    elif min == temp:
        if v > ans[1]:
            ans = (i+1, v)

print("answer : ", ans)
_arr = []

for i, v in enumerate(stds):
    _arr.append({"num": i+1, "score": v, "diff": abs(v-avg)})


for i in range(len(_arr)-1):
    for j in range(i+1, len(_arr)):
        if abs(_arr[i]["score"] - avg) > abs(_arr[j]["score"]-avg):
            temp = _arr[i]
            _arr[i] = _arr[j]
            _arr[j] = temp

            if (i < j):
                if (i != 0 and _arr[i-1]["diff"] == _arr[i]["diff"] and _arr[i-1]["score"] < _arr[i]["score"]):
                    temp = _arr[i-1]
                    _arr[i-1] = _arr[i]
                    _arr[i] = temp
            else:
                if (j != 0 and _arr[j-1]["diff"] == _arr[j]["diff"] and _arr[j-1]["score"] < _arr[j]["score"]):
                    temp = _arr[j-1]
                    _arr[j-1] = _arr[j]
                    _arr[j] = temp
print(_arr)
