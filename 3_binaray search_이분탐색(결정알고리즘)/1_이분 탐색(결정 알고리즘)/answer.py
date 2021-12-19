txt = "73 32 31 49 94 37 40 62 78 66 27 100 99 29 9"
arr = map(int, txt.split())
arr = list(arr)
keyword = 27

arr = sorted(arr)
start = 0
end = len(arr)

print(arr)


def binery_search_arr(_arr):
    if (keyword < _arr[len(_arr)//2]):
        return _arr[:len(_arr)//2]
    else:
        return _arr[len(_arr)//2:]


def binery_search_idx(start, end, arr):
    if (keyword < arr[(start+end)//2]):
        return start, (start+end)//2
    elif (keyword > arr[(start+end)//2]):
        return (start+end)//2, end
    else:
        return (start+end)//2, (start+end)//2


while(len(arr[start:end]) > 1):
    start, end = binery_search_idx(start, end, arr)


print(f"answer : idx: {start}, value: {arr[start]}")


""" ---------------------------------------------------------- """

""" 다른 정답 """

print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

lt = 0
rt = len(arr)-1

while lt <= rt:
    mid = (lt+rt)//2
    if arr[mid] == keyword:
        # print(mid+1)
        break
    elif arr[mid] > keyword:
        rt = mid-1
    else:
        lt = mid+1

print(f"answer : idx: {mid}, value: {arr[mid]}")
