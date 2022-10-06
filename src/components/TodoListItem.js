import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const TodoListItem = ({ todo, onRemoveTodo }) => {
    const { title } = todo;
    return (
        <div>
            <li className={style.ListItem}>
                {title}
                <span>
                    <AiOutlineCheckCircle
                        className={style.checkSquare1}
                    />
                    <BiEdit className={style.checkSquare2} />
                    <MdDeleteForever
                        className={style.checkSquare3}
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
