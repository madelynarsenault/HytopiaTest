import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoSearchOutline, IoPeopleOutline } from 'react-icons/io5';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky w-full z-5 bg-opacity-70 mt-1.5 transform translate-y-[10px]">
      <div className="flex items-center justify-between px-4 py-2 h-full">
        <div className="flex items-center mx-9 space-x-4 lg:space-x-12">
          <Link href="https://hytopia.com/">
            <Image src="/HYTOPIA.svg" alt="MyApp Logo" width={138.1} height={20} />
          </Link>
          <div className="hidden md:flex items-center space-x-4 text-customWhite text-opacity-50 text-xl font-bold">
            <Link className="hover:text-gray-300" href="/">Play</Link>
            <Link className="hover:text-gray-300" href="/marketplace">Marketplace</Link>
            <Link className="hover:text-gray-300" href="/locker">Locker</Link>
            <div className="w-20"></div>
            <div className="relative w-64 lg:w-80">
              <input
                type="text"
                className="w-full h-[50px] pl-10 rounded-xl bg-transparent border border-secondary text-white focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 lg:space-x-4 mr-10">
          <div className="w-20 lg:w-24 h-12 flex items-center justify-center rounded-xl bg-secondary text-sm text-customWhite font-black hover:bg-gray-700">
            $18,391
          </div>
          <div className="w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center rounded-xl bg-secondary text-sm text-customWhite font-black hover:bg-gray-700">
            <IoPeopleOutline className="text-white text-opacity-50" size={24} />
          </div>
          <div className="w-12 lg:w-14 h-10 lg:h-12 flex items-center justify-center relative rounded-xl bg-secondary text-sm text-customWhite font-black hover:bg-gray-700">
            <div className="relative">
              <Image
                src="/pfp.jpeg"
                alt="Profile Picture"
                className="rounded-full"
                width={30}
                height={30}
              />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-secondary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
