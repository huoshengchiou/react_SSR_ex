import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <html>
      <head>
        <title>Server Rendered App</title>
      </head>
      <body>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/about" element={<div>About</div>} />
        </Routes>
        <script src="bundle.js" />
      </body>
    </html>
  );
};

export default App;
