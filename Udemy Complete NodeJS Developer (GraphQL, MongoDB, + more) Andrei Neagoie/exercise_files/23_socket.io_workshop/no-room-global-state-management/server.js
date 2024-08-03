const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Handle socket connections
io.on('connection', (socket) => {
	console.log('A user connected:', socket.id);

	// Emit events to simulate server-side state management
	socket.on('addState', (data) => {
		io.emit('addState', data);
	});

	socket.on('updateState', (data) => {
		io.emit('updateState', data);
	});

	socket.on('removeState', (data) => {
		io.emit('removeState', data);
	});

	socket.on('disconnect', () => {
		console.log('User disconnected:', socket.id);
	});
});

// Start the server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
