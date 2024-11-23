import { useEffect } from 'react';
import '../CSS/ImageFrame.css';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const IntroSection = () => {
  //🚀 Typing Animation
  useEffect(() => {
    // Set up Typed.js when the component mounts
    const typingText = new Typed('#text', {
      // strings: ["Lokeshwar", "Programmer", "Designer"],
      strings: [
        '<span class="font-bree bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text " >Developer</span>',
        '<span class="font-bree bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text " >Programmer</span>',
        '<span class="font-bree bg-gradient-to-r from-green-500 to-cyan-500 text-transparent bg-clip-text " >Engineer</span>',
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
      <div className="home_intro_container text-gray-300 flex w-full justify-center items-center h-[80vh] ">
        <div className="intro_info_section flex flex-col w-[40%] gap-3 md:gap-6">
          <div className="greet relative md:top-0 top-1 ">
            <h3 className="hey text-3xl font-bree "> Hey ,</h3>
          </div>
          <div className="anime_name">
            <h2 className="anime_text text-6xl font-bree">
              I am&nbsp;
              <span className="font-bree" id="text"></span>
            </h2>
          </div>
          <div className="intro_para w-full">
            <p className="text-lg sm:text-left text-center md:w-[90%] font-overpass">
              I'm <b>Lokeshwar Prasad Dewangan.</b> a Full Stack Developer
              currently working as a UI/UX Developer. As a 4th-year BTech
              Computer Science student, I focus on designing user-friendly
              interfaces and building great digital experiences.
            </p>
          </div>
          <div className="intro_buttons flex gap-5 relative top-4">
            <a
              href="mailto:lokeshwar.prasad.cse@gmail.com"
              className="hire_me_button main_page_button button"
            >
              <AccountBoxIcon style={{ fontSize: '18px' }} />
              <span>Hire Me</span>
            </a>
            <Link
              to="/contact"
              className="intro_contact_button main_page_button button"
            >
              <MailOutlineIcon style={{ fontSize: '18px' }} />
              <span>Message</span>
            </Link>
          </div>
        </div>
        <div className="image_section w-auto">
          <div className="frame w-full "></div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
