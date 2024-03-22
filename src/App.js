import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { title: "test1", body: "test1", isCompleted: true },
    { title: "test2", body: "test2", isCompleted: false },
  ]);

  const createTask = (title, body) => {
    setTasks([...tasks, { title, body, isCompleted: false }]);
  };

  const deleteAll = () => {
    setTasks([]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((item, i) => i !== index));
  };

  const updateIsCompleted = (index) => {
    tasks[index].isCompleted = !tasks[index].isCompleted;
    setTasks([...tasks]);
  };

  return (
    <div className="App container">
      <h1 className="mt-lg-5 text-center">TODO LIST</h1>
      <div className="d-flex flex-row flex-wrap">
        <TodoForm createTask={createTask} deleteAll={deleteAll} />
        <TodoList
          tasks={tasks}
          deleteTask={deleteTask}
          updateIsCompleted={updateIsCompleted}
        />
      </div>
    </div>
  );
}

export default App;
