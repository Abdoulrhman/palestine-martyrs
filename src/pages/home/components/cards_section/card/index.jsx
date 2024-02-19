import { useState } from "react";
import "./index.scss";
import PropTypes from "prop-types";
import { GoChevronUp } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";

const Card = ({ cardInfo }) => {
  const { title, description, image, deathDate, deathPlace, age } = cardInfo;

  const [fadeIn, setFadeIn] = useState(false);

  const handleSlideClick = () => {
    setFadeIn(!fadeIn);
  };

  const fadeStyle = {
    maxHeight: fadeIn ? "300px" : "0px",
    opacity: fadeIn ? "1" : "0",
    transition: "all 1.75s ease",
    width: "100%",
    margin: "10px 0",
    lineHeight: "20px"
  };

  return (
    <div className="card">
      <div className="card-info">
        <div className="image-container">
          <img src={image} alt={title} className="card-image" />
        </div>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <div className="dates">
            <div className=" date-col">
              <h4>Death Date</h4>
              <p>{deathDate} </p>
            </div>
            <div className=" date-col">
              <h4>Death Place</h4>
              <p>{deathPlace} </p>
            </div>
            <div className=" date-col">
              <h4> Age</h4>
              <p>{age} </p>
            </div>
          </div>
        </div>
      </div>
      <div id="fade-in" className="card-description"
        style={fadeStyle}>
        {description}
      </div>

      <a className="slide card-more" href="#" onClick={handleSlideClick}>
        <span>More</span>
        {fadeIn ? <GoChevronUp style={{ fontSize: '20px' }} /> : <GoChevronDown style={{ fontSize: '20px' }} />}
      </a>



    </div>
  );
};

export default Card;

Card.propTypes = {
  cardInfo: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    deathDate: PropTypes.string,
    deathPlace: PropTypes.string,
    age: PropTypes.number
  }).isRequired
};