import React from 'react';
import { connect } from 'react-redux';
import { Todo, deleteTodo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
	todos: Todo[];
	fetchTodos: typeof fetchTodos;
	deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<AppProps> {
	onButtonClick = (): void => {
		this.props.fetchTodos();
	};
	onTodoClick = (id: number): void => {
		this.props.deleteTodo(id);
	};

	renderList(): JSX.Element[] {
		return this.props.todos.map((todo: Todo) => {
			return (
				<div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
					{todo.title}
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<button onClick={this.onButtonClick}>Fetch</button>
				{this.renderList()}
			</div>
		);
	}
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
	return { todos };
};
// const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
// 	return { todos: state.todos };
// };

//The connect() function connects a React component to a Redux store. function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)(MyComponent)
export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
