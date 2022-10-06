import React, { useEffect } from 'react';
import AddTodoForm from './components/AddTodoForm';
import Nav from './components/Nav';
import TodoList from './components/TodoList';
import './components/App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	const [todoList, setTodoList] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	useEffect(() => {
		if (!isLoading) {
			localStorage.setItem('savedTodoList', JSON.stringify(todoList));
		}
	}, [todoList, isLoading]);

	const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`;

	useEffect(() => {
		fetch(url, {
			method: 'Get',
			headers: {
				authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				const todos = data.records.map((item) => ({
					id: item.id,
					title: item.fields.Title,
				}));

				data.records.sort((objectA, objectB) =>
					objectB.fields.Title.localeCompare(objectA.fields.Title)
				);
				setTodoList([...todos]);
				setIsLoading(false);
			});
	}, [url]);

	const addTodo = (newTodo) => {
		const title = newTodo.title;
		const addTask = {
			fields: {
				Title: title,
			},
			typecast: true,
		};
		fetch(
			`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(addTask),
			}
		).then((response) => response.json());
		setTodoList([...todoList, newTodo]);
	};

	const removeTodo = (id) => {
		fetch(
			`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`,
			{
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
				},
			}
		)
			.then((response) => response.json())
			.then((result) => {
				const filteredTodos = todoList.filter((result) => result.id !== id);
				setTodoList(filteredTodos);
			});
	};

	return (
		
		<div>
			<Nav />
			<h1>To Do List</h1>
			<div className='todoContainer'>
				<div className='todoForm'>
					<AddTodoForm onAddTodo={addTodo} />
				</div>

				<div className='todoList'>
					{isLoading ? (
						<p>Loading...</p>
					) : (
						<TodoList todoList={todoList} onRemoveTodo={removeTodo} />
					)}
				</div>
			</div>
		</div>
					
	);
}

export default App;
