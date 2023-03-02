import Cards from "../cards/card";
import InputCard from "../inputCard/inputCard";
import "./cardsContainer.css";

const cardsContainer = () => {
  return (
    <div className="ui-container">
      <InputCard />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
};

export default cardsContainer;
