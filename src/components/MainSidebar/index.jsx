"use client";

import React from "react";
import { BiSolidBarChartSquare } from "react-icons/bi";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { PiPackage } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    name: "Dashboard",
    icon: <RxDashboard className="text-xl" />,
    path: "/dashboard",
  },
  {
    name: "Products",
    icon: <PiPackage className="text-xl" />,
    path: "/dashboard/products",
  },
  {
    name: "Settings",
    icon: <IoSettingsOutline className="text-xl" />,
    path: "/dashboard/settings",
  },
];

export default function MainSidebar() {
  // get current pathname and set different style to current tab
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  const activeStyle = "bg-blue-50 text-blue-600";

  return (
    <div className="w-100 d-flex flex-col py-8 px-5 shadow-gray-50 shadow bg-white border-r border-gray-200">
      <div className="ms-[-5px] flex items-center gap-2">
        <BiSolidBarChartSquare className="text-blue-600 text-5xl" />
        <span className="text-gray-700 text-[19px] font-semibold">
          Restart Dashboard
        </span>
      </div>
      <label className="text-gray-500 text-xs flex my-8 font-light">MENU</label>
      <ul className="mt-4 flex flex-col gap-4 text-gray-600 font-medium text-sm">
        {sidebarItems.map((item) => (
          <li
            key={item.name}
            className={`rounded-lg py-3 px-4 hover:bg-gray-100 transition-colors duration-200 flex items-center gap-4 ${
              isActive(item.path) ? activeStyle : ""
            }`}
          >
            <Link href={item.path} className="flex w-full items-center gap-4">
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
