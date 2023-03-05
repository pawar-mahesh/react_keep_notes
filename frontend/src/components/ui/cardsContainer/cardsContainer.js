import Cards from "../cards/card";
import InputCard from "../inputCard/inputCard";
import "./cardsContainer.css";

const cardsContainer = () => {
  const cardData = [
    {
      _id: "6403560c275b050ae7bacaf7",
      header: "Header_1",
      message: "This is a sample message",
    },
  ];
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

export default cardsContainer;
