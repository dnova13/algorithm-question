
def merge_sort(arr, type):

    lt = 0
    rt = len(arr) - 1

    def sort(lt, rt):

        if (lt < rt):
            mid = (lt+rt) // 2

            # // 후위 순위로 L -> R -> root 순으로 / 분해(L-R)-> 결합 (root) 함
            sort(lt, mid)
            sort(mid+1, rt)

            p1 = lt
            p2 = mid+1
            tmp = []

            while (p1 <= mid and p2 <= rt):

                """ 이미 정렬된 두개의 파트 정렬을 비교 """

                if (not type):

                    if arr[p1] < arr[p2]:
                        tmp.append(arr[p1])
                        p1 += 1

                    else:
                        tmp.append(arr[p2])
                        p2 += 1
                else:
                    if arr[p1] > arr[p2]:
                        tmp.append(arr[p1])
                        p1 += 1

                    else:
                        tmp.append(arr[p2])
                        p2 += 1

            #  // 임시 메모리에서 오른쪽 노드 포인트로 비교 정렬한 후, 남은 왼쪽 노드 결합
            if p1 <= mid:
                tmp = tmp+arr[p1:mid+1]

            # // 임시 메모리에서 왼쪽 노드 포인트로 비교 정렬한 후, 남은 오른쪽 노드 결합
            if p2 <= rt:
                tmp = tmp+arr[p2:rt+1]

            # // 정렬 완료한 임시메모리를 실제 배열에 복붙
            for i in range(len(tmp)):
                arr[lt+i] = tmp[i]

    sort(lt, rt)


if __name__ == "__main__":

    arr = [12, 3, 43, 4, 21, 33, 23, 32]

    print("Before", arr)
    merge_sort(arr, 0)
    print('After', arr)
    print("Before", arr)
    merge_sort(arr, 1)
    print('After', arr)
