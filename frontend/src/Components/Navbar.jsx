import "../CSS/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MagicNavbar from "./MagicNavbar";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navbar = () => {
  // state which store current width of window
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showResNavbar, setShowResNavbar] = useState(false);
  const [showMagicNavbar, setShowMagicNavbar] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  //
  const toggleResNavbar = () => {
    setShowResNavbar(!showResNavbar);
  };

  useEffect(() => {
    // function set current innerWidth
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth);
    };
    // Attach event listener for window resize
    window.addEventListener("resize", handleWindowResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <>
      {/* navbar structure */}
      <nav
        id="navbar"
        className="navbar-container z-50 text-white flex justify-between items-center px-28 sticky top-0 h-20 shadow-md min-w-[100%] bg-slate-950 "
      >
        <header className="flex justify-center items-center gap-2 pl-3">
          {/* <Link
            to="/"
            id="heading_logo"
            className="no-underline flex justify-center align-center"
          >
            <img
              src="/images/lokeshwar.jpg"
              alt="Lokeshwar"
              className="h-12 w-12 rounded-full"
            />
          </Link> */}
          {/* dark/light mode */}
          <div className="bg-mode">
            {lightMode ? (
              <DarkModeIcon
                onClick={() => setLightMode(!lightMode)}
                className="cursor-pointer hover:text-slate-300 custom-transition "
              />
            ) : (
              <LightModeIcon
                onClick={() => setLightMode(!lightMode)}
                className="light_mode_icon cursor-pointer hover:text-slate-300 custom-transition "
              />
            )}
          </div>
          <Link
            to="/"
            className="heading_name pl-2 text-[1.4rem] md:text-[2rem] font-bree font-semibold text-gray-300 cursor-pointer"
          >
            <span className="text-[#2196f3] ">My</span>Portfolio_
          </Link>
        </header>
        {/* show navbar-menu */}
        <div
          id="navbar_menu"
          className={`${
            showResNavbar ? "left-[0%]" : "left-[-100%]"
          } flex items-center transition-all duration-300 ease-linear`}
        >
          <ul id="nav_ul" className="flex font-signika gap-3">
            <li className="nav_list">
              <Link onClick={toggleResNavbar} className="nav_link" to="/">
                Home
              </Link>
            </li>
            <li className="nav_list">
              <Link
                onClick={toggleResNavbar}
                className="nav_link"
                to="/projects"
                >
                Projects
              </Link>
            </li>
            <li className="nav_list">
              <Link
                onClick={toggleResNavbar}
                className="nav_link"
                to="/skills"
                >
                Skills
              </Link>
            </li>
            <li className="nav_list">
              <Link
                onClick={toggleResNavbar}
                className="nav_link" to="/contact">
                ContactUs
              </Link>
            </li>
            <li className="nav_list">
              <Link onClick={toggleResNavbar} className="nav_link" to="/about">
                AboutUs
              </Link>
            </li>
            {windowWidth < 800 && (
              <li className="nav_list">
                <Link
                  onClick={() => {
                    setShowResNavbar(!showResNavbar);
                    setShowMagicNavbar(true);
                  }}
                  className="nav_link bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500 text-white p-4 "
                  to="#"
                >
                  Enable Magic Navbar
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div
          className={`menu_button ${
            windowWidth < 800 && !showMagicNavbar ? "block" : "hidden"
          } flex justify-center items-center`}
        >
          {/* show basic menu for responsive design */}
          {showResNavbar ? (
            <CloseIcon
              onClick={toggleResNavbar}
              style={{ fontSize: "2.2rem" }}
              className={`absolute right-3 cursor-pointer`}
            />
          ) : (
            <MenuIcon
              onClick={toggleResNavbar}
              style={{ fontSize: "2.2rem" }}
              className={`absolute right-3 cursor-pointer`}
            />
          )}
        </div>
      </nav>
      {/* show magic navbar when enable */}
      {windowWidth < 800 && showMagicNavbar && <MagicNavbar />}
    </>
  );
};

export default Navbar;
