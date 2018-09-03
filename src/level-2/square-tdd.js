function splitPhrase (phrase)  {
    if (phrase.split(' ').length > 1) {
        return phrase.split(' ')
    }
    return phrase
}

function longestWord (words) {
    if (words.length === 1) {
        return words[0]
    }  else if (words.length === 2) {
        return words[1]
    }
}

module.exports = {splitPhrase, longestWord}