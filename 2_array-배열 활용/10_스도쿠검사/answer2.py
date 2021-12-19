import sys
sys.stdin = open("in4.txt", 'r')

n = 9
arr = [list(map(int, input().split())) for _ in range(n)]

# print(arr)

row = [0]*10
col = [0]*10


def check_sudoku(_arr):

    for i in range(n):
        for j in range(n):

            if (_arr[i][j] < 0 or _arr[i][j] > 10):
                return False

            if (_arr[j][i] < 0 or _arr[j][i] > 10):
                return False

            try:
                row[_arr[i][j]] = 1
                col[_arr[j][i]] = 1
            except Exception as e:
                return False
        if sum(row) != 9 or sum(col) != 9:
            return False

    for i in range(3):
        for j in range(3):
            temp = [0]*10

            for x in range(i*3, 3+i*3):
                for y in range(j*3, 3+j*3):
                    temp[_arr[x][y]] = 1
            # for x in range(3):
            #     for y in range(3):
            #         temp[_arr[i*3+x][j*3+y]] = 1
            if sum(temp) != 9:
                return False
    return True


print("YES" if check_sudoku(arr) else "NO")
