var net = require('net')

var server = net.createServer(function(socket) {

})
server.listen(process.argv[2])