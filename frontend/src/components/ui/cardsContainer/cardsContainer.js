import { useEffect, useState } from "react";
import Cards from "../cards/card";
import InputCard from "../inputCard/inputCard";
import "./cardsContainer.css";

const CardsContainer = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.10:3001/")
      .then((response) => response.json())
      .then((data) => {
        setCardData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="ui-container">
      <InputCard />
      {cardData.map((note) => {
        return (
          <Cards key={note._id} header={note.header} message={note.message} />
        );
      })}
    </div>
  );
};

export default CardsContainer;
