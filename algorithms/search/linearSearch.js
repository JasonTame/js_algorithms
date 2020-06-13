//@ts-check

/**
 * Returns the index of the array at which the given element is found
 * 
 * @param {Array} arr 
 * @param {(String|Number)} element 
 * @return {(Number|Boolean)} index if element is found or false if not
 */
function linearSearch(arr, element) {
	for (let i = 0; i < arr.length; i++) {
        if(arr[i] === element) {
            return i;
        }
    }

    return false;
}

module.exports = linearSearch