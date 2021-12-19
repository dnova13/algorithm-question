import sys
from Heap import Heap

sys.stdin = open("in1.txt", "r")

max_heap = Heap(1)

print(max_heap.tree)

while True:
    v = int(input())

    # print(":", v)

    if v < 0:
        break

    if v == 0:
        print(max_heap.remove())

    else:
        max_heap.insert(v)

# print(max_heap.tree)
