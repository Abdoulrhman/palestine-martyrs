import icons from "../../assets/icons";
import "./index.scss";
import Logo from "../../assets/images/logo/logo.png";

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="top-header-container">
        <button className="add-martyr-btn">Add Martyr Information</button>
        <div className="search-div">
          <img src={icons.searchIcon} alt="search" className="search-icon" />
          <input
            type="text"
            placeholder="Search for a martyr"
            className="search-input"
          />
        </div>
      </div>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default TopHeader;
