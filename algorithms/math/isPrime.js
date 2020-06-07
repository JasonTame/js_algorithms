//@ts-check

/**
 * Determines whether a given number is a prime number or not
 *
 * Time Complexity: O(sqrt(n))
 *
 * @param {number} num
 * @return {boolean}
 */

function isPrime(num) {
	let sqroot = Math.floor(Math.sqrt(num))
	let isPrime = num != 1
	for (let i = 2; i < sqroot + 1; i++) {
		if (num % i == 0) {
			isPrime = false
			break
		}
	}
	return isPrime
}

module.exports = isPrime
