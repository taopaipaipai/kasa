import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Logement from "../pages/logement/Logement";
import Error404 from "../pages/error404/Error404";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/logement/:id" element={<Logement />} />
          <Route exact path="/error-404" element={<Error404 />} />
          <Route
            exact
            path="/*"
            element={<Navigate replace to="/error-404" />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
