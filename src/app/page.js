"use client";

import { useAuth } from './AuthProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import NewsFeed from './components/NewsFeed';

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div>
      <NavBar />
      <main className="p-2">
        <div className="flex p-2">
          <div className="flex flex-initial lg:w-32">
          </div>
          <div className="flex-1 p-2">
            <NewsFeed />
          </div>
          <div className="flex flex-initial lg:w-32">
          </div>
        </div>
      </main>
    </div>
  );
}