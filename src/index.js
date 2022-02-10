import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";

const app = express();
app.use(express.static("public"));
app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  //追加另一個js loading
  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});