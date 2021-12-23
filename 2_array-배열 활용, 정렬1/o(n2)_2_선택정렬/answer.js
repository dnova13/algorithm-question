
/* """ 
    - 선택 정렬 
    
    정렬 순서상 가장 앞서는 것을 선택하여 왼쪽으로 보내면서 데이터 교체함.,
""" */

let arr = [23, 44, 123, 122, 122, 433, 12, 355, 2, 34, 56]

function selection_sort(arr, sort) {
    if (sort == "asc") {
        // # 오름 차순
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    let tmp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = tmp
                }
            }
        }
    }
    else {
        // # 내림 차순
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    let tmp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = tmp
                }
            }
        }
    }
    return arr
}

console.log(selection_sort(arr, "asc"))
console.log(selection_sort(arr, "desc"))
