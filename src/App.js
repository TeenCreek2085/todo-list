import CompleteItems from './features/todos/CompleteItems';
import TodoForm from './features/todos/TodoForm';
import TodoList from './features/todos/TodoList';

const App = () => {
  return (
    <div className="wrapper container">
      <header className="header">
        <h1 className="title">My Todo List</h1>
      </header>
      <main className="main">
        <TodoForm />
        <TodoList />
      </main>
      <footer className="footer">
        <CompleteItems />
      </footer>
    </div>
  );
};

export default App;
