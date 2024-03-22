import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function TodoForm({ createTask, deleteAll }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const createTodo = () => {
    if (title.length !== 0 || body.length !== 0) {
      createTask(title, body);
    } else {
      alert("Inputs can not be empty");
    }
  };

  const clearInputs = () => {
    setTitle("");
    setBody("");
  };

  return (
    <Form className="mt-lg-5 mx-3 mb-5 col-4">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Task title</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Task body</Form.Label>
        <Form.Control
          value={body}
          onChange={(e) => setBody(e.target.value)}
          as="textarea"
          rows={3}
          placeholder="Task body"
        />
      </Form.Group>
      <Button variant="outline-primary" onClick={createTodo}>
        Create task
      </Button>{" "}
      <Button variant="outline-warning" onClick={clearInputs}>
        Clear inputs
      </Button>{" "}
      <Button variant="outline-danger" onClick={deleteAll}>
        Delete all
      </Button>{" "}
    </Form>
  );
}
