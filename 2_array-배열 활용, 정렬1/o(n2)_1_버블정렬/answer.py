""" 
    - 버블 정렬
    
    인접한 두개의 데이트를 비교해가며 정렬
"""

arr = [23, 44, 123, 122, 122, 433, 12, 355, 2, 34, 56]


def bubble_sort(arr, sort):

    if (sort == "asc"):
        # 오름 차순
        for i in range(len(arr)):
            for j in range(len(arr) - i - 1):

                if (arr[j] > arr[j+1]):
                    tmp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = tmp

    else:
        # 내림 차순
        for i in range(len(arr)):
            for j in range(len(arr) - i - 1):

                if (arr[j] < arr[j+1]):
                    tmp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = tmp

    return arr


print(bubble_sort(arr, "asc"))
print(bubble_sort(arr, "desc"))
