import { use, useEffect, useState } from "react"
import type { Article } from "../../../type"
import { getArticlesDetail } from "../service"

const useArticle = (title:string) : {data:Article, loading:boolean} =>{
    const [data, setData] = useState<Article>({} as Article)
    const [loading, setLoading] = useState<boolean>(true)

    const fetchArticle = async ()=>{
        try {
            const response = await getArticlesDetail({title})
            console.log(response);
            
            setData(response)
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchArticle()
    },[title])

    return {data, loading}
}

export default useArticle