
def median(arr, lt, rt):

    samples = [lt, (lt + rt) // 2, rt]

    def swap(arr, i1, i2):
        tmp = arr[i1]
        arr[i1] = arr[i2]
        arr[i2] = tmp

    # // [0], [1] 자리를 교환
    if (arr[samples[0]] > arr[samples[1]]):
        swap(samples, 0, 1)

    # // [1], [2] 자리를 교환
    if (arr[samples[1]] > arr[samples[2]]):
        swap(samples, 1, 2)

    # // 다시[0], [1] 자리를 교환
    if (arr[samples[0]] > arr[samples[1]]):
        swap(samples, 0, 1)

    return samples[1]  # // 배열 arr에서 중간값을 가지는 인덱스 반환


arr = [22, 3, 4, 1, 45, 65, 32, 33, 11]

midx = median(arr, 0, len(arr)-1)

print(midx, arr[midx])
