var net = require('net')
var port = process.argv[2]

var server = net.createServer((socket) => {
	
	//question here... why do we need .pipe()?
	//➞ apparently, it is a method used to take a readable stream and connect it to a writeable steam
	
	//socket.destroy()

	var now = new Date()
	var month_now = zerofill(now.getMonth()+1);
	socket.write(now.getFullYear() + '-' + 
				month_now + '-' +
				now.getDate() + ' ' +
				now.getHours() + ':' +
				now.getMinutes() + 
				'\n'
				, 'utf8'
				, () => {
					socket.destroy()
				})
	
	//note: can also use socket.end(data) so no need to terminate the data; also 'utf8' isn't needed
	
})

server.listen(port);

function zerofill(i) {
    return (i < 10 ? '0' : '') + i;
}
