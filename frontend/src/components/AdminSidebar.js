import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../styles/AdminSidebarStyles.css";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

function AdminSidebar() {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  function logout(){
    navigate('/');

  }

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbara">
          <Link to="#" className="menua-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

        </div>
        <div className="logout-button">
            <button onClick={logout}>Log Out</button>
          </div>
        <nav className={sidebar ? "nava-menu active" : "nava-menu"}>
          <ul className="nava-menu-items" onClick={showSidebar}>
            <li className="navbara-toggle">
              <Link to="#" className="menua-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default AdminSidebar;
