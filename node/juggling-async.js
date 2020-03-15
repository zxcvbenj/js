var http = require('http')
var fs = require('fs')
var bl = require('bl')

var urls = []
var results = []
var count = 0
for (let i=2; i<process.argv.length; i++){
	urls.push(process.argv[i])
}

function httpfunction(i){
	http.get(urls[i], (response) => {
		response.pipe(bl(function(err, data){
			if (err) console.error(err)
			results[i] = data.toString()
			count++
			if (count == 3){
				printresults()
			}
		}))

	})
}

function printresults(){
	for(let i=0;i<urls.length; i++){
		console.log(results[i])
	}	
}

for(let i=0;i<urls.length; i++){
	httpfunction(i)
}