function merge_sort(arr) {

    let lt = 0
    let rt = arr.length - 1

    sort(lt, rt)

    function sort(lt, rt) {

        if (lt < rt) {

            let mid = parseInt((lt + rt) / 2)

            // 후위 순위로 L -> R -> root 순으로 / 분해(L-R)-> 결합 (root) 함
            sort(lt, mid)
            sort(mid + 1, rt)

            let tmp = []
            let p1 = lt
            let p2 = mid + 1

            console.log("bbb", tmp, p1, mid, p2, rt)

            while (p1 <= mid && p2 <= rt) {

                if (arr[p1] < arr[p2]) {

                    tmp.push(arr[p1])
                    p1++
                }
                else {
                    tmp.push(arr[p2])
                    p2++
                }
            }

            // 임시 메모리에서 오른쪽 노드 포인트로 비교 정렬한 후, 남은 왼쪽 노드 결합
            if (p1 <= mid) tmp = tmp.concat(arr.slice(p1, mid + 1))

            // 임시 메모리에서 왼쪽 노드 포인트로 비교 정렬한 후, 남은 오른쪽 노드 결합
            if (p2 <= rt) tmp = tmp.concat(arr.slice(p2, rt + 1))

            // 정렬 완료한 임시메모리를 실제 배열에 복붙
            for (i = 0; i < tmp.length; i++) {
                arr[lt + i] = tmp[i]
            }
        }

    }
}


let arr = [12, 3, 43, 4, 21, 33, 23, 32]

console.log("Before", arr)
merge_sort(arr)
console.log('After', arr)
