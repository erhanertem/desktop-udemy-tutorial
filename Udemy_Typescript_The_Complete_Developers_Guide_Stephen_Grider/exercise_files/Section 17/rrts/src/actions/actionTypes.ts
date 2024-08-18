import { DeleteTodoAction, FetchTodosAction } from './todosActions';

export enum ActionTypes {
	fetchTodos,
	deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
