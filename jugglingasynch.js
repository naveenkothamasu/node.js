var http = require('http');

function getContent(url, next){
	http.get(url, 
		function(response){
			response.setEncoding("utf8");
			var body = '';
			response.on('data', function(chunk){ body += chunk; });
			response.on('end', function() {next(body);} );
			response.on('error', function(err) {throw err;});
		});
}

function getContents(urls, callback){
	var count = urls.length;
	var data = {};
	urls.forEach(function (url) {
		getContent(url, function (results) {
			data[url] = results;
			count--;
			if (count <= 0) {
				callback(data);
			}
		});
	});
	
}
getContents([process.argv[2], process.argv[3], process.argv[4]], 
	function (data){
		console.log(data[process.argv[2]]);
		console.log(data[process.argv[3]]);
		console.log(data[process.argv[4]]);
	}
);
