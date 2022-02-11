import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import RouteSet from "./client/RouteSet";

const render = (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <RouteSet />
      </StaticRouter>
    </Provider>
  );

  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
  return html;
};

export default render;
