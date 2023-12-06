import { useNavigate } from "react-router-dom"
export default function BlogCard({image,category,title,description,id}){
    const navigate=useNavigate()
    return(
        <div className="flex md:justify-center md:items-center lg:justify-normal lg:items-baseline lg:col-span-6 col-span-12 flex-col -space-y-10 mb-10">
            <div>
                {image}
            </div>
            <div className="flex flex-col md:justify-center md:items-center lg:justify-normal lg:items-baseline gap-3 rounded-t-lg bg-white pt-5">
            <div className="py-1 px-4 font-bold text-sm rounded-full w-fit text-white uppercase bg-[#1CC700]">
                {category}
            </div>
            <div className="text-2xl font-h2-tag-heading font capitalize">
                {title}
            </div>
            <div className="flex lg:justify-normal lg:items-baseline md:justify-center md:items-center flex-col gap-5">
                <p className="text-sm md:w-[69%] lg:w-auto text-justify">{description}</p>
                <a 
                onClick={()=>{
                    navigate(`/blog/${id}`)
                }}
                className="underline text-[#252525] cursor-pointer text-sm">Read Now</a>
            </div>
            </div>
        </div>
    )
}