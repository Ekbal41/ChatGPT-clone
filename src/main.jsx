import React from "react";
import ApiProvider from "./context/ApiProvider";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiProvider>
    <App />
  </ApiProvider>
);
