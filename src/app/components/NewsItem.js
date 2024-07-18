export default function NewsItem({ article }) {
  return (
    <div className="mb-4">
      <a href={article.url}
         target="_blank"
         rel="noopener noreferrer"
         className="block mb-1">
        <h3 className="text-md font-semibold hover:underline">{article.title}</h3>
      </a>
      <p className="text-xs text-gray-500">
        {new Date(article.publishedAt).toLocaleDateString()} | {article.source.name}
      </p>
    </div>
  );
}