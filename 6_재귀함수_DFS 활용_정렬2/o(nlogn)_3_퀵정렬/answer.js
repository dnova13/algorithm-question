function quick_sort(arr, type) {

    let lt = 0
    let rt = arr.length - 1

    sort(lt, rt)

    function sort(lt, rt) {

        if (lt < rt) {

            let pivot = arr[lt]
            let mid

            // # 오름차순
            if (type == 0) {
                let _low = lt + 1
                let _high = rt

                while (_low <= _high) {

                    // # 왼쪽 열의 수가 기준점 피봇 수보다 작거나 같을 경우 옆으로 이동.
                    if (pivot >= arr[_low])
                        _low += 1

                    // # 오른쪽 열의 수가 기준점 피봇 수보다 크거나 같을 경우 옆으로 이동.
                    if (pivot <= arr[_high])
                        _high -= 1

                    // # 양쪽으로 각각 이동후 low에서 피봇보다 큰수와 high에서 피봇보다 작은수 서로 교환
                    if (_low < _high && arr[_high] < pivot < arr[_low]) {
                        let tmp = arr[_high]
                        arr[_high] = arr[_low]
                        arr[_low] = tmp
                    }
                }

                mid = _high
            }

            // # 내림차순
            else {
                let _high = lt + 1
                let _low = rt

                while (_high <= _low) {

                    // # 왼쪽 열의 수가 기준점 피봇 수보다 크거나 같을 경우 옆으로 이동.
                    if (pivot <= arr[_high])
                        _high += 1

                    // # 오른쪽 열의 수가 기준점 피봇 수보다 작을 같을 경우 옆으로 이동.
                    if (pivot >= arr[_low])
                        _low -= 1

                    // # 양쪽으로 각각 이동후 high에서 피봇보다 작은 수 low에서 피봇보다 큰 수와 서로 교환
                    if (_high < _low && arr[_high] < pivot < arr[_low]) {
                        let tmp = arr[_high]
                        arr[_high] = arr[_low]
                        arr[_low] = tmp
                    }

                    mid = _low
                }
            }

            let tmp = arr[lt]
            arr[lt] = arr[mid]
            arr[mid] = tmp

            sort(lt, mid - 1)
            sort(mid + 1, rt)
        }
    }

}

arr = [22, 3, 4, 1, 45, 65, 32, 33, 11]

for (let i = 0; i < 50; i++)
    arr.push(parseInt(Math.random() * 100 + 1))


console.log("before", arr)
quick_sort(arr, 0)
console.log("after", arr)
console.log()
console.log("before", arr)
quick_sort(arr, 1)
console.log("after", arr)
