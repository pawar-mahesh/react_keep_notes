import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./inputCard.css";

const InputCard = () => {
  return (
    <Form className="inputCard col-lg-3">
      <Form.Control className="from-input" type="text" placeholder="Header" />
      <Form.Control
        className="from-input"
        type="text"
        placeholder="Take a note..."
      />
      <Button className="btn" variant="primary">
        Save
      </Button>
      <Button className="btn" variant="secondary">
        Cancal
      </Button>
    </Form>
  );
};

export default InputCard;
