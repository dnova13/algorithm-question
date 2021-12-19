import sys
from heap import Heap

sys.stdin = open("in2.txt", "r")


min_heap = Heap(0)

print(min_heap.tree)

while True:
    v = int(input())

    print(":", v)

    if v < 0:
        break

    if v == 0:
        print(min_heap.remove())

    else:
        min_heap.insert(v)

print(min_heap.tree)
