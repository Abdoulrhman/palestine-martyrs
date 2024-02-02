import "./index.scss";
import PropTypes from "prop-types";

const Card = ({
  imageUrl = "https://cdn.vectorstock.com/i/1000x1000/02/82/many-children-happy-family-group-and-sunrise-sky-vector-20180282.webp",
  title = "Test Title",
  description = "Test Description",
}) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href="#" className="card-more">
          More
        </a>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
