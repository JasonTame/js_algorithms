/**
 * Given an array of numbers, return the minimum value
 *
 * Time Complexity: O(n)
 *
 * @param {Array} numbers
 * @return {number} The smallest value in the array
 */

const getMin = (numbers) => {
	let minVal = numbers[0]
	for (const num of numbers) {
		if (num < minVal) {
			minVal = num
		}
	}

	return minVal
}

/**
 * Given a number, return true if its even, or odd if its false
 *
 * Time complexity: O(1)
 *
 * @param {number} val
 * @return {boolean} true if val is even, or false if val is odd
 */
const isEven = (val) => {
	return val % 2 == 0
}

module.exports = { getMin, isEven }
