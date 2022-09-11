import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const TodoListItem = ({ todo, onRemoveTodo }) => {
	return (
		<div>
			<li className={style.ListItem}>
				{todo.fields.Title}{' '}
				<FaTimes style={{ color: 'burlywood', cursor: 'pointer' }} onClick={() => onRemoveTodo(todo.id)}/>
				{/* <button type='button' onClick={() => onRemoveTodo(todo.id)}>
					Remove
				</button> */}
			</li>
		</div>
	);
};

TodoListItem.propTypes = {
	onRemoveTodo: PropTypes.func,
	todo: PropTypes.array,
};

export default TodoListItem;
