import { Link } from "react-router";
import formatDate from "../../helpers/formatDate";
import type { Article } from "../../type";

export default function Card({ article , category }: { article: Article, category?: string }) {

  return (
    <Link to={`/news/${category}/${encodeURIComponent(article.title) }`}>
      <div className="max-w-[300px] max-h-[432px] h-fit gap-4 flex flex-col">
      <div className="h-[200px] w-full">
        <img
          src={article.urlToImage|| "/placeholder.jpg"}
          alt={article.title + "-images"}
          className="object-cover rounded-[12px] h-full w-full"
        />
      </div>
      <div className="gap-2 flex flex-col">
        <p className="font-normal text-sm">{formatDate(article.publishedAt)}</p>
        <h3 className="font-semibold text-lg">{article.title}</h3>
        <div className="rounded bg-gradient-to-r from-[#7f1d1d] to-[#b91c1c] px-3 py-1 w-fit h-fit">
          <p>{article.source.name}</p>
        </div>
      </div>
    </div>
    </Link>
      
  );
}
