var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString().split("\n").length-1;//Last line doesn't end with \n, so the last element is a '' element

console.log(str)
