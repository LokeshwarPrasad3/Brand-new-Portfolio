import React, { useEffect } from "react";
import * as confetti from "../../Utils/confetti";

const ConfettiAnimation = () => {
  useEffect(() => {
    // Start the confetti animation
    confetti.start();

    // Set a timeout to stop the animation after 6 seconds
    const timeoutId = setTimeout(() => {
      confetti.stop();
    }, 6000);

    // Clean up the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
      confetti.stop(); // Ensure the confetti stops if the component is unmounted early
    };
  }, []); // Empty dependency array means this runs once when the component mounts

  return null; // No visual component, just the confetti effect
};

export default ConfettiAnimation;
