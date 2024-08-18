import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

axios.get(url).then((res) => {
	const { id: ID, title, completed: finished } = res.data as Todo;
	logTodo(ID, title, finished);
});

const logTodo = (ID: number, title: string, finished: boolean): void => {
	console.log(`
   The Todo with ID: ${ID}
   Has a title of: ${title}
   Is it finished? ${finished}
   `);
};
