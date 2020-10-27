/**
 * Implement a "flatten" function.
 * Transform a nested array to a flat one.
 * See the tests to figure out what it does.
 */

function flatten(arr) {
    return arr;
}


describe('flatten', () => {
    it('flattens an array', () => {
        const arr = [[1,2,3], [4,5,6], [3, 2, 1]];
        const expected = [1, 2, 3, 4, 5, 6, 3, 2, 1];
        expect(flatten(arr)).toEqual(expected);
    })
})
