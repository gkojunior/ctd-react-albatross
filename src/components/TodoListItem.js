import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, onRemoveTodo }) => {
	return (
		<div>
			<li className={style.ListItem}>
				{todo.fields.Title}
				<button type='button' onClick={() => onRemoveTodo(todo.id)}>
					Remove
				</button>
			</li>
		</div>
	);
};

TodoListItem.propTypes = {
	onRemoveTodo: PropTypes.func,
	todo: PropTypes.array,
};

export default TodoListItem;
