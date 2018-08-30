const comparations = require('../../src/level-1/comparations.js')

describe('Comparations', () => {
    it('Weak number comparation', () => {
        expect('5' == 5, 'Weak comparation (==) uses type coertion to transforms variables and make them equivalents').toBe(true)
    })

    it('Weak number and strings comparation', () => {
        expect('a' == 5, 'Type coertion uses string content').toBe(false)
    })

    it('Strong number comparation', () => {
        expect('5' === 5, 'Strong comparation (===) does not use type coertion').toBe(false)
    })

    it('Weak boolean comparation', () => {
        expect(null == false, 'Null does not coerce boolean').toBe(false)
    })

    it('Strong boolean comparation', () => {
        expect(null === false, '').toBe(false)
    })

    it('Weak boolean comparation 2', () => {
        expect(undefined == false, 'undefined does not coerce boolean').toBe(false)
    })

    it('Strong boolean comparation 2', () => {
        expect(undefined === false, 'undefined is not a boolean').toBe(false)
    })

    it('Weak boolean comparation 3', () => {
        expect(NaN == false, 'NaN does not coerce to boolean').toBe(false)
    })

    it('Strong boolean comparation 3', () => {
        expect(NaN === false, '').toBe(false)
    })

    it('Weak non-value comparation', () => {
        expect(null == undefined, 'Null and undefined does coerce and are equivalets').toBe(true)
    })

    it('Strong non-value comparation', () => {
        expect(null === undefined, 'Null and undefined are equivalets but not identical').toBe(false)
    })

    it('Weak non-value comparation', () => {
        expect(null == NaN, '').toBe(false)
    })

    it('Strong non-value comparation', () => {
        expect(null === NaN, '').toBe(false)
    })
})

describe('Operations', () => {
    it('Weak number and strings operations', () => {
        expect('5' + 1, 'Sum operator coerces numbers to strings').toBe('51')
    })

    it('Weak number and strings operations 2', () => {
        expect(5 + '1', 'Numbers can be concat to a String').toBe('51')
    })

    it('Weak number and strings operations 3', () => {
        expect('5' * 1, 'Multiply operator coerces strings to numbers').toBe(5)
    })

    it('Weak number and strings operations 4', () => {
        expect(5 * '1', 'Numbers can be concat to a String').toBe(5)
    })

})

it.skip('Weak number and strings comparation', () => {
    expect('a' == 5, '').toBe()
})
