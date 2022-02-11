import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UserList from "./components/UserList";

const RouteSet = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </>
  );
};

export default RouteSet;
