/**
 * It calculates the factorial ofa given number
 * 
 * Time Complexity: O(n)
 * 
 * @param {number} num, e.g 5
 * @return {number} The factorial of the number, e.g 120
 */
const factorial = (num) => {
	let sum = num

	for (let i = num; i > 1; i--) {
		num--
		sum *= num
	}

	return sum
}

module.exports = factorial
