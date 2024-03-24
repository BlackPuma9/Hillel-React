import React, { useState } from "react";
import BaseTemplate from "../../templates/BaseTemplate";
import { Col, Container, Row } from "react-bootstrap";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import { getData, saveData } from "../../api/todos";

const HomePage = () => {
  const [todoItems, setTodoItems] = useState(getData());

  const addTodoItem = (todoItem) => {
    const todo = { ...todoItem, isCompleted: false };
    const todos = structuredClone(todoItems);
    todos.push(todo);
    setTodoItems(todos);
    saveData(todos);
  };

  const removeAllTodos = (todoItems) => {
    setTodoItems([]);
    saveData([]);
  };

  const deleteTodo = (id) => {
    const todos = todoItems.filter((item, index) => id !== index);
    setTodoItems(todos);
    saveData(todos);
  };

  const updateIsCompleted = (index) => {
    const todos = structuredClone(todoItems);
    todos[index].isCompleted = !todos[index].isCompleted;
    setTodoItems(todos);
    saveData(todos);
  };

  return (
    <BaseTemplate title="Home Page">
      <Container>
        <Row>
          <Col md={4}>
            <TodoForm
              saveDataHandler={addTodoItem}
              deleteDataHandler={removeAllTodos}
            />
          </Col>
          <Col md={8}>
            {todoItems.length ? (
              <TodoList
                todos={todoItems}
                deleteSingleTodoHandler={deleteTodo}
                updateIsCompleted={updateIsCompleted}
              />
            ) : (
              <h3 className="py-4 border text-center">No Items Added</h3>
            )}
          </Col>
        </Row>
      </Container>
    </BaseTemplate>
  );
};

export default HomePage;
