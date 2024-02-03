import { useEffect, useRef } from "react";
import "../CSS/ImageFrame.css";
import anime from "animejs";


const IntroSection = () => {
  //🚀 Typing Animation
  useEffect(() => {
    // Set up Typed.js when the component mounts
    const typingText = new Typed("#text", {
      // strings: ["Lokeshwar", "Programmer", "Designer"],
      strings: [
        '<span class="font-bree text-[#ff2154] " >Developer</span>',
        '<span class="font-bree text-[#7f812b] " >Programmer</span>',
        '<span class="font-bree text-[#8c59bb] " >Designer</span>',
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
    });

    // Clean up Typed instance when the component unmounts
    return () => {
      typingText.destroy();
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <>
      <div className="home_intro_container text-gray-300 font-signika flex w-full justify-center items-center h-[80vh] ">
        <div className="intro_info_section flex flex-col w-[40%] gap-6">
          <div className="greet">
            <h3 className="hey text-3xl font-bree"> Hey ,</h3>
          </div>
          <div className="anime_name">
            <h2 className="anime_text text-6xl font-bree">
              I am&nbsp;
              <span className="font-bree" id="text"></span>
            </h2>
          </div>
          <div className="intro_para w-full">
            <p className="para text-xl md:w-[90%] font-overpass">
              My name is <b>Lokeshwar Prasad Dewangan.</b> I am Full Stack
              Developer and pursuing my 3rd year of BTech Computer Science
              branch. I am learner & spend more time on Computer technologies.
            </p>
          </div>
          <div className="intro_buttons flex gap-8">
            <button className="hire_me_button main_page_button button">
              Hire Me
            </button>
            <button className="intro_contact_button main_page_button button">
              Message
            </button>
          </div>
        </div>
        <div className="image_section w-auto">
          <div class="frame w-full "></div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
