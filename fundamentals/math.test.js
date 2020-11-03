/**
 * calculate a Greatest Common Denominator for a and b.
 * It is the largest positive integer that divides the numbers without a remainder. For example, the GCD of 8 and 12 is 4.
 */


function gcd(a, b) {    
    
    for (let i = (a <= b ? a : b); i > 0 ; i--) {
        if (a % x == 0 && b % x == 0) {
            return x
        }
    }    
    
}


describe("gcd", () => {
    it("returns 1 if two numbers dont have any common denominator", () => {
        expect(gcd(7, 27)).toEqual(1)
        expect(gcd(9, 4)).toEqual(1)
    })
    it("returns 2 if two numbers numbers are even", () => {
        expect(gcd(2, 2)).toEqual(2)
        expect(gcd(2, 4)).toEqual(2)
        expect(gcd(14, 4)).toEqual(2)
    })
    it("calculates gcd for two big numbers", () => {
        expect(gcd(1344, 8512)).toEqual(448)
    })
})