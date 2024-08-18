const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Initialize room states
const roomStates = {};

// Handle socket connections
io.on('connection', (socket) => {
	console.log('A user connected:', socket.id);

	// Join rooms
	socket.on('joinRooms', (rooms) => {
		rooms.forEach((room) => {
			socket.join(room);
			console.log(`Socket ${socket.id} joined room ${room}`);

			// Initialize room state if it doesn't exist
			if (!roomStates[room]) {
				roomStates[room] = [];
			}

			// Send the current state to the newly connected client for each room
			socket.emit('initState', { room, state: roomStates[room] });
		});
	});

	// Handle add state event
	socket.on('addState', (data) => {
		const { room, state } = data;
		if (roomStates[room]) {
			roomStates[room].push(state);
			io.to(room).emit('updateState', { room, state: roomStates[room] });
		}
	});

	// Handle update state event
	socket.on('updateState', (data) => {
		const { room, index, newState } = data;
		if (roomStates[room] && roomStates[room][index]) {
			roomStates[room][index] = newState;
			io.to(room).emit('updateState', { room, state: roomStates[room] });
		}
	});

	// Handle remove state event
	socket.on('removeState', (data) => {
		const { room, index } = data;
		if (roomStates[room] && roomStates[room][index]) {
			roomStates[room].splice(index, 1);
			io.to(room).emit('updateState', { room, state: roomStates[room] });
		}
	});

	// Handle socket disconnection
	socket.on('disconnect', () => {
		console.log('User disconnected:', socket.id);
	});
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
