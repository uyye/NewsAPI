import { useParams } from "react-router";
import useHeadlinesCetgory from "../../features/news/hooks/useHeadlineCategory";
import Card from "../../components/card/Card";
import Pages from "../../components/pagination/Pagination";
import { useEffect, useState } from "react";
import SearchInput from "../../components/input/Search";
import { Skeleton } from "antd";

export default function CategoryPage() {
  const { category = "general" } = useParams<{ category: string }>();
  const pageSize = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const {
    data: _article,
    loading: _loading,
    totalResults: _totalResults,
  } = useHeadlinesCetgory(category, pageSize, currentPage, filter);

  const handlePageChange = (page: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  return (
    <div className="w-full pt-6 md:pb-[100px] pb-[60px] md:px-[100px] px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-[1240px] gap-6 flex flex-col items-center">
        
        {/* Header Search & Title */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-3">
          <p className="font-medium">
            Showing: <span className="capitalize">{category}</span> News
          </p>
          <SearchInput
            onSearch={(value) => {
              setCurrentPage(1);
              setFilter(value);
            }}
          />
        </div>

        <hr className="my-4 h-1 w-full border-0 bg-gradient-to-r from-[#7f1d1d] to-[#b91c1c]" />

        {/* News Cards */}
        <div className="w-full gap-[40px] md:gap-[60px] mx-auto">
          <div className="w-full gap-6 md:gap-10 grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
            {_loading ? (
              Array(pageSize).fill(null).map((_, i) => (
                <Skeleton key={i} active avatar paragraph={{ rows: 3 }} />
              ))
            ) :
            _article?.map((article, index) => (
              <Card key={index} article={article} category={category} />
            ))} 
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center w-full">
          <Pages
            currentPage={currentPage}
            pageSize={pageSize}
            totalResults={_totalResults}
            setPage={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
