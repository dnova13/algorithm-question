import random as r
from Heap import Heap


def heap_sort(type, arr):

    tmp = []
    heap = Heap(type)

    if type == 0:

        for v in arr:
            heap.insert(v)

        while heap.size():
            tmp.append(heap.remove())

    else:

        for v in arr:
            heap.insert(v)

        while heap.size():
            tmp.append(heap.remove())

    return tmp


arr = [12, 3, 43, 4, 21, 33, 23, 32, 33, 11]

for v in range(100):
    arr.append(r.randrange(1, 100))

print("asc before", arr)
arr = heap_sort(0, arr)
print("asc after", arr)
print()
print("desc before", arr)
arr = heap_sort(1, arr)
print("desc after", arr)
