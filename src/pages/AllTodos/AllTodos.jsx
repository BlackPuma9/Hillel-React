import React from "react";
import BaseTemplate from "../../templates/BaseTemplate";
import { getData } from "../../api/todos";
import { Container, Row } from "react-bootstrap";

const AllTodos = () => {
  const todos = getData();

  return (
    <BaseTemplate title="All Todos">
      <Container>
        {todos.map((todo) => {
          return (
            <Row>
              <h2>Title of the Task: {todo.title}</h2>
              <div>Body of the Task: {todo.body}</div>
              <div>
                Status:{" "}
                {todo.isCompleted ? "Task is Completed" : "Task not Completed"}
              </div>
            </Row>
          );
        })}
      </Container>
    </BaseTemplate>
  );
};

export default AllTodos;
