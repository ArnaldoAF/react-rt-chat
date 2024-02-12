import axios from "axios";
import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";

interface authContextType {

}

const AuthContext = createContext({} as authContextType);

interface authProviderProps {
  children: ReactNode
}

const AuthProvider = ({ children }: authProviderProps) => {
  const [token, setToken_] = useState(localStorage.getItem("token"));

  const setToken = (newToken: string) => {
    setToken_(newToken);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
  
};

export const useAuth = () => {
  return useContext(AuthContext);
};


export default AuthProvider;

