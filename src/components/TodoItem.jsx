import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export default function TodoItem({
  index,
  title,
  body,
  isCompleted,
  deleteTask,
  updateIsCompleted,
}) {
  return (
    <Card
      className="mx-1 mb-5"
      style={{ width: "15rem", background: "lightgrey" }}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <hr />
        <Form.Check
          inline
          label="Completed"
          name="group1"
          type={"checkbox"}
          id={`inline-${"checkbox"}-1`}
          checked={isCompleted}
          onChange={() => updateIsCompleted(index)}
        />
        <hr />
        <Button variant="danger" onClick={() => deleteTask(index)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
