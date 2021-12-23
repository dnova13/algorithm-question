

/* """
    - 삽입 정렬

    삽입 정렬은 두 번째 자료부터 시작하여 그 앞(왼쪽)의 자료들과 비교하여
    삽입할 위치를 지정한 후 자료를 뒤로 옮기고 지정한 자리에 자료를 삽입하여 정렬

""" */

let arr = [23, 44, 123, 122, 122, 433, 12, 355, 2, 34, 56]


function insertion_sort(arr, sort) {

    if (sort == "asc") {

        // # 오름 차순
        for (let i = 1; i < arr.length; i++) {

            let tmp = i - 1
            let insData = arr[i] // # 정렬 대상을 변수에 저장.

            for (let j = i - 1; j > -1; j--) {

                tmp = j

                if (arr[j] > insData) {
                    arr[j + 1] = arr[j] // # 비교 대상 한칸 씩 밀기
                }
                else
                    break // # 현재 비교수보다 작은 데이터가 없으므로 반복 탈출
            }

            if (tmp == 0) {
                arr[0] = insData // # 탈출한 위치에 데이터 삽입
            }

            else {
                arr[tmp + 1] = insData // # 탈출한 위치에 데이터 삽입
            }
        }
    }
    else {
        // # 내림 차순
        for (let i = 1; i < arr.length; i++) {

            let tmp = i - 1
            let insData = arr[i] // # 정렬 대상을 변수에 저장.

            for (let j = i - 1; j > -1; j--) {

                tmp = j

                if (arr[j] < insData) {
                    arr[j + 1] = arr[j] // # 비교 대상 한칸 씩 밀기
                }
                else
                    break // # 현재 비교수보다 큰 데이터가 없으므로 반복 탈출
            }

            if (tmp == 0) {
                arr[0] = insData // # 탈출한 위치에 데이터 삽입
            }

            else {
                arr[tmp + 1] = insData // # 탈출한 위치에 데이터 삽입
            }
        }
    }

    return arr
}


console.log(insertion_sort(arr, "asc"))
console.log(insertion_sort(arr, "desc"))
