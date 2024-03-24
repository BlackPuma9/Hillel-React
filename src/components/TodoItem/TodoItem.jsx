import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const TodoItem = ({
  index,
  title,
  body,
  isCompleted,
  deleteSingleTodoHandler,
  updateIsCompleted,
}) => {
  return (
    <Card
      className="mx-1 mb-5 shadow"
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
        <Button
          type="button"
          variant="danger"
          onClick={() => deleteSingleTodoHandler(index)}
        >
          Delete
        </Button>{" "}
        <Link to={`/todos/${index}`}>
          <Button type="button" variant="primary">
            View
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default TodoItem;
