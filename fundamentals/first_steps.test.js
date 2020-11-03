
/**
 * fizz-buzz. Napisz funkcję, która dla zadanego n zwróci:
 * jeśli n jest podzielne przez 3: "fizz" 
 * jeśli n jest podzielne przez 5: "buzz" 
 * jeśli n jest podzielne przez 15: "fizzbuzz" 
 * jeśli n nie jest podzielne ani przez 3, ani przez 5: n (czyli po prostu liczbę która jest na wejściu)
 */

 function fizzbuzz(n) {
    if (n % 3 == 0 && n % 5 == 0) {
        return 'fizzbuzz';
    } else if (n % 3 == 0) {
        return 'fizz';
    } else if (n % 5 == 0) {
        return 'buzz';
    } else {
        return n;
    }
 }

 it('returns fizz for multiples of 3', () => {
    expect(fizzbuzz(3)).toEqual('fizz')
    expect(fizzbuzz(6)).toEqual('fizz')
    expect(fizzbuzz(33)).toEqual('fizz')
})

it('returns buzz for multiples of 5', () => {
    expect(fizzbuzz(5)).toEqual('buzz')
    expect(fizzbuzz(10)).toEqual('buzz')
    expect(fizzbuzz(500)).toEqual('buzz')
})


it('returns fizzbuzz for multiples of 3 and 5', () => {
    expect(fizzbuzz(15)).toEqual('fizzbuzz')
    expect(fizzbuzz(30)).toEqual('fizzbuzz')
    expect(fizzbuzz(300)).toEqual('fizzbuzz')
})


it("returns a number for input that's not a multiple of 3 or 5", () => {
    expect(fizzbuzz(1)).toEqual(1)
    expect(fizzbuzz(4)).toEqual(4)
    expect(fizzbuzz(17)).toEqual(17)
})

