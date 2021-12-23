words = ["level", "moon", "soon", "abcda", "abccba", "aba", "abcdcba", "abcde"]


def check_palindrome(word):

    word = word.lower()

    for i in range(0, int(len(word)/2)):

        """ if (word[i:i+1] != word[len(word)-i-1:len(word)-i]):
            return False """

        """ if word[i] != word[-1-i]:
            return False """
        # 파이썬에서 사용할 수 잇는 기법
        if word != word[::-1]:
            return False

    return True


for word in words:
    result = check_palindrome(word)
    print(result, word)
