var net = require('net')
var port = process.argv[2]

var server = net.createServer((socket) => {
	//console.log('client connected')
	
	//socket.on('end', () => {
	//	console.log('client disconnected')
	//})
	
	//question here... why do we need .pipe()?
	//➞ apparently, it is a method used to take a readable stream and connect it to a writeable steam
	
	socket.destroy()
})

/*
server.listen(port, () => {
	//console.log('client side incoming')
	var now = new Date()
	var month_now = zerofill(now.getMonth()+1);
	console.log(now.getFullYear() + '-' + 
				month_now + '-' +
				now.getDate() + ' ' +
				now.getHours() + ':' +
				now.getMinutes() 
				)
})

function zerofill(i) {
    return (i < 10 ? '0' : '') + i;
}
*/