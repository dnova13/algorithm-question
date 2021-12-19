
const Polyhedron = {
    TETRAHEDRON: 4, // 사면체
    CUBE: 6, // 육면체
    OCTAHEDRON: 8, // 팔면체
    DODECAHEDRON: 12,  // 십이면체
    ICOSAHEDRON: 20,  // 정이십면체
}



let n = Polyhedron.TETRAHEDRON
let m = Polyhedron.CUBE


// 각 합의 카운트를 위한 배열 집합
// ex) a[1 + 1] = { 합 카운트 }, a[6 + 4] = { 합 카운트 }
let cnt = []
let max = 0

// 각 합에 대한 카운트 측정
for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
        cnt[i + j] = isNaN(cnt[i + j]) ? 1 : cnt[i + j] + 1
    }
}

// console.log(cnt)

// 합의 카운트 맥스치 측정.
cnt.forEach((v, i) => {
    if (cnt[i] > max)
        max = cnt[i]
})

// console.log(max)

arr = []

// 합 카운트 최고치 합들 배열에 넣음.
cnt.forEach((v, i) => {
    if (cnt[i] == max) {
        arr.push({ "sum": i, "cnt": max })
    }
})

console.log(arr)
