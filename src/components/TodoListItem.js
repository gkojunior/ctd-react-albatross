import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
import { GrEdit } from 'react-icons/gr';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const TodoListItem = ({ todo, onRemoveTodo }) => {
	const { title, id } = todo;
	return (
		<div>
			<li className={style.ListItem}>
				{title}
				<span>
					<AiOutlineCheckCircle
						className={style.checkSquare}
					/>
					<GrEdit className={style.checkSquare} />
					<MdDeleteForever
						className={style.checkSquare}
						onClick={() => onRemoveTodo(todo.id)}
					/>
				</span>
			</li>
		</div>
	);
};

TodoListItem.propTypes = {
	completedTodo: PropTypes.func,
	onRemoveTodo: PropTypes.func,
	todo: PropTypes.object,
};

export default TodoListItem;
