var http = require('http')
var fs = require('fs')

var url = process.argv[2]

http.get(url, (resp) => {
  let data = []

  resp.on('data', (chunk) => {
    data.push(chunk)
  })

  resp.on('end', () => {
    data.forEach( (item) => {
    	console.log(item)
    })
  })

  resp.setEncoding('utf8')
})