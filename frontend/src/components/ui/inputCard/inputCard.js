import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./inputCard.css";

const InputCard = () => {
  const [header, setHeader] = useState("");
  const [message, setMessage] = useState("");

  const onHeaderChangeHandler = (event) => {
    setHeader(event.target.value);
  };

  const onMessageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const onSaveHandler = () => {
    fetch("http://192.168.1.10:3001/addNote", {
      method: "POST",
      body: JSON.stringify({
        header: header,
        message: message,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => {
        window.location.reload();
        onCancelHandler();
      })
      .catch((err) => console.log(err));
  };

  const onCancelHandler = () => {
    setHeader("");
    setMessage("");
  };

  const isSaveButtonEnabledDisabled =
    header.trim().length > 0 && message.trim().length > 0 ? false : true;

  return (
    <Form className="inputCard col-lg-3">
      <Form.Control
        className="from-input"
        type="text"
        placeholder="Header"
        value={header}
        onChange={onHeaderChangeHandler}
      />
      <Form.Control
        className="from-input"
        type="text"
        placeholder="Take a note..."
        value={message}
        onChange={onMessageChangeHandler}
      />
      <Button
        className="btn"
        variant="primary"
        onClick={onSaveHandler}
        disabled={isSaveButtonEnabledDisabled}
      >
        Save
      </Button>
      <Button className="btn" variant="secondary" onClick={onCancelHandler}>
        Cancal
      </Button>
    </Form>
  );
};

export default InputCard;
