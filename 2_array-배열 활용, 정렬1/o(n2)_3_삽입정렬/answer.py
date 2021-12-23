

"""
    - 삽입 정렬

    삽입 정렬은 두 번째 자료부터 시작하여 그 앞(왼쪽)의 자료들과 비교하여
    삽입할 위치를 지정한 후 자료를 뒤로 옮기고 지정한 자리에 자료를 삽입하여 정렬

"""

arr = [23, 44, 123, 122, 122, 433, 12, 355, 2, 34, 56]


def insertion_sort(arr, sort):

    if (sort == "asc"):
        # 오름 차순
        for i in range(1, len(arr)):

            insData = arr[i]  # 정렬 대상을 변수에 저장.

            for j in range(i - 1, -1, -1):

                if (arr[j] > insData):
                    # print("i", i, "j", j, arr[j], insData)
                    arr[j+1] = arr[j]  # 비교 대상 한칸 씩 밀기
                else:
                    break  # 현재 비교수보다 작은 데이터가 없으므로 반복 탈출

            if (j == 0):
                arr[0] = insData
            else:
                arr[j+1] = insData  # 탈출한 위치에 데이터 삽입
            # [23, 44, 123, 122, 122, 433, 12, 355, 2, 34, 56]
    else:
        # 내림 차순
        for i in range(1, len(arr)):

            insData = arr[i]  # 정렬 대상을 변수에 저장.

            for j in range(i - 1, -1, -1):

                if (arr[j] < insData):
                    arr[j+1] = arr[j]  # 비교 대상 한칸 씩 밀기
                else:
                    break  # 현재 비교수보다 큰 데이터가 없으므로 반복 탈출

            if j == 0:
                arr[0] = insData  # 탈출한 위치에 데이터 삽입
            else:
                arr[j+1] = insData  # 탈출한 위치에 데이터 삽입

    return arr


print(insertion_sort(arr, "asc"))
print(insertion_sort(arr, "desc"))
