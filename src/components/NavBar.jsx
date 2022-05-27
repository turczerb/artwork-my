import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav-div">
        <Link to="/home">Home </Link>
      </div>
      <div className="nav-div">
        <Link to="/login">Login </Link>
      </div>
      <div className="nav-div">
        <Link to="/register">Register </Link>
      </div>
      <div className="nav-div">
        <Link to="/saved">Saved </Link>
      </div>
    </nav>
  );
};

export default NavBar;
