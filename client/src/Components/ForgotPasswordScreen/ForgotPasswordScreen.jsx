import React, { useState } from 'react'
import LeftsideBanner from '../LeftsideBanner/LeftsideBanner';
import { useNavigate } from 'react-router-dom';
import "../../styles/global.css";
import apiService from "../../utils/api";

function ForgotPasswordScreen() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await apiService.forgotPassword(email);
        localStorage.setItem('email', email); 
        alert(`OTP sent to your email: ${email}`);
        navigate('/otp-verification');
      } catch (error) {
        // console.error("Error in OTP process:", error);
        const errorMessage = error.response?.data?.message || "An error occurred";
        alert(errorMessage);
      }
  };
  return (
    <div className="container">
        <LeftsideBanner />
        <div className="SectionDiv">
          <h2>Forgot Password</h2>
          <p>Please enter your registered email ID so that you can reset your password</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
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
            <button className="classButton" type="submit">Yes, Send OTP</button>
          </form>
        </div>
      </div>
  )
}

export default ForgotPasswordScreen;