import axios from "axios";

const apiService = {
  login: async (credentials) => {
    const response = await axios.post("http://localhost:7995/api/login", credentials);
    return response.data;
  },
  register: async (credentials) => {
    const response = await axios.post("http://localhost:7995/api/register", credentials);
    return response.data;
  },
  forgotPassword: async (email) => {
    const response = await axios.post("http://localhost:7995/api/forgot-password", { email });
    return response.data;
  },
  verifyOtp: async (otp) => {
    const response = await axios.post("http://localhost:7995/api/verify-otp", otp);
    return response.data;
  },
  resetPassword: async (email, newPassword) => {
    const response = await axios.post("http://localhost:7995/api/reset-password", { email, newPassword });
    return response.data;
  },
};

export default apiService;
