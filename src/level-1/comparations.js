function weakCompareNumbers () {
    return '5' == 5
}

function strongCompareNumbers () {
    return '5' === 5
}

module.exports = {weakCompareNumbers, strongCompareNumbers}