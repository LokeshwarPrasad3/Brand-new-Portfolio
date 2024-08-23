import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PreLoadPage = () => {
  const [percentageValue, setPercentageValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPercentageValue(50);
    }, 800);
    setTimeout(() => {
      setPercentageValue(100);
    }, 1200);
  }, []);


  return (
    <motion.div className="preloadpage_container absolute top-0 z-50 w-screen h-screen flex justify-center items-center bg-black">
      <div className="mid_loader_container flex flex-col justify-center items-center gap-1 font-overpass">
        <p className="text-white text-lg">
          <span className="text-xl">{percentageValue}</span>%
        </p>
        <div className="w-40 h-[2px] flex justify-center items-center">
          <span className={`${percentageValue>=1?"bg-white":"bg-slate-700"} w-full h-full`}></span>
          <span className={`${percentageValue>=51?"bg-white":"bg-slate-700"} w-full h-full`}></span>
          <span className={`${percentageValue>=100?"bg-white":"bg-slate-700"}w-full h-full`}></span>
        </div>
      </div>
    </motion.div>
  );
};

export default PreLoadPage;
