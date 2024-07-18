const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

function addTodoDOM(todo) {
	const container = document.querySelector('#todo-list');
	const div = document.createElement('div');
	div.classList.add('todo');
	div.innerText = todo.title;
	div.setAttribute('data-id', todo.id);
	if (todo.completed) {
		div.classList.add('done');
	}
	container.appendChild(div);
}

function getTodos() {
	fetch(apiUrl + '?_limit=10')
		.then((res) => res.json())
		.then((data) => {
			// console.log(data);
			data.forEach((todo) => {
				addTodoDOM(todo);
			});
		});
}

const createTodo = (e) => {
	e.preventDefault();
	const newTodo = {
		title: e.target.firstElementChild.value,
		completed: false,
	};

	fetch(apiUrl, {
		method: 'POST',
		body: JSON.stringify(newTodo),
		headers: { 'Content-type': 'application/json' },
	})
		.then((res) => res.json())
		.then((data) => addTodoDOM(data))
		.finally((document.querySelector('#title').value = ''));
};

function toggleCompleted(e) {
	if (e.target.classList.contains('todo')) {
		e.target.classList.toggle('done');
	}

	// Persist to the DB
	console.log(e.target.classList.contains('done'));
	updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
}

function updateTodo(id, completed) {
	console.log(id, completed);
	fetch(`${apiUrl}/${id}`, {
		method: 'PATCH',
		// body: JSON.stringify({ completed: completed }),
		body: JSON.stringify({ completed }),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	// .then((res) => res.json())
	// .then((data) => console.log(data));
}

function deleteTodo(e) {
	if (e.target.classList.contains('todo')) {
		console.log('deleted');
		const id = e.target.dataset.id;

		fetch(`${apiUrl}/${id}`, {
			method: 'DELETE',
		}).then((data) => e.target.remove());
		// .then((res) => res.json())
	}
}

// Initializer
(() => {
	// Initiate gettodo when page gets fully parsed
	document.addEventListener('DOMContentLoaded', getTodos);
	// Add event listener for form submission
	document.querySelector('#todo-form').addEventListener('submit', createTodo);
	// Add task done/undone toggle via event delgation to parent of todos
	document.querySelector('#todo-list').addEventListener('click', toggleCompleted);
	// Delete todos
	document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
})();
