import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#2699fb] p-4">
      <div className="flex items-center py-[15px] justify-between max-w-[1240px] mx-auto">
        <div className="text-3xl font-bold text-white">Nav Bar</div>

        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle((state) => !state)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle((state) => !state)}
            className="text-white text-2xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex text-white gap-10">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* Responsive Menu */}
        <ul
          className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[97px] ${
            toggle ? "left-[0%]" : "left-[-100%]"
          }`}
        >
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
