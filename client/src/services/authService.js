import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isOtpValidated, setIsOtpValidated] = useState(false);

  return (
    <AuthContext.Provider value={{ isOtpValidated, setIsOtpValidated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
