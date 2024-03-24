import React from "react";
import BaseTemplate from "../../templates/BaseTemplate/BaseTemplate";
import { getData } from "../../api/todos";
import { Navigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const TodoPage = () => {
  const { id } = useParams();

  const todo = getData().find((item, index) => id === index.toString());
  if (!todo) {
    return <Navigate to={"/*"} />;
  }

  return (
    <BaseTemplate title={`Todos Page ${todo.title}`}>
      <Container>
        Task Body: {todo.body}
        <br />
        Status: {todo.isCompleted ? "Task is Completed" : "Task not Completed"}
      </Container>
    </BaseTemplate>
  );
};

export default TodoPage;
