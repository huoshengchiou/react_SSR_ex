import React from "react";
import { render, hydrate } from "react-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import RouteSet from "./RouteSet";
import App from "./components/App";

import Home from "./components/Home";

//hydrate(<Home />, document.getElementById("root"));

render(
  <BrowserRouter>
    <RouteSet />
  </BrowserRouter>,
  document.getElementById("root")
);
