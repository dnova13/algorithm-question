// """ 순회 Traversal """


/* """ 
전위 순회 Preorder Traversal

root -> left -> right

부모노드 -> 왼쪽 자식 노드 -> 오른쪽 자식 노드

"""
 */



function PreorderTraversal(v) {
    if (v > 7)
        return
    else {

        // # 왼쪽 노드 push 값 출력
        process.stdout.write(v + " ")

        // # 왼쪽 노드 검색
        PreorderTraversal(v * 2)

        // # 오름쪽 검색 노드 검색
        PreorderTraversal(v * 2 + 1)
    }
}

PreorderTraversal(1) // # 1 2 4 5 3 6 7
console.log()


/* """
중위 순회 Inorder Traversal

left -> root -> right

왼쪽 자식 노드  -> 부모노드 -> 오른쪽 자식 노드

""" */

function InorderTraversal(v) {
    if (v > 7)
        return
    else {

        // # 왼쪽 노드 검색.
        InorderTraversal(v * 2)

        // # 왼쪽 노드 pop 한 값 출력.
        process.stdout.write(v + " ")

        // # 오른쪽 노드 검색 시작
        InorderTraversal(v * 2 + 1)
    }
}

InorderTraversal(1) // 4 2 5 1 6 3 7
console.log()


/* 

"""

후위 순회 Postorder Traversal

left -> right -> root

왼쪽 자식 노드 -> 오른쪽 자식 노드 -> 부모노드


"""
 */

function PostorderTraversal(v) {
    if (v > 7)
        return
    else {

        // # 왼쪽 검색 시작.
        PostorderTraversal(v * 2)

        // # 오른쪽 노드 검색 시작
        PostorderTraversal(v * 2 + 1)

        // # 왼오 검색을 완료 후에 나온 값 출력.
        process.stdout.write(v + " ")
    }
}
PostorderTraversal(1)  //  4 5 2 6 7 3 1 
