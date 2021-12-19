import sys
sys.stdin = open("in3.txt", "r")
n = int(input())
_list = list(map(int, input().split()))


print(_list)

lt = 0
rt = len(_list) - 1

arr = []
_lr = []

while lt < rt:

    print(lt, rt)

    if len(arr) != 0 and _list[lt] < arr[len(arr)-1] and _list[rt] < arr[len(arr)-1]:
        lt += 1
        rt -= 1
        continue

    if _list[lt] < _list[rt]:
        if len(arr) == 0 or _list[lt] > arr[len(arr)-1]:
            _lr.append("L")
            arr.append(_list[lt])
            lt += 1

        elif (_list[lt] < arr[len(arr)-1]):
            _lr.append("R")
            arr.append(_list[rt])
            rt -= 1

    elif _list[lt] > _list[rt]:

        if len(arr) == 0 or _list[rt] > arr[len(arr)-1]:
            _lr.append("R")
            arr.append(_list[rt])
            rt -= 1

        elif (_list[rt] < arr[len(arr)-1]):
            _lr.append("L")
            arr.append(_list[lt])
            lt += 1

    elif _list[lt] == _list[rt] and (len(arr) == 0 or _list[rt] > arr[len(arr)-1]):

        _lr.append("LR")
        arr.append(_list[rt])
        lt += 1
        rt -= 1

    # print(lt, rt, _list[lt], _list[rt])

print(arr, ", 증가 수열 길이 :", len(arr))
print(_lr)
