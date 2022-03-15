import { useSelector } from 'react-redux';

const CompleteItems = () => {
  const todos = useSelector(state =>
    state.todos.filter(todo => todo.completed === true)
  );

  return (
    <p className="total-items">
      Total complete items: <span>{todos.length}</span>
    </p>
  );
};

export default CompleteItems;
