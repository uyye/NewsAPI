export interface Article {
  source: Source
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface Source {
  id: string
  name: string
}

export interface PagesProps {
  currentPage:number
  pageSize:number
  totalResults:number
  setPage:(page:number)=>void
}