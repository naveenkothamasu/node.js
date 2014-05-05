var fs = require('fs');
var path = require('path');

module.exports = function(mypath, ext, callback){ 
	fs.readdir(mypath, 
		function(err, list){
			var data = [];
			if(err){
				return callback(err);
			}
			for(var i=0, j=0; i < list.length; i++){
				if(path.extname(list[i]) == "."+ext){
					data[j++] = list[i];
				}
			}
			callback(null, data);
		}
	);
};
