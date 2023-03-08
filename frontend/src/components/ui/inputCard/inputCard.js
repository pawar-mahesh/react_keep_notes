import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./inputCard.css";

const InputCard = () => {
  const onSaveHandler = () => {
    console.log("Save button Clicked");
    fetch("http://192.168.1.10:3001/addNote", {
      method: "POST",
    })
      .then((data) => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <Form className="inputCard col-lg-3">
      <Form.Control className="from-input" type="text" placeholder="Header" />
      <Form.Control
        className="from-input"
        type="text"
        placeholder="Take a note..."
      />
      <Button className="btn" variant="primary" onClick={onSaveHandler}>
        Save
      </Button>
      <Button className="btn" variant="secondary">
        Cancal
      </Button>
    </Form>
  );
};

export default InputCard;
