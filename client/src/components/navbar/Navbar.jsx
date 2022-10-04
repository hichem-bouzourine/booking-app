import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="link">
          <span className="logo">Booking.com</span>
        </Link>
        <div className="navItems">
          {!user && (
            <>
              <button className="navButton">Register</button>
              <Link to="/login">
                <button className="navButton">Login</button>
              </Link>
            </>
          )}
          {user && (
            <button className="navButton" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
