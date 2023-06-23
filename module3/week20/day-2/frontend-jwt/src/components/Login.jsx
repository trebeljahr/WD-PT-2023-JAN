import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const navigate = useNavigate();
  //getting thing from
  const { setToken, authenticateUser, setIsLoggedIn } = useContext(AuthContext);
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const userToLogin = { email, password };
      const { data } = await axios.post(
        `http://localhost:5005/auth/login`,
        userToLogin
      );
      console.log("JWT token", data.authToken);
      const actualToken = data.authToken;
      setToken(actualToken);
      authenticateUser();
      setIsLoggedIn(true);
      navigate("/profile");
    } catch (error) {
      console.log("there was an error logging in", error);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="LoginPage">
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          autoComplete="email"
          onChange={handleEmail}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          autoComplete="current-password"
          onChange={handlePassword}
        />

        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have an account yet?</p>
      <Link to={"/"}> Sign Up</Link>
    </div>
  );
}

export default Login;
