module.exports = function getShortMessages (messages) {
	return messages.map(x => x.message).filter(x => x.length < 50)
}