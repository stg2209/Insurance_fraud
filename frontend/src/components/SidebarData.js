import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/adminhomepage",
    icon: <AiIcons.AiFillHome />,
    cName: "nava-text",
  },
  {
    title: "All Reports",
    path: "/allreports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nava-text",
  },
  {
    title: "Not Fraud Reports",
    path: "/notfraudreports",
    icon: <FaIcons.FaCartPlus />,
    cName: "nava-text",
  },
  {
    title: "Add customer",
    path: "/add_customer",
    icon: <IoIcons.IoMdPeople />,
    cName: "nava-text",
  },
];
