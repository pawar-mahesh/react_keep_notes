import Card from "react-bootstrap/Card";
import { useState } from "react";
import "./card.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Cards = (props) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  const onClickDeleteHandler = (id) => {
    fetch("http://192.168.1.10:3001/deleteNote", {
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const onClickEditHandler = (id) => {
    fetch("http://192.168.1.10:3001/editNote", {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        header: "Header Updated",
        message: "Message Updated",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card
      border="warning"
      style={{ width: "18rem" }}
      className="cards"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Card.Header>{props.header}</Card.Header>
      <Card.Body>
        <Card.Text>{props.message}</Card.Text>
      </Card.Body>

      {hover ? (
        <div>
          <EditIcon
            className="btns"
            onClick={() => {
              onClickEditHandler(props.id);
            }}
          />
          <DeleteForeverIcon
            className="btns"
            onClick={() => {
              onClickDeleteHandler(props.id);
            }}
          />
        </div>
      ) : null}
    </Card>
  );
};

export default Cards;
