import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplitScreen from "../Components/Splitscreen/SplitScreen";
import Login from "../Pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/split" element={<SplitScreen />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
