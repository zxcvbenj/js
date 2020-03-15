module.exports = function doubleAll(numbers) {
	//arrow notation
	//return numbers.map(x => x*2)

	//function notation
	return numbers.map(function double(num) {
		return num * 2
	})
}