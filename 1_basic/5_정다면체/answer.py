from enum import Enum, auto


class Polyhedron(Enum):

    TETRAHEDRON = 4  # 사면체
    CUBE = 6  # 육면체
    OCTAHEDRON = 8  # 팔면체
    DODECAHEDRON = 12  # 십이면체
    ICOSAHEDRON = 20  # 정이십면체


n = Polyhedron.TETRAHEDRON.value
m = Polyhedron.CUBE.value


# 각 합의 카운트를 위한 배열 집합
# ex) a[1+1] = {합 카운트}, a[6+4] = {합 카운트}
cnt = [0]*(n+m+1)
max = 0

# 각 합에 대한 카운트 측정
for i in range(1, n+1):
    for j in range(1, m+1):
        cnt[i+j] = cnt[i+j]+1

# 합의 카운트 맥스치 측정.
for i in range(n+m+1):
    if cnt[i] > max:
        max = cnt[i]

arr = []

# 합 카운트 최고치 합들 배열에 넣음.
for i in range(n+m+1):
    if cnt[i] == max:
        arr.append({"sum": i, "cnt": max})

print(arr)
