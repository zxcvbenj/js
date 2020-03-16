var http = require('http')
var url = require('url')
var port = process.argv[2]

var server = http.createServer((req, res) => {	
	var u = new URL(req.url, 'http://localhost:' + port)
	let u_date = new URLSearchParams(u.searchParams).get('iso')
	if (u.pathname == '/api/unixtime') {
		let ux_date = new Date(u_date)
		let ux_date_ms = ux_date.getTime()
		
	} else if (u.pathname == '/api/parsetime') {
		
	}

	res.writeHead(200, {'Content-Type': 'application/json'})
})

server.listen(port)