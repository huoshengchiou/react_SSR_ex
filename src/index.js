import express from "express";

import render from "./renderHelper";
import store from "./client/redux";

const app = express();
app.use(express.static("public"));

// 直接接收所有path的req，後續轉由React app拿出component
app.get("*", (req, res) => {
  //額外移出為另一個fn
  res.send(render(req, store));
});
// app.get("/", (req, res) => {
//   const content = renderToString(<Home />);
//   //追加另一個js loading
//   const html = `
//     <html>
//       <head></head>
//       <body>
//         <div id="root">${content}</div>
// 透過掛另外一包js把react app mount到browser
//         <script src="bundle.js"></script>
//       </body>
//     </html>
//   `;
//   res.send(html);
// });

app.listen(4000, () => {
  console.log("listening on port 4000");
});
