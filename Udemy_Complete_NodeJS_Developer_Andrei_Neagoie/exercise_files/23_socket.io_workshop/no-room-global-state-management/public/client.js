// Initialize the state array
const clientStates = [];

// Initialize the Socket.IO client
const socket = io();

// Function to add a new state
function addState(newState) {
	clientStates.push(newState);
	console.log('State added:', newState);
	console.log('Current clientStates:', clientStates);
}

// Function to update an existing state by index
function updateState(index, updatedState) {
	if (index >= 0 && index < clientStates.length) {
		clientStates[index] = updatedState;
		console.log('State updated at index', index, ':', updatedState);
		console.log('Current clientStates:', clientStates);
	} else {
		console.error('Invalid index:', index);
	}
}

// Function to remove a state by index
function removeState(index) {
	if (index >= 0 && index < clientStates.length) {
		const removedState = clientStates.splice(index, 1);
		console.log('State removed at index', index, ':', removedState);
		console.log('Current clientStates:', clientStates);
	} else {
		console.error('Invalid index:', index);
	}
}

// Listen for a custom event to add a state
socket.on('addState', (data) => {
	addState(data);
});

// Listen for a custom event to update a state
socket.on('updateState', (data) => {
	updateState(data.index, data.newState);
});

// Listen for a custom event to remove a state
socket.on('removeState', (data) => {
	removeState(data.index);
});

// Example usage
// Simulate receiving events from the server
setTimeout(() => {
	socket.emit('addState', { name: 'state1', value: 10 });
	socket.emit('addState', { name: 'state2', value: 20 });
}, 1000);
