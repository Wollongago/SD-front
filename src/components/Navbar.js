import logo from '../assets/images/localguru.png';
import './Navbar.css'
import NavUser from './NavUser';

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="logo" />
      <div className="dropdown">
        <button className="dropbtn">Language</button>
        <div className="dropdown-content">
          {/* the language does not have any function for now */}
          {/* eslint-disable-next-line */}
          <a href="#">English</a>
          {/* eslint-disable-next-line */}
          <a href="#">Chinese</a>
        </div>
      </div>
      <NavUser />
    </div>
  );
}

export default Navbar;