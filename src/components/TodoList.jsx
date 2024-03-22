import TodoItem from "./TodoItem";

export default function TodoList({ tasks, deleteTask, updateIsCompleted }) {
  return tasks.map((task, index) => (
    <TodoItem
      key={index}
      index={index}
      title={task.title}
      body={task.body}
      isCompleted={task.isCompleted}
      deleteTask={deleteTask}
      updateIsCompleted={updateIsCompleted}
    />
  ));
}
