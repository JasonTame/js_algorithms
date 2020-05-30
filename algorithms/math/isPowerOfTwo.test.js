const isPowerOfTwo = require('./isPowerOfTwo')

test("Passing a number less than 1 returns false", () => {
	expect(isPowerOfTwo(1)).toBe(false);
})

test('Passing a number which is a power of two returns true', () => {
	expect(isPowerOfTwo(8)).toBe(true)
	expect(isPowerOfTwo(16)).toBe(true)

})

test('Passing a number which is not a power of two returns false', () => {
	expect(isPowerOfTwo(5)).toBe(false)
	expect(isPowerOfTwo(13)).toBe(false)
	expect(isPowerOfTwo(20)).toBe(false)
})
