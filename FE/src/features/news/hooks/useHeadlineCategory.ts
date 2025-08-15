import { useEffect, useState } from "react";
import type { Article } from "../../../type";
import { getHeadlinesByCategory } from "../service";

const useHeadlinesCetgory = (category: string, pageSize?:number, page?:number, filter?:string):{
    data:Article[],
    loading:boolean,
    totalResults:number,
} => {
  const [data, setData] = useState<Article[]>([]);
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(true);

  const fetchHeadlinesByCategory = async ()=>{
    try {
        const response = await getHeadlinesByCategory({category, pageSize, page, filter})
        setData(response.articles)
        setTotalResults(response.totalResults)
    } catch (error) {
        console.log(error);
    } finally{
        setLoading(false)
    }
  }

  useEffect(()=>{
    fetchHeadlinesByCategory()
  },[category, pageSize, page, filter])

  return {data, loading, totalResults};
};

export default useHeadlinesCetgory
