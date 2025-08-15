import formatDate from "../../helpers/formatDate";
import type { Article } from "../../type";

export default function Headline({ article }: { article: Article }) {
  console.log(article);
  return (
    <div className="relative w-[full] h-[300px] p-2 overflow-hidden group">
      <div className="absolute inset-0">
        <img
          src={article.urlToImage}
          alt={article.title + "-images"}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="relative z-10 h-full flex items-end">
        <div className="flex-col gap-1">
          <span
            className="text-sm text-white font-semibold px-2 py-1 rounded bg-gradient-to-r from-[#7f1d1d] to-[#b91c1c]">
            {article.author || "Unknown"}
          </span>
          <h1 className="text-white font-bold">{article.title}</h1>
          <p className="text-white">{formatDate(article.publishedAt)}</p>
        </div>
      </div>
    </div>
  );
}
