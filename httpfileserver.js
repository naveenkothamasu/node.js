var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var path = process.argv[3];

var server = http.createServer( 
		function (request, response){
			
			var stat = fs.statSync(path);
			response.writeHead(200, 
				{
					"Content-Type":"text/plain",
					"Content-Lenght": stat.size
				});
			var src = fs.createReadStream(path);
			src.pipe(response);
			//src.pipe(process.stdout);
			//response.write(data);
			response.end();
		});

server.listen(port);
