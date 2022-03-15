import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  const renderedList = todos.map(todo => {
    return <TodoItem key={todo.id} {...todo} />;
  });

  return (
    <section className="form-section">
      <ul className="todo-list">{renderedList}</ul>
    </section>
  );
};

export default TodoList;
