// Escribir un programa que tome una frase, la divida en palabras y las
// encierre en *

// i.e.
//

// *******
// *Hola *
// *a    *
// *todos*
// *******
//
//
//
const square = require('../../src/level-2/square-tdd.js')

describe('Function to split frase by words', () => {
    it('Returns a word', () => {
        expect(square.splitPhrase('Holita')).toBe('Holita')
    })

    it('Returns a word 2', () => {
        expect(square.splitPhrase('Hola')).toBe('Hola')
    })

    it('Returns a sentence splited by words', () => {
        expect(square.splitPhrase('Holita tu')).toEqual(['Holita', 'tu'])
    })

    it('Returns a longer phrase splited by words', () => {
        expect(square.splitPhrase('Hola holita tu')).toEqual(['Hola', 'holita', 'tu'])
    })
})

describe('Function to return the longest word', () => {
    it('Returns a word', () => {
        expect(square.longestWord(['a'])).toBe('a')
    })

    it('Returns a word v2', () => {
        expect(square.longestWord(['b'])).toBe('b')
    })
    
    it('Returns the longest of 2', () => {
        expect(square.longestWord(['a', 'bb'])).toBe('bb')
    })      

    it('Returns the longest of 2 v2', () => {
        expect(square.longestWord(['aa', 'b'])).toBe('aa')
    })      

    it.skip('Returns the longest of 2 v3', () => {
        expect(square.longestWord(['aa', 'bb'])).toBe('aa')
    })      
})

describe.skip('Square', () => {
    it('Prints the header', () => {
        expect(square.header(6)).toBe('********')
    })

    it('Prints one line', () => {
        expect(square.footer('a', 6)).toBe('*a     *')
    })

    it('Prints one line v2', () => {
        expect(square.footer('todos', 6)).toBe('*todos *')
    })

    it('Prints the footer', () => {
        expect(square.footer(6)).toBe('********')
    })
})