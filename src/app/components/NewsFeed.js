import Link from 'next/link';
import NewsItem from "./NewsItem";
import { useState, useEffect } from 'react';

export default function NewsFeed() {
  const [newsData, setNewsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch('/api/news');
        const data = await res.json();
        setNewsData(data);
      } catch (err) {
        setError('Failed to fetch news');
        console.error(err);
      }
    }

    fetchNews().then();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!newsData) return <div>Loading...</div>;

  // Find the first article with a valid urlToImage
  const mainArticle = newsData.articles.find(article => article.urlToImage);
  const secondaryArticles = newsData.articles.filter(article => article !== mainArticle).slice(0, 4);

  return (
    <div className="bg-card rounded-lg p-4">
      <Link href="/headlines" className="block mb-4">
        <h1 className="text-blue-500 text-xl hover:underline">Top Stories</h1>
      </Link>
      <div className="flex flex-col md:flex-row">
        {mainArticle && (
          <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
            {/* Main Article */}
            <div className="mb-4">
              <img src={mainArticle.urlToImage} alt={mainArticle.title} className="w-full h-48 object-cover rounded-lg mb-2" />
              <a href={mainArticle.url} target="_blank" rel="noopener noreferrer" className="block mb-2">
                <h2 className="text-lg font-bold hover:underline">{mainArticle.title}</h2>
              </a>
              <p className="text-sm mb-2">{mainArticle.description}</p>
              <p className="text-xs text-gray-500">
                {new Date(mainArticle.publishedAt).toLocaleDateString()} | {mainArticle.source.name}
              </p>
            </div>
          </div>
        )}
        <div className={`w-full ${mainArticle ? 'md:w-1/2 md:pl-4' : ''}`}>
          {/* Secondary Articles */}
          {secondaryArticles.map((article, index) => (
            <NewsItem key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}