"use strict";
const input = document.getElementById('todoinput');
const btn = document.getElementById('btn');
const form = document.querySelector('form');
const list = document.getElementById('todolist');
const todos = readToDos();
todos.forEach(el => createToDo(el));
function readToDos() {
    const savedToDos = localStorage.getItem('todos');
    if (savedToDos === null)
        return [];
    return JSON.parse(savedToDos);
}
function saveToDos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newToDo = {
        text: input.value,
        completed: false,
    };
    createToDo(newToDo);
    todos.push(newToDo);
    saveToDos();
    input.value = '';
}
function createToDo(toDo) {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = toDo.completed;
    checkbox.addEventListener('change', function () {
        console.log('CLICKED!!!');
        toDo.completed = checkbox.checked;
        saveToDos();
    });
    newLi.append(toDo.text);
    newLi.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLi);
}
form === null || form === void 0 ? void 0 : form.addEventListener('submit', handleSubmit);
//# sourceMappingURL=exercises.js.map