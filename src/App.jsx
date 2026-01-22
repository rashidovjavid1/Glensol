import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/HomePage";

import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import Projects from "./pages/Projects";
import Media from "./pages/Media";
import Careers from "./pages/Careers";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";
import Values from "./pages/Values";
import Safety from "./pages/Safety";
import Team from "./pages/Team";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/team" element={<Team />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/values" element={<Values />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/media" element={<Media />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
