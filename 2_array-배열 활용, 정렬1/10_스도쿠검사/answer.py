import sys
sys.stdin = open("in3.txt", 'r')

n = 9
arr = [list(map(int, input().split())) for _ in range(n)]

print(arr)


def check_one_to_nine(arr):

    arr2 = sorted(arr)

    for i in range(9):
        if (i+1 != arr2[i]):
            return False

    return True


is_solve = True

for i in range(n):
    # print(arr[i])
    # print([col[i] for row in arr])
    if not check_one_to_nine(arr[i]):
        is_solve = False
        break

    if not check_one_to_nine([col[i] for col in arr]):
        is_solve = False
        break

if (is_solve):
    for i in range(3):
        for j in range(3):
            # print([arr[x][y] for x in range(i*3, 3+i*3)
            #        for y in range(j*3, 3+j*3)])
            if not check_one_to_nine([arr[x][y] for x in range(i*3, 3+i*3)
                                      for y in range(j*3, 3+j*3)]):
                is_solve = False
                break

print("YES" if is_solve else "NO")
