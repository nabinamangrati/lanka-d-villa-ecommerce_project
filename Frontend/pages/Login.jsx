import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import loginService from "../src/services/login";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = {
        email: userEmail,
        password: password,
      };
      const loggedinUser = await loginService.login(user);
      console.log(loggedinUser, "loggedinUser"); // should display in the console
      navigate("/admin");
    } catch (error) {
      console.error("Login failed", error);
      alert("Invalid login. Try again.");
    }
  };
  const handleGoogleLogin = () => {
    console.log("login with google");
  };
  const handleAppleLogin = () => {
    console.log("login with apple");
  };

  return (
    <>
      <form onSubmit={handleLogin} className="form">
        <div className="flex-column">
          <label>Email</label>
        </div>
        <div className="inputForm">
          <input
            type="text"
            className="input"
            placeholder="Enter your Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>

        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className="inputForm">
          <input
            type="password"
            className="input"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex-row">
          <span className="span">Forgot password?</span>
        </div>

        <button className="button-submit">Sign In</button>

        <p className="p">
          Don't have an account?{" "}
          <Link to="/signup" className="span">
            Sign Up
          </Link>
        </p>

        <p className="p line">Or With</p>

        <div className="flex-row">
          <button className="btn google" onClick={handleGoogleLogin}>
            Google
          </button>
          <button className="btn apple" onClick={handleAppleLogin}>
            Apple
          </button>
        </div>
      </form>
    </>
  );
};
export default Login;
