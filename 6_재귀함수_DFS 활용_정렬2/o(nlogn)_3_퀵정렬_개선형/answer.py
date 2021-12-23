"""

퀵 정령에서 오름차순 기준으로 

각각 나눠지는 배열의 피봇이 만약 최소값(내림차순 일때, 최대값)을 가질때 배열이 두가지로 쪼개지지 않으므로.

최악의 케이스로 최악의 성능을 가진다.

그러므로 피봇을 정할때 중간값 정리하여 최소값을 회피하게 하여 최악의 케이스를 피하게 개선.

"""


import random as r


def quick_sort(arr, type):

    lt = 0
    rt = len(arr) - 1

    def swap(arr, i1, i2):
        tmp = arr[i1]
        arr[i1] = arr[i2]
        arr[i2] = tmp

    # 각 정렬에 따른 피봇에 최소값 최대값을 피하기위해 중간 값 구함.
    def median(arr, lt, rt):

        samples = [lt, (lt + rt) // 2, rt]

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

    def sort(lt, rt):

        if (lt < rt):

            pidx = lt

            # 중간값을 가지는 피벗 인덱스를 구함.
            if (rt - lt > 1):
                pidx = median(arr, lt, rt)
                swap(arr, lt, pidx)

            pivot = arr[lt]

            # 오름차순
            if type == 0:
                _low = lt + 1
                _high = rt

                while(_low <= _high):

                    # 왼쪽 열의 수가 기준점 피봇 수보다 작거나 같을 경우 옆으로 이동.
                    if (pivot >= arr[_low]):
                        _low += 1

                    # 오른쪽 열의 수가 기준점 피봇 수보다 크거나 같을 경우 옆으로 이동.
                    if (pivot <= arr[_high]):
                        _high -= 1

                    # 양쪽으로 각각 이동후 low에서 피봇보다 큰수와 high에서 피봇보다 작은수 서로 교환
                    if (_low < _high and arr[_high] < pivot < arr[_low]):
                        swap(arr, _low, _high)

                mid = _high

            # 내림차순
            else:
                _high = lt + 1
                _low = rt

                while(_high <= _low):

                    # 왼쪽 열의 수가 기준점 피봇 수보다 크거나 같을 경우 옆으로 이동.
                    if (pivot <= arr[_high]):
                        _high += 1

                    # 오른쪽 열의 수가 기준점 피봇 수보다 작을 같을 경우 옆으로 이동.
                    if (pivot >= arr[_low]):
                        _low -= 1

                    # 양쪽으로 각각 이동후 high에서 피봇보다 작은 수 low에서 피봇보다 큰 수와 서로 교환
                    if (_high < _low and arr[_high] < pivot < arr[_low]):
                        swap(arr, _low, _high)

                mid = _low

            swap(arr, lt, mid)

            sort(lt, mid - 1)
            sort(mid + 1, rt)

    sort(lt, rt)


# arr = [22, 3, 4, 1, 45, 65, 32, 33, 11]
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

# for v in range(50):
#     arr.append(r.randrange(1, 100))

print("before", arr)
quick_sort(arr, 0)
print("after", arr)
print()
print("before", arr)
quick_sort(arr, 1)
print("after", arr)
