var fs = require('fs');

var src = fs.createReadStream('./test.txt');
src.pipe(process.stdout)

