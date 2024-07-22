// components/NewsFeed.js
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function NewsFeedCat({ category }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/news${category ? `?category=${category}` : ''}`);
        const data = await response.json();
        setNews(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews().then();
  }, [category]);

  if (loading) {
    return <div className="text-center py-10">Loading news...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex p-2">
      <div className="flex flex-initial lg:w-32"></div>
      <div className="flex-1 p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <div key={index} className="bg-card rounded-lg shadow-md overflow-hidden">
              {article.urlToImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={article.urlToImage}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{article.source.name}</span>

                  <a href={article.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-blue-500 hover:underline"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-initial lg:w-32"></div>
    </div>
  );
}