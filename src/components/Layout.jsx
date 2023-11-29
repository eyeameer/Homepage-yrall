import Footer from "./Footer"
import Header from "./Header"
export default function Layout({children}){
    return(
        <>
        <Header/>
        <main className="py-[105px] px-[10px] lg:px-[200px]">{children}</main>
        <Footer/>
        </>
    )
}