import Footer from "./Footer"
import Header from "./Header"
export default function Layout({children,fullWidth}){
    return(
        <>
        <Header/>
        <main className={`${fullWidth?'':'py-[105px] px-[10px] lg:px-[100px] xl:px-[200px]'}`}>{children}</main>
        <Footer/>
        </>
    )
}