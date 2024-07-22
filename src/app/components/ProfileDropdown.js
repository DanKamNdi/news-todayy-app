'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ProfileDropdown({ user, signOut }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!user) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <Image
        src={user.photoURL || '/default-avatar.png'}
        alt="Profile"
        width={40}
        height={40}
        className="rounded-full cursor-pointer"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#1F1F1F] rounded-md shadow-lg py-1 z-10">
          <button
            onClick={() => {
              signOut();
              setIsOpen(false);
            }}
            className="block px-4 py-2 text-sm text-[#E2E2E3] hover:bg-[#2C2C2C] w-full text-left"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}