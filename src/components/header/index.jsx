// Header.jsx
import NavBar from "../navbar";
import TopHeader from "../top_header";
import "./index.scss";

const Header = () => {
  return (
    <header className="header">
      <TopHeader />
      <NavBar />
    </header>
  );
};

export default Header;
