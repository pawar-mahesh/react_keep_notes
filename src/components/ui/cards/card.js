import Card from "react-bootstrap/Card";
import "./card.css";

const Cards = () => {
  return (
    <Card border="warning" style={{ width: "18rem" }} className="cards">
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Warning Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
