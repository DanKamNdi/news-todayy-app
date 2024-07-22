"use client";

import NewsFeedCat from '../components/NewsFeedCat';
import NavBar from "@/app/components/NavBar";
import {useAuth} from "@/app/AuthProvider";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function CategoryPage({ params }) {
  const { category } = params;

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
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            {category.charAt(0).toUpperCase() + category.slice(1)} News
          </h1>
          <NewsFeedCat category={category}/>
        </div>
      </main>
    </div>
  );
}