import React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

const TodoList = ({ todoList, onRemoveTodo }) => {
	return (
		<div>
			<ul>
				{todoList.map((todo) => (
					<TodoListItem
						key={todo.id}
						todo={todo}
						onRemoveTodo={onRemoveTodo}
					/>
				))}
			</ul>
		</div>
	);
};

TodoList.prototype = {
	onRemoveTodo: PropTypes.func,
	todoList: PropTypes.array,
};

export default TodoList;
