import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const defaultFormState = {
  title: "",
  body: "",
};
const TodoForm = ({ saveDataHandler, deleteDataHandler }) => {
  const [formState, setFormState] = useState({ ...defaultFormState });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.title.length || !formState.body.length) {
      alert("Inputs can not be empty");
      return;
    }
    saveDataHandler(formState);
    setFormState({ ...defaultFormState });
  };
  const inputHandler = ({ target }) => {
    const newState = { ...formState };
    newState[target.name] = target.value;
    setFormState(newState);
  };

  const deleteAllTodosHandler = () => {
    deleteDataHandler();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="TodosForm.title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          name="title"
          value={formState.title}
          type="text"
          placeholder="Todo title"
          onChange={inputHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="TodosForm.description">
        <Form.Label>Task body</Form.Label>
        <Form.Control
          name="body"
          value={formState.body}
          as="textarea"
          rows={6}
          placeholder="Task body"
          onChange={inputHandler}
        />
      </Form.Group>
      <div className="d-flex justify-content-between">
        <Button type="submit" variant="outline-primary">
          Save Todo
        </Button>{" "}
        <Button
          className="text-right"
          type="button"
          variant="outline-danger"
          onClick={deleteAllTodosHandler}
        >
          Delete All ToDos
        </Button>
      </div>
    </Form>
  );
};

export default TodoForm;
