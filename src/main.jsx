import React from "react"; //JSX
import ReactDOM from "react-dom/client"; //VIRTUAL DOM
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*  padre  */}
    <App />
  </React.StrictMode>
);
