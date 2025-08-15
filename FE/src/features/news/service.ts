import apiClient from "../../api/newsAPI"

export const getHeadlines = async()=>{
    const data = await apiClient({
        method:'get',
        url:`/news/headlines`
    })

    return data.data.articles
}

export const getHeadlinesByCategory = async({category, pageSize, page, filter}:{category:string, pageSize?:number, page?:number, filter?:string})=>{
    const {data} = await apiClient({
        method:'get',
        url:`/news/headlines/${category}`,
        params:{
            pageSize,
            page,
            q: filter
        }
    })
    return data
}

export const getArticlesDetail = async({title}:{title:string})=>{
    const {data} = await apiClient({
        method:'get',
        url:`/news/detail/${title}`
    })
    return data
}
