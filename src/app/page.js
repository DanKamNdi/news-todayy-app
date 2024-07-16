'use client'

import { useAuth } from './AuthProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import NavBar from './components/NavBar';

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
      <main className="p-4">
        <h1>Welcome, {user.displayName || user.email}!</h1>
        {/* Your main content here */}
      </main>
    </div>
  );
}