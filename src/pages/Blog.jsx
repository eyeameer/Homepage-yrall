import { useParams } from "react-router-dom"
import backArrow from '../assets/default-logos/backArrow.svg'
import Layout from "../components/Layout"
import blogPfp from '../assets/blogPage-images/blogPfp.svg'
import blogImg from '../assets/blogPage-images/blogThumbnail.svg'
import quoteSymbol from '../assets/blogPage-images/quoteSymbol.svg'
import blogHalfThumbnail from '../assets/blogPage-images/blogHalfThumbnail.svg'
import MoreArticlesComp from "../components/MoreArticlesComp"
import { useNavigate } from "react-router-dom"
const relatedArticles=[
    {
        title:'article name-headline for an article',
        category:'category 2',
        image:blogHalfThumbnail,
        color:'#FF9900',
        id:1
    },
    {
        title:'article name-headline for an article',
        category:'category 3',
        image:blogHalfThumbnail,
        color:'#1872FA',
        id:2
    },
    {
        title:'article name-headline for an article',
        category:'category 1',
        image:blogHalfThumbnail,
        color:'#1CC700',
        id:3
    },
    {
        title:'article name-headline for an article',
        category:'category 2',
        image:blogHalfThumbnail,
        color:'#FF9900',
        id:4
    },
]
export default function Blog(){
    // const history = useHistory();
    const {id}=useParams()
    const navigate=useNavigate()
    return(
        <Layout fullWidth={true}>
                    <section className="flex overflow-clip flex-col py-[100px] mx-[10%] sm:mx-[20%] xl:py-[70px] gap-20 xl:mx-[35%]">
            <section className="flex flex-col gap-7">
                <div 
                onClick={() =>  navigate(-1)} 
                className="flex gap-2 items-center">
                    <button className="">
                        <img src={backArrow} alt="" />
                    </button>
                    <div className=" text-primary-colour font-bold">
                        Back
                    </div>
                </div>
                <div className="flex gap-3 items-center ">
                <div className="py-1 px-4 font-semibold text-sm rounded-full w-fit text-white uppercase bg-[#1CC700]">
                category 1
            </div>
            <div className="font-semibold text-primary-colour  border-none text-xs">
            Feb 20th,2023
            </div>
                </div>
                
                    <h2 className="text-2xl font-bold capitalize">
                    this is tje article name-
headline lorem ipsum
                    </h2>
                <div className="flex gap-4 items-center">
                    <img src={blogPfp} alt="" />
                    <div>
                        <div className="capitalize font-semibold text-sm">name   last name</div>
                        <div className="capitalize text-primary-colour font-h2-tag-heading">position @ company</div>
                    </div>
                </div>
                <img src={blogImg} alt="" />
                <h2 className="font-bold text-2xl capitalize text-justify">
                Rorem ipsum dolor sit amet, sit amet, sit Rorem ipsum dolor sit amet, sit amet, sit Rorem ipsum dolor sit amet, sit amet, sit 
                </h2>
                <p className="text-sm text-primary-colour text-justify">
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
                <p className="text-sm text-primary-colour text-justify">
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
                <p className="text-sm text-primary-colour text-justify">
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.Yorem ipsum dolor sit amet, consectetur adipit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
                <div className="bg-[#E7FEFF] py-3 px-9 flex flex-col gap-2">
                    <img className="w-fit" src={quoteSymbol} alt="" />
                    <div className="text-2xl  font-semibold text-[#252525] capitalize italic">
                    conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                    </div>
                    <div className=" text-primary-colour font-semibold text-md uppercase">
                    name last name
                    </div>
                </div>
                <p className="text-sm text-primary-colour text-justify">
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
                <p className="text-sm text-primary-colour text-justify">
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
                
            </section>

        </section>

        <MoreArticlesComp 
            relatedArticles={relatedArticles}
        />

        </Layout>
    )
}