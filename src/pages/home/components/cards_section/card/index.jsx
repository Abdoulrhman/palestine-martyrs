import { useState } from "react";
import "./index.scss";
import PropTypes from "prop-types";

const Card = ({ cardInfo }) => {
  const {
    title,
    description,
    image,
    deathDate,
    deathPlace,
    age,
  } = cardInfo;
  const [show, setShow] = useState(false);

  return (
    <div className="card">
      <div className="card-info">
        <div className="image-container">
          <img src={image} alt={title} className="card-image" />
        </div>
        <div style={{ width: "100%", padding: "0px 16px" }}>
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
      <p
        className="card-description"
        style={{ display: show ? "block" : "none" }}
      >
        {description}
      </p>
      <a href="#" className="card-more" onClick={() => setShow(!show)}>
        More <span> ^ </span>
      </a>
    </div>
  );
};

export default Card;

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
