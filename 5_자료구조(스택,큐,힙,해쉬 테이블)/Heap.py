class Heap:

    type = 0

    def __init__(self, type):
        self.type = type
        self.tree = []

    def size(self):
        return len(self.tree)

    def insert(self, value):

        heap = self.tree

        heap.append(value)
        l = len(heap)

        while(l > 1):

            if self.type == 0:
                if (heap[l//2-1] > heap[l-1]):
                    tmp = heap[l//2-1]
                    heap[l//2-1] = heap[l-1]
                    heap[l-1] = tmp
                    l = l//2
                else:
                    l = 0

            else:
                if (heap[l//2-1] < heap[l-1]):
                    tmp = heap[l//2-1]
                    heap[l//2-1] = heap[l-1]
                    heap[l-1] = tmp
                    l = l//2
                else:
                    l = 0

    def remove(self):
        heap = self.tree

        if (len(heap) < 1):
            return None

        result = heap[0]
        _pop = heap.pop()

        if (len(heap) < 1):
            return result

        heap[0] = _pop
        l = 1

        while(len(heap) >= 2*l):

            if self.type == 0:
                # len(heap) < 2*l + 1 : 오른쪽 노드가 없을 경우.
                if (heap[l-1] <= heap[2*l - 1] and len(heap) < 2*l + 1) or (heap[l-1] <= heap[2*l - 1] and heap[l-1] <= heap[2*l]):
                    return result

                # 왼쪽
                if len(heap) < 2*l + 1 or (heap[2*l - 1] <= heap[2*l]):
                    tmp = heap[2*l - 1]
                    heap[2*l - 1] = heap[l-1]
                    heap[l-1] = tmp
                    l = 2*l

                # 오른쪽
                elif(heap[2*l - 1] > heap[2*l]):
                    tmp = heap[2*l]
                    heap[2*l] = heap[l-1]
                    heap[l-1] = tmp
                    l = 2*l + 1

            else:
                # len(heap) < 2*l + 1 : 오른쪽 노드가 없을 경우.
                if (heap[l-1] >= heap[2*l - 1] and len(heap) < 2*l + 1) or (heap[l-1] >= heap[2*l - 1] and heap[l-1] >= heap[2*l]):
                    return result

                # 왼쪽
                if len(heap) < 2*l + 1 or (heap[2*l - 1] >= heap[2*l]):

                    tmp = heap[2*l - 1]
                    heap[2*l - 1] = heap[l-1]
                    heap[l-1] = tmp
                    l = 2*l

                # 오른쪽
                elif(heap[2*l - 1] < heap[2*l]):
                    tmp = heap[2*l]
                    heap[2*l] = heap[l-1]
                    heap[l-1] = tmp
                    l = 2*l + 1

        return result
