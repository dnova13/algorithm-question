txt = "73 32 31 49 94 37 40 62 78 66 27 100 99 29 9"
let arr = txt.split(' ').map(i => Number(i))
let keyword = 66

arr.sort((a, b) => a - b) // 오름 차순
// arr.sort((a, b) => b - a) // 내림 차순
let start = 0
let end = arr.length

console.log(arr)

function binery_search_arr(_arr) {
    if (keyword < _arr[parseInt(len(_arr) / 2)])
        return _arr.slice(0, parseInt(len(_arr) / 2))
    else
        return _arr.slice(parseInt(len(_arr) / 2))
}


function binery_search_idx(start, end, arr) {

    if (keyword < arr[parseInt((start + end) / 2)])
        return { "start": start, "end": parseInt((start + end) / 2) }
    else if (keyword > arr[parseInt((start + end) / 2)])
        return { "start": parseInt((start + end) / 2), "end": end }
    else
        return { "start": parseInt((start + end) / 2), "end": parseInt((start + end) / 2) }
}

while (arr.slice(start, end).length > 1) {
    let a = binery_search_idx(start, end, arr)

    start = a.start
    end = a.end
}

console.log(arr)

console.log(`answer : idx: ${start}, value: ${arr[start]}`)





// """ ---------------------------------------------------------- """

// """ 다른 정답 """

console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

let lt = 0
let rt = arr.length - 1

while (lt <= rt) {
    mid = parseInt((lt + rt) / 2)

    if (arr[mid] == keyword) {
        break
    }

    else if (arr[mid] > keyword)
        rt = mid - 1
    else
        lt = mid + 1

}

console.log(`answer : idx: ${mid}, value: ${arr[mid]}`)

