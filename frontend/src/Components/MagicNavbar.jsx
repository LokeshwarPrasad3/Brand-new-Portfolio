import { Link } from "react-router-dom";
import "../CSS/MagicNavbar.css";
import React, { useState } from "react";

const MagicNavbar = () => {
  const [activeItem, setActiveItem] = useState(1);

  const listItems = [
    { id: 1, icon: "home-outline", text: "Home", route: "/" },
    { id: 4, icon: "code", text: "Project", route: "/projects" },
    { id: 5, icon: "apps", text: "Skills", route: "/skills" },
    { id: 3, icon: "chatbubble-outline", text: "Contact", route: "/contact" },
    { id: 2, icon: "person-outline", text: "About", route: "/about" },
  ];

  const handleClick = (id) => {
    setActiveItem(id);
  };

  return (
    <div className="magic_navbar_container z-10">
      <div className="navigation">
        <ul>
          {listItems.map((item) => (
            <li
              key={item.id}
              className={`list ${activeItem === item.id ? "active" : ""}`}
              onClick={() => handleClick(item.id)}
            >
              <Link to={item.route}>
                <span className="icon">
                  <ion-icon name={item.icon}></ion-icon>
                </span>
                <span className="text">{item.text}</span>
              </Link>
            </li>
          ))}
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
};

export default MagicNavbar;
