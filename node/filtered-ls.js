var fs = require('fs')
var path = require('path')

var filetype = process.argv[3]

fs.readdir(process.argv[2], 'utf8', function processafter(error, data){
	if (error) return console.error(error)
	data.forEach(function (item) {
		if(path.extname(item) == ('.' + filetype)) {
			console.log(item)
		}
	})
})

