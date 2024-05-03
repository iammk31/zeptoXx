import React, { useState } from "react";

const PathContext = React.createContext({
  path: "",
  email: ""
});

export const PathContextProvider = ({ children }) => {
  const [path, setPath] = useState("");
  const [email, setEmail] = useState("")

  const pathHandler = (userData) => {
    setPath(userData.path);
    setEmail(userData.userEmail);
  };

  return (
    <PathContext.Provider value={{ path, email, onPathChange: pathHandler }}>
      {children}
    </PathContext.Provider>
  );
};

export default PathContext;
