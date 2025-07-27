"use client";

import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { BiSolidBarChartSquare } from "react-icons/bi";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="mx-auto">
      <div className="ms-[-5px] mb-12 flex items-center gap-2">
        <BiSolidBarChartSquare className="text-blue-600 text-7xl" />
        <span className="text-gray-700 text-2xl font-semibold">
          Restart Dashboard
        </span>
      </div>
      <h1 className="text-2xl font-bold mb-4">Welcome to the dashboard!</h1>
      <p className="text-sm text-gray-600">
        This page is protected and requires a valid token to access. If you are
        not logged in, you will be redirected to the login page.
      </p>
    </div>
  );
}
