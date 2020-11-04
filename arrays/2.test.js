/**
 * Implement a bubble sort algorithm.
 * You are given an array and comparator function.
 * The comparator is a function acceptin two parameters and 
 * it returns a number. It works in a following way:
 * * if a is larger than b, return 1
 * * if b is larger than a, return -1
 * * if a equals b, return 0
 * 
 * DON'T use Array's `sort` function.
 */


function bubbleSort(arr, comparator) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (comparator(arr[j], arr[j+1]) == 1) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}

describe('bubbleSort', () => {
    const baseComparator = (a, b) => a > b ? 1 : a < b ? -1 : 0
    it('works', ()=> {
        const comparator = baseComparator
        expect(bubbleSort([2,1,3], comparator)).toEqual([1,2,3])
    })
    it('is stable', ()=> {
        const array = ['1a', '2a', '3', '8', '2b', '1b', '4']
        const comparator = (a, b) => baseComparator(a.substring(0, 1), b.substring(0, 1))
        expect(bubbleSort(array, comparator)).toEqual(["1a", "1b", "2a", "2b", "3", "4", "8"])
    })
})