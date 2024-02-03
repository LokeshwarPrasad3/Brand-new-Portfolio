import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectPage";
import Navbar from "./Components/Navbar";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
