let fs = require("fs");
let content = fs.readFileSync("in3.txt").toString();

let _list = content.split('\n')[1].trim().split(' ').map((v) => Number(v))


console.log(_list)

let lt = 0
let rt = _list.length - 1

let arr = []
let _lr = []


while (lt < rt) {

    console.log(lt, rt)

    if (arr.length != 0 && _list[lt] < arr[arr.length - 1] && _list[rt] < arr[arr.length - 1]) {
        lt += 1
        rt -= 1
        continue
    }

    if (_list[lt] < _list[rt]) {
        if (arr.length == 0 || _list[lt] > arr[arr.length - 1]) {
            _lr.push("L")
            arr.push(_list[lt])
            lt += 1
        }

        else if (_list[lt] < arr[arr.length - 1]) {
            _lr.push("R")
            arr.push(_list[rt])
            rt -= 1
        }
    }

    else if (_list[lt] > _list[rt]) {

        if (arr.length == 0 || _list[rt] > arr[arr.length - 1]) {
            _lr.push("R")
            arr.push(_list[rt])
            rt -= 1
        }

        else if (_list[rt] < arr[arr.length - 1]) {
            _lr.push("L")
            arr.push(_list[lt])
            lt += 1
        }
    }

    else if (_list[lt] == _list[rt] && (arr.length == 0 || _list[rt] > arr[arr.length - 1])) {

        _lr.push("LR")
        arr.push(_list[rt])
        lt += 1
        rt -= 1
    }
    // console.log(lt, rt, _list[lt], _list[rt])
}
console.log(arr, ", 증가 수열 길이 :", arr.length)
console.log(_lr)
