import Link from "next/link";
import React from "react";
import { HiHome, HiOutlineShoppingBag } from "react-icons/hi";
import { RxDashboard, RxPerson } from "react-icons/rx";
import { FiSettings } from "react-icons/fi";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="flex h-screen w-20 flex-col justify-between border-r-[1px] bg-white p-4">
        {/* sidebar icons */}
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="inline-block rounded-lg bg-purple-800 p-3 text-white">
              <HiHome size={20} />
            </div>
          </Link>
          <span className="w-full border-b-[1px] border-gray-200 p-2"></span>
          <Link href="/">
            <div className="my-4 inline-block cursor-pointer rounded-lg bg-gray-100 p-3 hover:bg-gray-200">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/customers">
            <div className="my-4 inline-block cursor-pointer rounded-lg bg-gray-100 p-3 hover:bg-gray-200">
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="my-4 inline-block cursor-pointer rounded-lg bg-gray-100 p-3 hover:bg-gray-200">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href="/">
            <div className="my-4 inline-block cursor-pointer rounded-lg bg-gray-100 p-3 hover:bg-gray-200">
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
