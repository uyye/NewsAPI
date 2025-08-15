import imagebg from "../../assets/people.jpg";
import Card from "../../components/card/Card";
import Headline from "../../components/card/Headline";
import useHeadlinesCetgory from "../../features/news/hooks/useHeadlineCategory";
import useHeadlines from "../../features/news/hooks/useHeadlines";
import { Skeleton } from "antd";

export default function ListNews() {
  const { data: _headlines, loading: loadingHeadlines } = useHeadlines();
  const { data: _headlineSport, loading: loadingSport } = useHeadlinesCetgory("sport");
  const { data: _headlineBussines, loading: loadingBusiness } = useHeadlinesCetgory("business");
  const { data: _headlineEntertainment, loading: loadingEntertainment } = useHeadlinesCetgory("entertainment");
  const { data: _headlineTechnology, loading: loadingTechnology } = useHeadlinesCetgory("technology");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[560px]">
        <div className="absolute inset-0">
          <img src={imagebg} alt="news" className="h-full w-full object-cover" />
          <div className="bg-[rgba(185,28,28,0.8)] opacity-80 absolute inset-0" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="max-w-[730px] text-white font-bold flex flex-col gap-3 justify-center items-center text-center">
            <h1 className="text-base">Top News</h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
              Discover the Latest Trends, <br />
              Game-Changing Ideas & Expert Insights
            </h2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-grow bg-[#e1e3e1]">
        <div className="px-3 sm:px-5 py-5">
          <div className="rounded-lg bg-white p-2">
            
            {/* Headlines */}
            <div className="mb-4">
              <h2 className="font-semibold">Headlines News</h2>
              {loadingHeadlines ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {Array(6).fill(null).map((_, i) => (
                    <Skeleton key={i} active avatar paragraph={{ rows: 3 }} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {_headlines?.map((article, index) => (
                    <Headline key={index} article={article} />
                  ))}
                </div>
              )}
            </div>

            <hr className="my-6 border-t-4 border-gray-300" />

            {/* Sport & Business */}
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-[#e1e3e1] rounded p-4">
                <h2 className="font-semibold">Sport</h2>
                {loadingSport ? (
                  <Skeleton active paragraph={{ rows: 4 }} />
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {_headlineSport?.map((article, index) => (
                      <Card key={index} article={article} />
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-[#e1e3e1] rounded p-4">
                <h2 className="font-semibold">Business</h2>
                {loadingBusiness ? (
                  <Skeleton active paragraph={{ rows: 4 }} />
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {_headlineBussines?.map((article, index) => (
                      <Card key={index} article={article} />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Entertainment & Technology */}
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-[#e1e3e1] rounded p-4">
                <h2 className="font-semibold">Entertainment</h2>
                {loadingEntertainment ? (
                  <Skeleton active paragraph={{ rows: 4 }} />
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {_headlineEntertainment?.map((article, index) => (
                      <Card key={index} article={article} />
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-[#e1e3e1] rounded p-4">
                <h2 className="font-semibold">Technology</h2>
                {loadingTechnology ? (
                  <Skeleton active paragraph={{ rows: 4 }} />
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {_headlineTechnology?.map((article, index) => (
                      <Card key={index} article={article} />
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
