import { useEffect, useState } from "react"
import type { Article } from "../../../type"
import { getArticlesDetail } from "../service"

const useArticle = (title:string, category?:string) : {data:Article, loading:boolean} =>{
    const [data, setData] = useState<Article>({} as Article)
    const [loading, setLoading] = useState<boolean>(true)

    const fetchArticle = async ()=>{
        if(category === 'headlines') category = ""
        try {
            const response = await getArticlesDetail({title, category})
            setData(response)
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchArticle()
    },[title, category])

    return {data, loading}
}

export default useArticle