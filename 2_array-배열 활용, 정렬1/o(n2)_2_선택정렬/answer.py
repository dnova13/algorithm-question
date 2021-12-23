
""" 
    - 선택 정렬 
    
    정렬 순서상 가장 앞서는 것을 선택하여 왼쪽으로 보내면서 데이터 교체함.,
"""

arr = [23, 44, 123, 122, 122, 433, 12, 355, 2, 34, 56]


def selection_sort(arr, sort):
    if (sort == "asc"):
        # 오름 차순
        for i in range(len(arr)):
            for j in range(i+1, len(arr)):
                if (arr[i] > arr[j]):
                    tmp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = tmp

    else:
        # 내림 차순
        for i in range(len(arr)):
            for j in range(i+1, len(arr)):
                if (arr[i] < arr[j]):
                    tmp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = tmp

    return arr


print(selection_sort(arr, "asc"))
print(selection_sort(arr, "desc"))
