'use client'

import Link from 'next/link';
import { useAuth } from '../AuthProvider';
import { useState } from 'react';
import ProfileDropdown from "@/app/components/ProfileDropdown";

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

      <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:flex-1 md:items-center md:justify-center mt-4 md:mt-0`}>
        <Link href="/headlines" className="block md:inline-block mx-4 font-semibold text-white hover:text-gray-300">Headlines</Link>
        <Link href="/business" className="block md:inline-block mx-4 font-semibold text-white hover:text-gray-300">Business</Link>
        <Link href="/technology" className="block md:inline-block mx-4 font-semibold text-white hover:text-gray-300">Technology</Link>
        <Link href="/entertainment" className="block md:inline-block mx-4 font-semibold text-white hover:text-gray-300">Entertainment</Link>
        <Link href="/sports" className="block md:inline-block mx-4 font-semibold text-white hover:text-gray-300">Sports</Link>
        <Link href="/health" className="block md:inline-block mx-4 font-semibold text-white hover:text-gray-300">Health</Link>
        <Link href="/science" className="block md:inline-block mx-4 font-semibold text-white hover:text-gray-300">Science</Link>
      </div>

      <div className="flex flex-1 justify-end">
        {/* Hamburger menu */}
        <button onClick={toggleMenu} className="md:hidden mx-3">
          <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
        <ProfileDropdown user={user} signOut={signOut}/>
      </div>
    </nav>
  );
}
