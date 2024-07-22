'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '../AuthProvider';
import { useState } from 'react';

export default function NavBar() {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="flex flex-wrap items-center p-4 bg-navBarBackground">
      <div className="flex flex-1 justify-items-start">
        <Link href="/">
          <svg width="200" height="40" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="transparent"/>
            <text x="13" y="28" fontFamily="Montserrat, sans-serif" fontSize="24" fontWeight="800" fill="white">News Todayy</text>
          </svg>
        </Link>
      </div>

      {/* Hamburger menu */}
      <button onClick={toggleMenu} className="md:hidden ">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
        </svg>
      </button>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:flex-1 md:items-center md:justify-center mt-4 md:mt-0`}>
        <Link href="/" className="block md:inline-block mx-4 font-semibold text-white hover:text-gray-300">Home</Link>
        <Link href="/headlines" className="block md:inline-block mx-4 font-semibold text-white hover:text-gray-300">Headlines</Link>
        <Link href="/business" className="block md:inline-block mx-4 font-semibold text-white hover:text-gray-300">Business</Link>
        <Link href="/technology" className="block md:inline-block mx-4 font-semibold text-white hover:text-gray-300">Technology</Link>
      </div>

      <div className="flex flex-1 justify-end">
        {user && (
          <div className="relative group">
            <Image
              src={user.photoURL || '/default-avatar.png'}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full cursor-pointer"
            />
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
              <button
                onClick={signOut}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
