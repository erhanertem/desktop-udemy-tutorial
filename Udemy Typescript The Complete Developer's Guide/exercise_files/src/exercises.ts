//LESSON 1 - GETTING STARTED WITH TYPESCRIPT
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(res => {
  // const { id, title, completed } = res.data as ToDo;
  const { id, title, completed }: ToDo = res.data;
  logToDo(id, title, completed);
});

const logToDo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of  : ${title}
  Is it finished  ? ${completed}
  `);
};
