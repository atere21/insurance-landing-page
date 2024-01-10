import React, { useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';
import logo from '../assets/logo_sanlam.png';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-black bg-white flex justify-between items-center h-20 max-w-[1230px] mx-auto px-6">
      <img className="w-[10rem] h-22 object-contain mb-2 font-bold" alt='/' src={logo} />

      <ul className="md:flex hidden text-sm font-light-400">
        <li className="p-2 cursor-pointer">Home</li>
        <li className="p-2 cursor-pointer">Product</li>
        <li className="p-2 cursor-pointer">Blog</li>
        <li className="p-2 cursor-pointer">Contact</li>
      </ul>

      <div onClick={handleNav} className="md:hidden cursor-pointer flex items-center">
        {!nav ? (
          <IoCloseOutline className="text-gray-400 hover:text-black hover:font-bold" size={28} />
        ) : (
          <HiOutlineMenuAlt2 className="text-blue-600 hover:font-bold" size={24} />
        )}
      </div>

      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full bg-white text-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <img className="w-[10rem] h-22 object-contain mt-4 font-bold" alt='/' src={logo} />

        <ul className="p-4 uppercase flex flex-col items-center justify-center h-full font-semibold">
          <li className="p-6 cursor-pointer">Home</li>
          <li className="p-6 cursor-pointer">Product</li>
          <li className="p-6 cursor-pointer">Blog</li>
          <li className="p-6 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
