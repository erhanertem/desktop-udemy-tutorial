import express from 'express';

import { ToDo } from '../models/todo';

const TODOS: ToDo[] = [];

export const createTodo: express.RequestHandler = (req, res, next) => {
	const text = (req.body as { text: string }).text;
	const newToDo = new ToDo(Math.random().toString(), text);

	TODOS.push(newToDo);

	res.status(201).json({ message: 'Created the todo.', createdTodo: newToDo });
};

export const getTodos: express.RequestHandler = (req, res, next) => {
	res.json({ todos: TODOS });
};

// VERY IMPORTANT! In order to have TS support on params, RequestHandler gets generic type<> describing params
export const updateTodo: express.RequestHandler = (req, res, next) => {
	const todoId = (req.params as { id: string }).id;

	const updatedText = (req.body as { text: string }).text;

	const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

	// GUARD CLAUSE
	if (todoIndex < 0) {
		throw new Error('Could not find todo!');
	}

	TODOS[todoIndex] = new ToDo(TODOS[todoIndex].id, updatedText);

	res.status(200).json({ message: 'Updated!', updatedTodo: TODOS[todoIndex] });
};

export const deleteTodo: express.RequestHandler = (req, res, next) => {
	const todoId = (req.params as { id: string }).id;

	const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

	// GUARD CLAUSE
	if (todoIndex < 0) {
		throw new Error('Could not find todo!');
	}

	TODOS.splice(todoIndex, 1);

	res.status(200).json({ message: 'Todo deleted!' });
};
