// Initialize the state arrays for different rooms
const clientStates = {
	room1: [],
	room2: [],
};

// Initialize the Socket.IO client
const socket = io();

// Join specific rooms
const rooms = ['room1', 'room2']; // Example rooms
socket.emit('joinRooms', rooms);

// Function to add a new state
function addState(room, newState) {
	socket.emit('addState', { room, state: newState });
}

// Function to update an existing state by index
function updateState(room, index, updatedState) {
	socket.emit('updateState', { room, index, newState: updatedState });
}

// Function to remove a state by index
function removeState(room, index) {
	socket.emit('removeState', { room, index });
}

// Listen for initial state
socket.on('initState', (data) => {
	const { room, state } = data;
	clientStates[room] = state;
	console.log(`Initial state for ${room}:`, clientStates[room]);
});

// Listen for state updates
socket.on('updateState', (data) => {
	const { room, state } = data;
	clientStates[room] = state;
	console.log(`Updated state for ${room}:`, clientStates[room]);
});

// Example usage
// Simulate adding, updating, and removing states
setTimeout(() => {
	addState('room1', { name: 'state1', value: 10 });
	addState('room2', { name: 'state2', value: 20 });
	updateState('room1', 0, { name: 'state1', value: 30 });
	removeState('room2', 0);
}, 1000);
