import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function TodoItem({ title, body, status }) {
  return (
    <Card style={{ width: "15rem", background: "lightgrey" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <hr />
        <Card.Text>{status}</Card.Text>
        <hr />
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
}
