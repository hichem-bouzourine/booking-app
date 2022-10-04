import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, reset } from "../../redux/authSlice";
import { useEffect } from "react";

const Login = () => {
  const { user, loading, error } = useSelector((state) => state.auth);

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
      dispatch(reset());
    }
  }, [user, error, navigate, dispatch]);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message || error.response}</span>}
      </div>
    </div>
  );
};

export default Login;
