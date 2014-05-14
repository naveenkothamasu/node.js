var http = require('http');
var url = require('url');
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
			//src.on('data', function(chunk) {console.log('am in..'+chunk); response.write(chunk)});
			src.pipe(response);
			src.on('end', function(){response.end()});
			//src.pipe(process.stdout);
			//response.write("om sai");
			//response.end();
		});

server.listen(port);
