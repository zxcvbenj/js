var http = require('http')
var fs = require('fs')
var bl = require('bl')

var url = process.argv[2]

http.get(url, (response) => {
	
	/* personal solution
	let data = ''
	let charlen = 0
	response.on('data', (chunk) => {
		data += chunk
		charlen += chunk.length
	})

	response.on('end', () => {
		console.log(charlen)
		console.log(data)
	})
	response.setEncoding('utf8')
	*/

	response.pipe(bl(function(err, data){
		if (err) console.error(err)
		data = data.toString()
		console.log(data.length)
		console.log(data)
	}))

})