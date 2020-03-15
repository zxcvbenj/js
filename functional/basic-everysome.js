module.exports = function checkUsersValid(goodUsers){
	var gooduserar = (goodUsers) => {
		goodUsers.map(x => x.id)
	}

	return function allUsersValid(submittedUsers) {
		console.log(gooduserar)
	}
}