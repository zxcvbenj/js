var http = require('http')
var map = require('through2-map')
var port = process.argv[2]

var server = http.createServer((req, res) => {
	req.pipe(map(function(chunk) {
		return chunk.toString().split('').toUpperCase().join('')
	}))

})

server.listen(port)
