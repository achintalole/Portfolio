import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./component/contact/Contact";
import Home from "./component/home/Home";
import Name from "./component/name/Name";
import Project from "./component/project/Project";

import TopBar from "./component/topbar/TopBar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Name />

        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/project" element={<Project />} exact></Route>
          <Route path="/contact" element={<Contact />} exact></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
