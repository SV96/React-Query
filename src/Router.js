import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CommonContainer from "./Container";
import ReactCall from "./ReactCall";
import ReactQueryCall from "./ReactQueryCall";
import SwrCall from "./SwrCall";
import Introduction from "./Intro";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CommonContainer />}>
          <Route path="/" element={<Introduction />} />
          <Route path="/react" element={<ReactCall />} />
          <Route path="/react-query" element={<ReactQueryCall />} />
          <Route path="/swr" element={<SwrCall />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
