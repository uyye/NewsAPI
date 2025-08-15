import { useEffect, useState } from "react"
import type { Article } from "../../../type"
import { getHeadlines } from "../service"

const useHeadlines = ():{data:Article[], loading:boolean}=>{
    const [data, setData] = useState<Article[]>([])
    const [loading, setLoading] = useState(true)

    const fetchHeadlines = async()=>{

        try {
            const response = await getHeadlines()
            setData(response)
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchHeadlines()
    }, [])

    return {data, loading}
}

export default useHeadlines