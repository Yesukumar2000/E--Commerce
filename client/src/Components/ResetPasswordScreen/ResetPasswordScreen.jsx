import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftsideBanner from '../LeftsideBanner/LeftsideBanner';
import apiService from "../../utils/api";
import "../../styles/global.css";

function ResetPasswordScreen() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve the email from localStorage
    // const email = localStorage.getItem('email');
    // console.log('Email from localStorage:', email);

    if (newPassword === confirmPassword) {
      try {
        await apiService.resetPassword(localStorage.getItem("email"), newPassword);
        localStorage.removeItem("email"); // Clear email after password reset
        alert("Password reset successful");
        navigate("/");
    } catch (error) {
        // console.error("Failed to reset password:", error.response?.data || error);
        setError(error.response?.data?.message || 'Failed to reset password. Please try again.');
    }
    } else {
      setError('Passwords do not match.');
    }
  };

  return (
    <div className="container">
      <LeftsideBanner />
      <div className="SectionDiv">
        <h2>Reset Password</h2>
        <p>Enhance your security by choosing a complex password like using special characters (e.g.,!,@,#,$)</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>New Password</label>
            <div className="form-input">
            <i class="fa-solid fa-key"></i>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              required
            />
            </div>
          </div>
          <div className="form-group">
            <label>Re-Enter Password</label>
            <div className="form-input">
            <i class="fa-solid fa-key"></i>
            <input
              type="password"
              placeholder="Re-enter Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
            </div>
            {error && <p className="error">{error}</p>}
          </div>
          <button type="submit" className="classButton">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordScreen;
