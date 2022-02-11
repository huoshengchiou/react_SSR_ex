import React from "react";
import { render, hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";

import RouteSet from "./RouteSet";

// import Home from "./components/Home";
//hydrate(<Home />, document.getElementById("root"));

render(
  <Provider store={store}>
    <BrowserRouter>
      <RouteSet />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
