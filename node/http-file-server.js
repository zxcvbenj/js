var http = require('http')
var fs = require('fs')

var server = http.createServer((req, res) => {
	var stream = fs.createReadStream(process.argv[3])

	stream.on('open', () => {
		stream.pipe(res)
	})
})

server.listen(process.argv[2])

/*
	explanation @ https://nodejs.org/en/knowledge/advanced/streams/how-to-use-fs-create-read-stream/
*/