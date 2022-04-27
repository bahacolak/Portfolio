import React from "react";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";
import * as IoIcon from "react-icons/io";

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
      icon: <IoIcon.IoIosMan/>,
      cName: "nav-text"
    },
    {
        title: "Skills",
        path: "/skills",
        icon: <ImIcons.ImMagicWand />,
        cName: "nav-text"
      },
      {
        title: "Projects",
        path: "/projects",
        icon: <AiIcons.AiOutlineProject />,
        cName: "nav-text"
      },
      {
        title: "Contact",
        path: "/contact",
        icon: <MdIcons.MdAccountCircle />,
        cName: "nav-text"
      },
    ];