//@ts-check

/**
 * Calculates the fibonacci sequence and returns the value of the sequence
 * at the given index. This implementation uses recursion rather than a for loop. 
 *
 * Time Complexity: O(n)
 *
 * @param {number} index The index of the sequence
 * @param {Object} memo Stores the value of the result each time fib() is called, to prevent redundancy
 * @return {number}
 */
function fib(index, memo) {
	let result;

	if (memo[index]) {
		return memo[index]
	}

	if (index === 0 || index === 1) {
		result = 1
	} else {
		result = fib(index - 1, memo) + fib(index - 2, memo)
	}
	memo[index] = result

	return result
}

module.exports = fib
