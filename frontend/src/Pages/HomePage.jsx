import { useEffect } from "react";
import IntroSection from "../Components/IntroSection";
import VisitedUser from "../Components/VisitedUser";

const HomePage = () => {
  // change title when about page
  useEffect(() => {
    document.title = "Home • Lokeshwar Prasad Dewangan";
  }, []);

  return (
    <div className="flex flex-col justify-center items-center" >
      <IntroSection />
      <VisitedUser/>
    </div>
  );
};

export default HomePage;
