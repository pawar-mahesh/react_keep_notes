import Cards from "../cards/card";
import "./cardsContainer.css";

const cardsContainer = () => {
  return (
    <div className="ui-container">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
};

export default cardsContainer;
