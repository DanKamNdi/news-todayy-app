'use client'

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/navigation';
import {FcGoogle} from "react-icons/fc";

export default function Auth() {
  const router = useRouter();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/');
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#202124]">
      <div className="max-w-md w-full space-y-8 p-10 bg-[#1F1F1F] rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-[#E2E2E3]">
            Welcome to News Todayy
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Your daily dose of curated news
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[#202124] bg-[#E2E2E3] hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E2E2E3] transition-colors duration-200"
          >
            <FcGoogle className="w-5 h-5 mr-2"/> {/* Google icon */}
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}