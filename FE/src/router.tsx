import { createBrowserRouter } from "react-router";
import Index from "./pages/Index";
import ListNews from "./pages/news/Home";
import CategoryPage from "./pages/news/Category";
import DetailNews from "./pages/news/Detail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index/>,
        children:[
            {path:``, element:<ListNews/>},
            {path:`news/:category/:title`, element:<DetailNews/>},
            {path:`news/category/:category`, element:<CategoryPage/>}
        ]
    }
])

export default router