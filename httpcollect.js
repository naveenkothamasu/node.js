var http = require('http');
var url = process.argv[2];

http.get(url, function(response){
	response.setEncoding("utf8");
	var body = '';
	var len = 0;
	response.on('data', function (chunk){ body += chunk; len += chunk.length});
	response.on('end', 
		function (){
			console.log(len);
			console.log(body);
		});
})
