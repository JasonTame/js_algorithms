const isPrime = require('./isprime')

test('Passing 5 returns true, as 5 is a prime number', () => {
	expect(isPrime(5)).toBe(true)
})

test('Passing 49 returns false, as 49 is not a prime number', () => {
	expect(isPrime(49)).toBe(false)
})
