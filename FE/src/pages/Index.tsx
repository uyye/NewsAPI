import { Outlet } from "react-router";
import Footer from "../components/navigation/Footer";
import Header from "../components/navigation/Header";

export default function Index(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}