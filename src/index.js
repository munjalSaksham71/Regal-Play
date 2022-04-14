import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoContextProvider } from "./context/index";
import { BrowserRouter } from "react-router-dom";
import { FilterContextProvider } from "./context/filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <VideoContextProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </VideoContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
