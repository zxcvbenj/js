var fs = require('fs')
var path = require('path')

module.exports = function (dir, typ, cb) {
	fs.readdir(dir, 'utf8', function next(error, data){
		if (error) return cb(error)
		
		data = data.filter(function (item) {
			if(path.extname(item) == ('.' + typ)) {
				return path.extname(item) == ('.' + typ)			
			}
		})
		cb(null, data)
	})
}