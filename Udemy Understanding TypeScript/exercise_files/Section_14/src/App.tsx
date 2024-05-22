import React, { useState } from 'react';

import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import { Todo } from './todo.model';

const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const toDoAddHandler = (text: string) => {
		setTodos((prevTodos) => [
			...prevTodos,
			{ id: Math.random().toString(), text: text },
		]);
	};

	const toDoDeleteHandler = (todoId: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== todoId);
		});
	};
	return (
		<div className="App">
			<NewToDo onAddToDo={toDoAddHandler} />
			<ToDoList items={todos} onDeleteToDo={toDoDeleteHandler} />
		</div>
	);
};

export default App;
