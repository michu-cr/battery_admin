import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/login">
        <p>Login</p>
      </Link>
      <Link to="/">
        <p>Home</p>
      </Link>
    </div>
  );
};
export default Navbar;
