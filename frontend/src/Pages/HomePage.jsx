import { useEffect } from "react";
import IntroSection from "../Components/IntroSection";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  // change title when about page
  useEffect(() => {
    document.title = "Home • Lokeshwar Prasad Dewangan";
  }, []);

  return (
    <div>
      <IntroSection />
    </div>
  );
};

export default HomePage;
