import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CombineContextProvider } from './context/combine-context'
import { BrowserRouter } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <CombineContextProvider>
      <App />
    </CombineContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
