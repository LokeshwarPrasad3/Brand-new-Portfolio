import { useEffect, useState } from 'react';
import IntroSection from '../Components/IntroSection';
import VisitedUser from '../Components/VisitedUser';
import { motion } from 'framer-motion';
import PreLoadPage from './PreLoaderPage/PreLoadPage';
import ConfettiAnimation from '../Components/Animation/ConfettiAnimation';

const HomePage = ({ hasVisited, setHasVisited }) => {
  const [showMainContent, setShowMainContent] = useState(hasVisited);

  useEffect(() => {
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowMainContent(true);
        setHasVisited(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasVisited, setHasVisited]);

  useEffect(() => {
    document.title = 'Home • Lokeshwar Prasad Dewangan';
  }, []);

  return (
    <>
      {showMainContent ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
          className="flex flex-col justify-center items-center"
        >
          <IntroSection />
          <VisitedUser />
          {!hasVisited && <ConfettiAnimation />}
        </motion.div>
      ) : (
        <PreLoadPage />
      )}
    </>
  );
};

export default HomePage;
