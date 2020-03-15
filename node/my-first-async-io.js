var fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function finishedReading(error, data) {
  if (error) return console.error(error)
  let i = data.split('\n');
  console.log(i.length - 1);
})
