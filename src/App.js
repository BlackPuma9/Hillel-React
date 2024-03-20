import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App container">
      <h1 className="mt-lg-5 text-center">TODO LIST</h1>
      <div className="d-flex flex-row flex-wrap">
        <TodoForm />
        <TodoList
          tasks={[{ title: "test1", body: "test2", status: "Completed" }]}
        />
      </div>
    </div>
  );
}

export default App;
