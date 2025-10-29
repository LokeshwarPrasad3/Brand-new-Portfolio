import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';
import Navbar from './Components/Navbar';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import SKillsPage from './Pages/SKillsPage';
import ShowMessagesPage from './Pages/ShowMessagesPage';
import CursorGlowEffect from './Components/Animation/CursorGlowEffect';
import Layout from './Layout/Layout';
import { Toaster } from 'react-hot-toast';

function App() {
  const [hasVisitedHome, setHasVisitedHome] = useState(false);

  return (
    <>
      <CursorGlowEffect />
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <HomePage
                hasVisited={hasVisitedHome}
                setHasVisited={setHasVisitedHome}
              />
            }
          />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/skills" element={<SKillsPage />} />
          {/* private for admin */}
          <Route path="/private" element={<ShowMessagesPage />} />
        </Route>
      </Routes>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            fontFamily: 'Karla, sans-serif',
            fontSize: '16px',
          },
        }}
      />
    </>
  );
}

export default App;
