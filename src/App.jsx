import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";

import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import Projects from "./pages/Projects";
import Media from "./pages/Media";
import Careers from "./pages/Careers";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<WhoWeAre />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/media" element={<Media />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Hero />
    </>
  );
};

export default App;
