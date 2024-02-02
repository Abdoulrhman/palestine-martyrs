import "./index.scss";
import PropTypes from "prop-types";

const MartyrsSection = ({ martyrs }) => {
  return (
    <section className="martyrs-section">
      <h1>Martyrs</h1>
      <div className="martyrs-container">
        {martyrs.map((martyr) => (
          <div className="martyr-card" key={martyr.id}>
            <img src={martyr.imageUrl} alt={martyr.name} />
            <div className="martyr-info">
              <h2>{martyr.name}</h2>
              <p className="martyr-date">{martyr.date}</p>
              <p className="martyr-location">{martyr.location}</p>
              <button>More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MartyrsSection;

MartyrsSection.propTypes = {
  martyrs: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      name: PropTypes.string,
      date: PropTypes.string,
      location: PropTypes.string,
    })
  ),
};
