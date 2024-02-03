import "../CSS/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // state which store current width of window
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showResNavbar, setShowResNavbar] = useState(false);

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
          <Link
            to="/"
            className="heading_name pl-2 text-[2rem] font-bree font-semibold text-gray-300 cursor-pointer"
          >
            <span className="text-[#2196f3]">My</span>Portfolio_
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
                to="/services"
              >
                Services
              </Link>
            </li>
            <li className="nav_list">
              <Link className="nav_link" to="/contact">
                ContactUs
              </Link>
            </li>
            <li className="nav_list">
              <Link onClick={toggleResNavbar} className="nav_link" to="/about">
                AboutUs
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`menu_button ${
            windowWidth < 800 ? "block" : "hidden"
          } flex justify-center items-center`}
        >
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
    </>
  );
};

export default Navbar;
