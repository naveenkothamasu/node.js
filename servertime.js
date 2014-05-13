var net = require('net');
var port = process.argv[2];

server = net.createServer(function (socket){
		var date = new Date();
		var month =  1+date.getMonth();
		var sMonth = month;
		if (month < 10){
			sMonth = 0+""+month;
		}
		
		//"YYYY-MM-DD hh:mm"
		var data =date.getFullYear()+"-"+ sMonth +"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+"\n";
		socket.write(data+"\n");
		socket.end();
	});

server.listen(port);
