""" 순회 Traversal """


""" 
전위 순회 Preorder Traversal

root -> left -> right

부모노드 -> 왼쪽 자식 노드 -> 오른쪽 자식 노드

"""

# 1 2 4 5 3 6 7


def PreorderTraversal(v):
    if v > 7:
        return
    else:

        # 왼쪽 노드 push 출력
        print(v, end=' ')

        # 먼저 왼쪽 노드 검색
        PreorderTraversal(v*2)

        # 오름쪽 검색 노드 검색
        PreorderTraversal(v*2+1)


PreorderTraversal(1)
print()


""" 
중위 순회 Inorder Traversal

left -> root -> right

왼쪽 자식 노드  -> 부모노드 -> 오른쪽 자식 노드

"""


def InorderTraversal(v):
    if v > 7:
        return
    else:

        # 왼쪽 노드 검색.
        InorderTraversal(v*2)

        # 왼쪽 노드 pop 한 값 출력.
        print(v, end=' ')

        # 오른쪽 노드 검색 시작
        InorderTraversal(v*2+1)


InorderTraversal(1)


""" 

후위 순회 Postorder Traversal

left -> right -> root

왼쪽 자식 노드 -> 오른쪽 자식 노드 -> 부모노드 


"""

print()


def PostorderTraversal(v):
    if v > 7:
        return
    else:

        # 왼쪽 검색 시작.
        PostorderTraversal(v*2)

        # 오른쪽 노드 검색 시작
        PostorderTraversal(v*2+1)

        # 왼오 검색을 완료 후에 나온 값 출력.
        print(v, end=' ')


PostorderTraversal(1)
