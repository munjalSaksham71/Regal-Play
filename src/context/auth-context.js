import { createContext, useContext, useState } from "react";
import { login, signup } from "../actions/authAction";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const token = localStorage.getItem("token");

const AuthContextProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(token ? true : false);
  const [user, setUser] = useState(token);

  const loginUser = async (email, password) => {
    const { data, status } =  await login(email, password);
    if (status === 200) {
      localStorage.setItem("token", JSON.stringify(data.encodedToken));
      setUser(data.encodedToken);
      setIsUserLoggedIn(true);
    }
  };

  const signupUser = async (email, password) => {
    const {data, status} = await signup(email, password);
    if(status === 201){
      localStorage.setItem("token", JSON.stringify(data.encodedToken));
      setUser(data.encodedToken);
      setIsUserLoggedIn(true);
    }
  }

  const logoutUser = async () => {
    localStorage.removeItem("token");
    setIsUserLoggedIn(false);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{user, isUserLoggedIn, loginUser, signupUser, logoutUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthContextProvider };
