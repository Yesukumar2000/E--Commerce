import "./App.css";
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterScreen from "./Components/RegisterScreen/RegisterScreen";
import ForgotPasswordScreen from "./Components/ForgotPasswordScreen/ForgotPasswordScreen";
import OtpVerificationScreen from "./Components/OtpVerificationScreen/OtpVerificationScreen";
import ResetPasswordScreen from "./Components/ResetPasswordScreen/ResetPasswordScreen";
import DashBoard from "./Components/DashBoard/DashBoard";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const isEmailVerified = localStorage.getItem("email") !== null;

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/forgot-password" element={<ForgotPasswordScreen />} />

          {/* Protected Routes */}
          <Route
            path="/otp-verification"
            element={
              <ProtectedRoute
                condition={isEmailVerified}
                redirectTo="/forgot-password"
              >
                <OtpVerificationScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reset-password"
            element={
              <ProtectedRoute
                condition={isEmailVerified}
                redirectTo="/forgot-password"
              >
                <ResetPasswordScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                condition={isAuthenticated}
                redirectTo="/"
              >
                <DashBoard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
