import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// router
import Main from "./Components/Main";
import Enquiry from "./Pages/Enquiry";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Enquiry />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}