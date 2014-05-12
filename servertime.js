var net = require('net');
var port = process.argv[2];

net.createServer(function (socket){
	//var date = new Date();
	//"YYYY-MM-DD hh:mm"
	//var data =date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+"\n";
 
	socket.write("Hello");
	socket.on('end',function(){console.log("Server disconnected")});
}).listen(port);
