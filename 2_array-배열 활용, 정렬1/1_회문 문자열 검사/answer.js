words = ["level", "moon", "soon", "abcda", "abccba", "aba", "abcdcba", "abcde"]


function check_palindrome(word) {

    word = word.toLowerCase()

    for (let i = 0; i < word.length / 2; i++) {

        /* if (word.substr(i, 1) != word.substr(word.length - i - 1, 1))
            return false */

        if (word[i] != word[word.length - i - 1])
            return false

        return true
    }
}

for (word of words) {
    result = check_palindrome(word)
    console.log(result, word)
}

