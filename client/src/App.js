import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <h1 className="text-center mt-5">Todo App</h1>

      <AddTodo />

      <TodoList />
    </>
  );
}

export default App;
