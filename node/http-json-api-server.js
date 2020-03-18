var http = require('http')
var port = process.argv[2]

var server = http.createServer((req, res) => {	
	if (req.method != 'GET') return

	var u = new URL(req.url, 'http://localhost:'+port)
	let u_date = new URLSearchParams(u.searchParams).get('iso')
	let actual_date = new Date(u_date)
	let output
	if (u.pathname == '/api/parsetime') {
		output = JSON.stringify({
			hour: actual_date.getHours(),
			minute: actual_date.getMinutes(),
			second: actual_date.getSeconds()
		})
	} 
	if (u.pathname == '/api/unixtime') {
		output = JSON.stringify({
			unixtime: actual_date.getTime()
		})
	}

	if (output) {
		res.writeHead(200, {'Content-Type': 'application/json'})
		res.end(output)	
	} else {
		res.writeHead(404)
		res.end()
	}

	
})

server.listen(port)