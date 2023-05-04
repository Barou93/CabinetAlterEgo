/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Cabinet from "../../Pages/Cabinet";
import Contact from "../../Pages/Contact";
import Teams from "../../Pages/Teams";
import Audit from "../../Pages/Audit";
import Conferences from "../../Pages/Conferences";
import Formation from "../../Pages/Formation";
import Strategie from "../../Pages/Strategie";

const index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/le-cabinet" exact element={<Cabinet />} />
        <Route path="/audit" exact element={<Audit />} />
        <Route path="/conferences" exact element={<Conferences />} />
        <Route path="/formations" exact element={<Formation />} />
        <Route path="/strategies" exact element={<Strategie />} />

        <Route path="/notre-equipe" exact element={<Teams />} />
        <Route path="/contacts" exact element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default index;
