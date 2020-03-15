module.exports = function repeat(operation, num) {
	if (num == 0) return null
	return repeat(operation, num-1)
}