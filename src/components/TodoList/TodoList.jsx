import TodoItem from "../TodoItem";
import { Col, Row } from "react-bootstrap";

export default function TodoList({
  todos,
  deleteSingleTodoHandler,
  updateIsCompleted,
}) {
  return (
    <Row>
      {todos.map((item, index) => (
        <Col key={Math.random()} md={4}>
          <TodoItem
            index={index}
            title={item.title}
            body={item.body}
            isCompleted={item.isCompleted}
            deleteSingleTodoHandler={deleteSingleTodoHandler}
            updateIsCompleted={updateIsCompleted}
          />
        </Col>
      ))}
    </Row>
  );
}
