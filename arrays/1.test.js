/**
 * return a sorted array.
 * sortedByAge: users are be sorted by their age
 * sortedByNameLength: users are sorted by the length of their name.
 * So, "Bob" is 3 letters, so it should be placed before "Alice".
 */

const users = [
    {name: 'Robert', age: 32},
    {name: 'Alice', age: 23},
    {name: 'Bob', age: 17},
]

function sortedByAge(arr) {
    return arr.sort((a, b) => a.age - b.age)
}

function sortedByNameLength(arr) {
    return arr.sort((a, b) => a.name.length - b.name.length)
}

describe('sort by age', () => {
    it('works', () => {
        const expected = [users[2], users[1], users[0]];
        expect(sortedByAge()).toEqual(expected);
    })
})

describe('sort by name length', () => {
    it('works', () => {
        const expected = [users[2], users[0], users[1]];
        expect(sortedByNameLength()).toEqual(expected);
    })
})