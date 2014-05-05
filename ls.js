var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], 
	function(err, list){
		if(err){
			throw err;	
		}
		for(var i=0; i<list.length; i++){
			if(path.extname(list[i]).substring(1) == process.argv[3]){
				console.log(list[i]);
			}
		}		
	});
