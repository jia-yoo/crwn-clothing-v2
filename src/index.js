import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserPorvider } from "./contexts/user.context";

import "./index.scss";

const rootElement = document.getElementById("root");

render(
  // <React.StrictMode>
  <BrowserRouter>
    <UserPorvider>
      <App />
    </UserPorvider>
  </BrowserRouter>,
  // </React.StrictMode>,
  rootElement
);
