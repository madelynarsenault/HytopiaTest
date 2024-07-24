"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoSearchOutline, IoPeopleOutline } from 'react-icons/io5';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-[5.88rem] bg-transparent">
      <div className="h-full flex items-center justify-between px-8">
        <div className="flex items-center space-x-20">
          <Link href="/">
            <Image src="/HYTOPIA.svg" alt="MyApp Logo" width={138.1} height={20} />
          </Link>
          <div className="flex items-center space-x-8 text-customWhite text-opacity-50 text-justify text-lg font-inter font-bold hover:text-gray-300">
            <Link href="/play">Play</Link>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/locker">Locker</Link>
          </div>
        </div>

        <div className="flex-grow relative flex justify-start pl-20">
          <div className="relative w-80 h-12">
            <input
              type="text"
              className="w-full h-12 rounded-xl bg-transparent border-2 border-secondary text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-24 h-12 flex items-center justify-center rounded-xl bg-secondary text-sm text-customWhite font-black hover:bg-gray-700">
            $18,391
          </div>
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary text-sm text-customWhite font-black hover:bg-gray-700">
            <IoPeopleOutline className="text-customWhite text-opacity-50 h-10" size={26} />
          </div>
          <div className="w-14 h-12 flex items-center justify-center relative rounded-xl bg-secondary text-sm text-customWhite font-black hover:bg-gray-700">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Image
                src="/pfp.jpeg"
                alt="Profile Picture"
                width={30}
                height={30}
                className="rounded-full"
              />
              <div className="absolute bottom-0.5 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-secondary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
