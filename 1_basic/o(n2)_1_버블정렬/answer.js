/* 
    - 버블 정렬
    
    인접한 두개의 데이트를 비교해가며 정렬
 */

let arr = [23, 44, 123, 122, 122, 433, 12, 355, 2, 34, 56]


function bubble_sort(arr, sort) {

    if (sort == "asc") {
        // # 오름 차순
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {

                if (arr[j] > arr[j + 1]) {
                    let tmp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = tmp
                }
            }
        }
    }
    else {
        // # 내림 차순
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {

                if (arr[j] < arr[j + 1]) {
                    let tmp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = tmp
                }
            }
        }
    }

    return arr

}

console.log(bubble_sort(arr, "asc"))
console.log(bubble_sort(arr, "desc"))
