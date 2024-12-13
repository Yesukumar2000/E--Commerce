import React, { useState } from 'react'
import "../../styles/global.css";
import LeftsideBanner from '../LeftsideBanner/LeftsideBanner';
import { useNavigate, Link } from 'react-router-dom';
import apiService from "../../utils/api";

function LoginScreen() { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin  = async (e) => {
    e.preventDefault();

    try {
       await apiService.login(email, password);
      localStorage.setItem("isAuthenticated", "true"); // Mark user as authenticated
      alert("Login successful");
      navigate("/dashboard");
    } catch (error) {
      alert("Email and Password credentials are Invalid");
    }
  };
  return (
    <div className="container">
      <LeftsideBanner />
      <div className="SectionDiv">
        <h2>Login</h2>
        <p>Please login to your account with the email ID and password</p>
        <form onSubmit={handleLogin }>
          <div className="form-group">
            <label>Email ID</label>
            <div className="form-input">
            <i class="fa-regular fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="form-input">
            <i class="fa-solid fa-key"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            </div>
          </div>
          <Link to="/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>
          <button type="submit" className="classButton">
            Login
          </button>
          <br></br>
          <button
            type="button"
            onClick={() => {
              navigate("/Register");
            }}
            className="classButton">
            New User
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;