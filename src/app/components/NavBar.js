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
    <nav className="bg-navBarBackground p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <svg width="100%" height="100%" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg" className="w-32 sm:w-40 md:w-48 lg:w-56">
              <rect width="100%" height="100%" fill="transparent"/>
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontSize="24" fontWeight="800" fill="white">News Todayy</text>
            </svg>
          </Link>
        </div>

        {/* Hamburger menu */}
        <button onClick={toggleMenu} className="md:hidden">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        {/* Navigation links and user profile for mobile */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:hidden mt-4`}>
          <Link href="/" className="block text-white hover:text-gray-300 py-2">Home</Link>
          <Link href="/headlines" className="block text-white hover:text-gray-300 py-2">Headlines</Link>
          <Link href="/business" className="block text-white hover:text-gray-300 py-2">Business</Link>
          <Link href="/technology" className="block text-white hover:text-gray-300 py-2">Technology</Link>
          {user && (
            <div className="mt-4 py-2 border-t border-gray-700">
              <div className="flex items-center">
                <Image
                  src={user.photoURL || '/default-avatar.png'}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="ml-2 text-white">{user.displayName || user.email}</span>
              </div>
              <button
                onClick={signOut}
                className="mt-2 w-full text-left text-white hover:text-gray-300 py-2"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>

        {/* Navigation links for desktop */}
        <div className="hidden md:flex md:items-center md:w-auto">
          <Link href="/" className="text-white hover:text-gray-300 mx-2">Home</Link>
          <Link href="/headlines" className="text-white hover:text-gray-300 mx-2">Headlines</Link>
          <Link href="/business" className="text-white hover:text-gray-300 mx-2">Business</Link>
          <Link href="/technology" className="text-white hover:text-gray-300 mx-2">Technology</Link>
        </div>

        {/* User profile for desktop */}
        <div className="hidden md:block">
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
      </div>
    </nav>
  );
}