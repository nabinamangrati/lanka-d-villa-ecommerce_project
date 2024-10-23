import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "pwd") {
      navigate("/admin");
    } else {
      alert("Invalid login. Try again.");
    }
  };

  return (
    <>
      <form class="form">
        <div class="flex-column">
          <label>Email</label>
        </div>
        <div class="inputForm">
          <input type="text" class="input" placeholder="Enter your Email" />
        </div>

        <div class="flex-column">
          <label>Password</label>
        </div>
        <div class="inputForm">
          <input
            type="password"
            class="input"
            placeholder="Enter your Password"
          />
        </div>

        <div class="flex-row">
          <span class="span">Forgot password?</span>
        </div>

        <button class="button-submit">Sign In</button>

        <p class="p">
          Don't have an account? <span class="span">Sign Up</span>
        </p>

        <p class="p line">Or With</p>

        <div class="flex-row">
          <button class="btn google">Google</button>
          <button class="btn apple">Apple</button>
        </div>
      </form>
    </>
  );
};
export default Login;
