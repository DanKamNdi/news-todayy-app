'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '../AuthProvider';

export default function NavBar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="flex justify-evenly items-center p-4 bg-navBarBackground">
      <div className="flex items-center">
        <Link href="/">
          <svg width="200" height="40" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="transparent"/>
            <text x="13" y="28" fontFamily="Montserrat, sans-serif" fontSize="24" fontWeight="800" fill="white">News Todayy</text>
          </svg>
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/" className="mx-4 font-semibold">Home</Link>
        <Link href="/headlines" className="mx-4 font-semibold">Headlines</Link>
        <Link href="/business" className="mx-4 font-semibold">Business</Link>
        <Link href="/technology" className="mx-4 font-semibold">Technology</Link>
      </div>
      <div className="flex items-center">
        {user && (
          <>
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
          </>
        )}
      </div>
    </nav>
  );
}