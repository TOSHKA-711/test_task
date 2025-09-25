"use client";
import { useState } from "react";
import Image from "next/image";
import { FaHome, FaRegUser, FaInfoCircle, FaChevronDown } from "react-icons/fa";
import { MdCategory, MdContactMail } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import {
  IoCartOutline,
  IoNotificationsOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-[#F5F5F5] px-6 md:px-36 py-4 flex justify-between items-center shadow-md z-20 relative">
        {/* Left: Logo + Links */}
        <div className="flex items-center gap-10">
          <Image src="/logo1.svg" alt="logo" width={80} height={40} />

          {/* Links (hidden on mobile) */}
          <ul className="flex max-2xl:hidden items-center gap-8 text-[#8A8A8A] text-[19px]">
            <li className="flex items-center gap-1 cursor-pointer hover:text-gray-600 duration-300">
              <FaHome /> Home
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-gray-600 duration-300">
              <MdCategory /> Our Category
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-gray-600 duration-300">
              <FaInfoCircle /> About Us
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-gray-600 duration-300">
              <MdContactMail /> Contact Us
            </li>
            <li className="flex items-center gap-1 cursor-pointer hover:text-gray-600 duration-300">
              <IoIosHelpCircleOutline /> FAQs
            </li>
          </ul>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-5 text-2xl text-black">
          <IoCartOutline className="cursor-pointer flex max-2xl:hidden" />
          <IoNotificationsOutline className="cursor-pointer flex max-2xl:hidden" />
          <IoHeartOutline className="cursor-pointer flex max-2xl:hidden" />

          {/* Language Switcher (hidden on mobile) */}
          <div className="flex max-2xl:hidden items-center gap-1 text-lg cursor-pointer">
            EN <FaChevronDown size={10} />
          </div>

          {/* Profile (hidden on mobile) */}
          <div className="flex max-2xl:hidden items-center gap-1 cursor-pointer">
            <FaRegUser /> <FaChevronDown size={10} />
          </div>

          {/* Hamburger Icon (mobile only) */}
          <button
            onClick={() => setIsOpen(true)}
            className="max-2xl:flex hidden cursor-pointer text-3xl focus:outline-none"
          >
            <HiMenu />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-30 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-3xl text-gray-700"
        >
          <HiX />
        </button>

        {/* Sidebar Content */}
        <div className="mt-16 flex flex-col gap-6 px-6 text-gray-700 text-lg">
          <a href="#" className="flex items-center gap-2">
            <FaHome /> Home
          </a>
          <a href="#" className="flex items-center gap-2">
            <MdCategory /> Our Category
          </a>
          <a href="#" className="flex items-center gap-2">
            <FaInfoCircle /> About Us
          </a>
          <a href="#" className="flex items-center gap-2">
            <MdContactMail /> Contact Us
          </a>
          <a href="#" className="flex items-center gap-2">
            <IoIosHelpCircleOutline /> FAQs
          </a>

          <hr />

          <a href="#" className="flex items-center gap-2">
            <IoCartOutline /> Cart
          </a>
          <a href="#" className="flex items-center gap-2">
            <IoNotificationsOutline /> Notifications
          </a>
          <a href="#" className="flex items-center gap-2">
            <IoHeartOutline /> Wishlist
          </a>
          <a href="#" className="flex items-center gap-2">
            <FaRegUser /> Profile
          </a>
        </div>
      </div>

      {/* Overlay (click to close) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-60 z-20"
        ></div>
      )}
    </>
  );
};

export default NavBar;
