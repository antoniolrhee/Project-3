var io = require('socket.io')();

io.on('connection', function(socket) {
	// console.log('a user connected');
	// socket.on('disconnect', function() {
	// 	console.log('user disconnected');
	// });
	socket.on('send to server', function(msg) {
		// console.log('message: ' + msg);
		io.emit('send to client', msg);
	});
});

module.exports = io;
