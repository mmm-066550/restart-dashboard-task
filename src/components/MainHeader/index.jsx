"use client";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import Image from "next/image";
import { userLogout } from "@/lib/features/auth";
import { useDispatch } from "react-redux";

export default function MainHeader() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="bg-white shadow-xs border-b border-gray-200 py-8 px-8 w-full flex justify-end justify-items-end items-center gap-8">
      <div className="flex items-center gap-2">
        <Image
          src={user?.avatar}
          alt="User Avatar"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full mr-2 shadow shadow-grey-300"
          loading="lazy"
          srcSet={`${user?.avatar} 2x`}
        />

        <div className="flex flex-col">
          <span className="text-gray-700 text-sm font-semibold">
            {user?.username}
          </span>
          <span className="text-gray-500 text-xs capitalize">{user?.role}</span>
        </div>
      </div>

      <button
        className="cursor-pointer"
        onClick={() => {
          dispatch(userLogout());
        }}
      >
        <span className="text-gray-700 text-sm font-semibold">
          <RiLogoutCircleRLine className="inline text-3xl ml-1" />
        </span>
      </button>
    </div>
  );
}
