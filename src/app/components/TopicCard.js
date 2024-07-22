import { useState, useEffect } from 'react';
import Link from "next/link";

export default function TopicCard({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch(`/api/news?category=${category.toLowerCase()}`);
        const data = await res.json();

        // Filter articles with images
        const articlesWithImages = data.articles.filter(article => article.urlToImage);
        setArticles(articlesWithImages.slice(0, 3));
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }

    fetchArticles().then();
  }, [category]);

  return (
    <div className="bg-card rounded-lg shadow-md p-4">
      <Link href="/" className="hover:underline">
        <h3 className="text-lg font-semibold mb-3 flex items-center">
          {category}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="ml-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 6 15 12 9 18"></polyline>
          </svg>
        </h3>
      </Link>
      <hr className="mb-3"/>
      {articles.map((article, index) => (
        <div key={index} className="flex mb-3 last:mb-0">
          <div className="flex-grow pr-2">
            <a href={article.url} target="_blank" rel="noopener noreferrer"
               className="text-sm font-medium hover:underline">
              {article.title}
            </a>
            <p className="text-xs text-gray-500 mt-1">{article.source.name}</p>
          </div>
          <img src={article.urlToImage} alt={article.title} className="w-16 h-16 object-cover rounded" />
        </div>
      ))}
    </div>
  );
}