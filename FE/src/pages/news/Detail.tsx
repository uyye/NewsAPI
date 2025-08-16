import { useParams } from "react-router";
import useArticle from "../../features/news/hooks/useArticle";
import formatDate from "../../helpers/formatDate";
import NewsContent from "../../components/content/NewsContent";
import useHeadlinesCetgory from "../../features/news/hooks/useHeadlineCategory";
import Card from "../../components/card/Card";
import { Skeleton } from "antd";

export default function DetailNews() {
  const { title, category="" } = useParams<{ title: string, category:string }>();
  const { data: _article, loading: _loading } = useArticle(title || "");
  const pageSize = 3;
  const {
    data: _sameContent,
    loading: _loadingSameContent,
    totalResults: _totalResults,
  } = useHeadlinesCetgory(category, pageSize);

  return (
    <div className=" z-0 top-[96px]">
      {/* content */}
      <div className="w-full md:px-[160px] px-5 py-10  gap-[60px]">
        {
          _loading ? (
            <Skeleton active paragraph={{rows: 10}}/>
          ):(
            <div className="gap-10 max-w-[1120px] mx-auto flex flex-col">
          {/* head content */}
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-sm font-medium">
              {formatDate(_article?.publishedAt)} . Created by{" "}
              {_article?.source?.name}
            </p>
            <p className="text-3xl">{_article.title}</p>
          </div>

          {/* image */}
          <img
            src={_article?.urlToImage}
            alt={_article?.title + "-images"}
            className="w-full h-[480px] object-cover rounded-[12px]"
          />

          {/* conten -desc */}
          <NewsContent htmlContent={_article.content} />
          <span>
            <a
            href={_article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline inline-block"
          >
            Read more ...
          </a> 
          </span>
           
        </div>
          )
        }
      </div>

      {/* same category */}
      {
        category !== 'headlines' &&
        <div className=" relative w-full pt-10 pb-[200px] md:px-[180px] px-5 gap-[60px]">
        <div className="w-full max-w-[1080px] mx-auto gap-6 flex flex-col">
          <p className="font-bold text-xl">Other article</p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {_loadingSameContent ? (
              Array(pageSize).fill(null).map((_, i) => (
                <Skeleton key={i} active avatar paragraph={{ rows: 3 }} />
              ))
            ) :(
              _sameContent?.map((article, index) => (
                <Card key={index} article={article} category={category} />
              ))
            )
          }
          </div>
        </div>
      </div>
      }
      
    </div>
  );
}
