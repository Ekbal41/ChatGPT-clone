import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const ApiContext = createContext();
const ApiProvider = ({ children }) => {
  const [allMessages, setAllMessages] = useState([]);
  const [message, setMessage] = useState("");

  const state = {
    message,
    setMessage,
    setAllMessages,
    allMessages,
  };
  return <ApiContext.Provider value={state}>{children}</ApiContext.Provider>;
};
export default ApiProvider;
