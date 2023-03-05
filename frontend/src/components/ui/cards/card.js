import Card from "react-bootstrap/Card";
import "./card.css";

const Cards = (props) => {
  return (
    <Card border="warning" style={{ width: "18rem" }} className="cards">
      <Card.Header>{props.header}</Card.Header>
      <Card.Body>
        <Card.Text>{props.message}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
