import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

const TodoForm = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const handleFormSubmit = evt => {
    evt.preventDefault();
    if (text.trim()) {
      dispatch(addTodo({ title: text }));
    }
    setText('');
  };

  return (
    <section>
      <form className="form">
        <input
          onChange={evt => setText(evt.target.value)}
          className="form-input"
          value={text}
          type="text"
          maxLength={30}
          placeholder="Add todo ..."
        />
        <button
          onClick={handleFormSubmit}
          className={`btn btn-submit ${!text.trim() && 'btn-disabled'}`}
          disabled={!text.trim()}
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default TodoForm;
