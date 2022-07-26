import React from 'react';
import Navbar from './Navbar';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import './TodoListItem.module.css';

const useSemiPersistentState = () => {
	const [todoList, setTodoList] = React.useState(
		JSON.parse(localStorage.getItem('savedTodoList'))
	);

	React.useEffect(() => {
		localStorage.setItem('savedTodoList', JSON.stringify(todoList));
	}, [todoList]);

	return [todoList, setTodoList];
};

function App() {
	const [todoList, setTodoList] = useSemiPersistentState();

	const addTodo = (newTodo) => {
		setTodoList([...todoList, newTodo]);
	};

	const removeTodo = (id) => {
		const removeNewToDo = todoList.filter((list) => list.id !== id);
		setTodoList(removeNewToDo);
	};

	return (
		<div>
			<Navbar />
			<h1>ToDo List</h1>
			<AddTodoForm onAddTodo={addTodo} />
			<TodoList todoList={todoList} onRemoveTodo={removeTodo} />
		</div>
	);
}

export default App;
