import TodoList from './todo';
import TodoUI from './ui';

const listElement = document.querySelector('#todoList');
const newTodoForm = document.querySelector('.new-todo')

newTodoForm.addEventListener('submit', e => {
    e.preventDefault();
    const title = newTodoForm.newTitle.value.trim();
    const notes = newTodoForm.newNotes.value.trim();
    const dueDate = newTodoForm.newDueDate.valueAsDate;
    const assignedTo = newTodoForm.newAssigned.value;

    list.addTodo(title, notes, assignedTo, dueDate)
        .then(() => newTodoForm.reset())
        .catch(err => console.log(err));
    console.log('adding?')
});

const list = new TodoList('BjJ1l7ulF10Ib12oOHCJ','Stephen');
const listUI = new TodoUI(listElement);

listUI.clear();

console.log(list);

list.getTodos(data => {
    listUI.render(data);
    console.log(data);
});

