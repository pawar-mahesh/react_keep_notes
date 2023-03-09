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
        <Card.Footer>
          <EditIcon />
          <DeleteForeverIcon />
        </Card.Footer>
      ) : null}
    </Card>
  );
};

export default Cards;
