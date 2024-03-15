import React, { createContext, useState } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [signin, setsignin] = useState(true);
  const [username, setusername] = useState("Guest");
  const UsernameFunction = (name) => {
    setsignin(false);
    setusername(name);
  };
  const Logout = ()=>{
      setsignin(true);
      setusername("Guest")
  };

  const value = { signin, UsernameFunction, username ,Logout};
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserProvider;
