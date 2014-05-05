var fs = require('fs');
var path = require('path');

function list(mypath, ext){ 
	fs.readdir(mypath, 
		function(err, list){
			if(err){
				throw err;
			}
			for(var i=0; i < list.length; i++){
				if(path.extname(list[i]) == "."+ext){
					console.log(list[i]);
				}
			}
		}
	);
};

exports.list = list;
