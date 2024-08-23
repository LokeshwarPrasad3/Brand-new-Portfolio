import { useEffect, useState } from "react";
import IntroSection from "../Components/IntroSection";
import VisitedUser from "../Components/VisitedUser";
import { motion } from "framer-motion";
import PreLoadPage from "./PreLoaderPage/PreLoadPage";
import ConfettiAnimation from "../Components/Animation/ConfettiAnimation";

const HomePage = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMainContent(true);
    }, 2000);
  }, []);

  // change title when about page
  useEffect(() => {
    document.title = "Home • Lokeshwar Prasad Dewangan";
  }, []);

  return (
    <>
      {showMainContent ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 2,
            },
          }}
          className="flex flex-col justify-center items-center"
        >
          <IntroSection />
          <VisitedUser />
          <ConfettiAnimation />
        </motion.div>
      ) : (
        <PreLoadPage />
      )}
    </>
  );
};

export default HomePage;
