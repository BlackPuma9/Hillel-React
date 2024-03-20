import TodoItem from "./TodoItem";

export default function TodoList({ tasks }) {
  return tasks.map((task) => (
    <TodoItem title={task.title} body={task.body} status={task.status} />
  ));
}
