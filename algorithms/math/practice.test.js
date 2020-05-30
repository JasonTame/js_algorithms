const { getMin, isEven } = require('./practice')

test('getMin() returns the minimum value of a given array', () => {
    expect(getMin([27, 5, 100])).toBe(5)
    expect(getMin([50, 50, 257, 63, 12452])).toBe(50)

})

test('isEven() returns true if passed an even number', () => {
	expect(isEven(8)).toBe(true)
})

test('isEven() returns false if passed an odd number', () => {
	expect(isEven(5)).toBe(false)
})
