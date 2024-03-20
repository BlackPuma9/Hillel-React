import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function TodoForm() {
  return (
    <Form className="mt-lg-5 w-50 mx-3">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Task title</Form.Label>
        <Form.Control type="text" placeholder="Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Task body</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Task body" />
      </Form.Group>
    </Form>
  );
}
