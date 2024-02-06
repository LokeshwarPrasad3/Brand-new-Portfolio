import React, { useEffect } from "react";
import TechnicalSkills from "../Components/TechnicalSkills";

const SKillsPage = () => {
  // change title when about page
  useEffect(() => {
    document.title = "Technical Skills • Lokeshwar Prasad Dewangan";
  }, []);

  return (
    <>
      <TechnicalSkills />
    </>
  );
};

export default SKillsPage;
