import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";
import * as SiIcons from "react-icons/si";
import * as BiIcons from "react-icons/bi";
import * as FcIcons from "react-icons/fc";

export const SidebarData = [
  {
    title: "Home",
    link: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    link: "/projects",
    icon: <GrIcons.GrProjects />,
    cName: "nav-text",
  },

  {
    title: "Random",
    link: "/random",
    icon: <BiIcons.BiFoodMenu />,
    cName: "nav-text",
  },
];
