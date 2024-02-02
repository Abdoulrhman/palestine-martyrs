import "./index.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="menu">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/stories">Stories</a>
        <a href="/martyrs">Martyrs</a>
        <a href="/reports">Reports</a>
        <a href="/events">Major Events</a>
        <a href="/store">Store</a>
      </div>
      <div className="martyrs-count">
        <span className="count-symbol">€</span>
        <span className="count-number">13,395</span>
        <span className="count-text">Number of Martyrs</span>
      </div>
    </div>
  );
};

export default NavBar;
