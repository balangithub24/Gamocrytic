import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { trackEvent } from "../analytics";
import Logo from "../components/Logo";
import { API_URL } from "../../config/global";

import "../styles/Login.css";

function Login() {
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send login attempt event to Google Analytics
    trackEvent("User", "Attempted Login", FormData.email);

    try {
      const response = await axios.post(`${API_URL}/login`, FormData);
      if (!response.data) {
        alert(
          "Wrong password!\nTry again or click ‘Forgot password’ to reset it."
        );
      } else if (response.data === "Server Busy") {
        alert("Verify your email id");
      } else if (response?.status) {
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        navigate("/");
      }
    } catch (e) {
      console.error("Error during Login: ", e);
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <Logo />
        <p id="welcome">Welcome back!</p>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={FormData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={FormData.password}
          onChange={handleChange}
          required
        />
        <Link to="#">Forgot password?</Link>
        <button type="submit">Login</button>
        <p>
          Don&apos;t have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
