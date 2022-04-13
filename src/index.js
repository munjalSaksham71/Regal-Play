import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoContextProvider } from "./context/index";
import { BrowserRouter } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <VideoContextProvider>
      <App />
    </VideoContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
