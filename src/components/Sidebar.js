import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from "react-router-dom";
import {SidebarData} from "./SidebarData";
import "./Sidebar.css";


function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className='Sidebar'>
        <Link to="#" className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>  
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className='nev-menu-items'onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to="#" className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
            <div className='logo'>
              <a className='github' href='https://github.com/bahacolak' target="_blank"><AiIcons.AiOutlineGithub fontSize="1.7em"/></a>
              <a className='linkedin' href='https://www.linkedin.com/in/bahad%C4%B1r-%C3%A7olak-a2898a185/' target="_blank"><AiIcons.AiFillLinkedin fontSize="1.7em"/></a>
            </div>
          </li> 
          {SidebarData.map((item, index) =>{
            return(
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                   {item.icon}
                   <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Sidebar