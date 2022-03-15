import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from './todoSlice';

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(
      toggleComplete({
        id,
        completed: !completed,
      })
    );
  };

  const handleButtonClick = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <li className={`todo-item ${completed && 'todo-item-complete'}`}>
      <input
        onChange={handleCheckboxClick}
        className="todo-input"
        type="checkbox"
        checked={completed}
      />
      <h2 className="todo-title">{title}</h2>
      <button
        onClick={handleButtonClick}
        className={`btn todo-btn ${!completed && 'btn-disabled'}`}
        type="button"
        disabled={!completed}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
