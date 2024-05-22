import React, { useRef } from 'react';

import './NewTodo.css';

type NewToDoProps = {
	onAddToDo: (todoText: string) => void;
};

const NewToDo: React.FC<NewToDoProps> = ({ onAddToDo }) => {
	let textInputRef = useRef<HTMLInputElement>(null);

	const todoSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = textInputRef.current!.value;
		onAddToDo(enteredText);
		textInputRef.current!.value = '';
	};

	return (
		<form onSubmit={todoSubmitHandler}>
			<div className="form-control">
				<label htmlFor="todo-text">Todo text</label>
				<input id="todo-text" type="text" ref={textInputRef} />
			</div>
			<button type="submit">ADD TODO</button>
		</form>
	);
};

export default NewToDo;
