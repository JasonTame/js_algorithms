const factorial = require('./factorial')

test('It calculates the factorial of a given number', () => {
    expect(factorial(3)).toBe(6)
	expect(factorial(4)).toBe(24)
	expect(factorial(5)).toBe(120)
})
