import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
      title: "Home",
      path: "/",
      icon: <AiIcons.AiFillHome />,
      cName: "nav-text"
    },
    {
      title: "About",
      path: "/about",
      icon: <MdIcons.MdAccountCircle/>,
      cName: "nav-text"
    },
    {
        title: "Skills",
        path: "/skills",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"
      },
      {
        title: "Projects",
        path: "/projects",
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text"
      },
      {
        title: "Contact",
        path: "/contact",
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text"
      },
    ];