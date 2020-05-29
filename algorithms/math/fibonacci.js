function fibonacci(index) {
	{
		const sequence = [1, 1]
		let next = 0
		for (i = 2; i <= index; i++) {
			next = sequence[i - 1] + sequence[i - 2]
			sequence.push(next)
        }
        
		return sequence[index]
	}
}

module.exports = fibonacci