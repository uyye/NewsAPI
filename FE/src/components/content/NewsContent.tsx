
import  DOMPurify  from "dompurify"
export default function NewsContent({htmlContent}:{htmlContent:string}){
    return(
        <article
        dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(htmlContent)
        }}>
        </article>
    )
}