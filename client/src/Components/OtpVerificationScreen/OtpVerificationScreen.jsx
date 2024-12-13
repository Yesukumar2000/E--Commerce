import React, { useState, useEffect } from 'react';
import LeftsideBanner from '../LeftsideBanner/LeftsideBanner';
import { useNavigate } from 'react-router-dom';
import "../../styles/global.css";
import apiService from "../../utils/api";

function OtpVerificationScreen() {
    const [otp, setOtp] = useState("");
    const [timeLeft, setTimeLeft] = useState(60); // Timer starts at 60 seconds
    const [canResend, setCanResend] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setCanResend(true);
        }
    }, [timeLeft]);

    const handleResendOtp = async () => {
        try {
            setCanResend(false);
            setTimeLeft(60);
            await apiService.forgotPassword(localStorage.getItem('email'));
            alert("OTP resent to your email.");
        } catch (error) {
            console.error("Error resending OTP:", error.response?.data || error);
        }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await apiService.verifyOtp({ otp, email: localStorage.getItem("email") });
        alert("OTP verified successfully");
        navigate("/reset-password");
      } catch (error) {
          // console.error("OTP verification failed:", error.response?.data || error);
          const errorMessage = error.response?.data?.message || "An error occurred during OTP verification.";
          alert(errorMessage);
      }
  };
  
    return (
        <div className="container">
            <LeftsideBanner />
            <div className="SectionDiv">
                <h2>Verify OTP</h2>
                <p>Please Enter the OTP sent to Your registered email</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="form-input">
                            <i className="fa-solid fa-key"></i>
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                maxLength={5}
                                required
                            />
                        </div>
                    </div>
                    <p>
                        Resend OTP in{" "}
                        <span style={{ color: '#2db74c' }}>
                            {timeLeft > 0 ? `00:${timeLeft.toString().padStart(2, "0")}` : "Available"}
                        </span>
                    </p>
                    {canResend && (
                        <button type="button" onClick={handleResendOtp} className="classButton">
                            Resend OTP
                        </button>
                    )}
                    <button className="classButton" type="submit">Verify OTP</button>
                </form>
            </div>
        </div>
    );
}

export default OtpVerificationScreen;
