/**
 * Determines whether a given number is a power of two
 * 
 * Time Complexity: O(1)
 * 
 * @param {number} num
 * @return {boolean} 
 */

const isPowerOfTwo = (num) => {
	if (num <= 1) return false

	return (num & (num - 1)) === 0;
}

module.exports = isPowerOfTwo
