import PropTypes from "prop-types";
import Card from "./card";
import "./index.scss";

const CardContainer = ({ cards }) => {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardContainer;

CardContainer.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};
