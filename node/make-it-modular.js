var mymodule = require('./mymodule')

var dir = process.argv[2]
var typ = process.argv[3]

mymodule(dir, typ, function (err, out){
	if (err) console.error(err)
	out.forEach(function (file){
		console.log(file)
	})
})