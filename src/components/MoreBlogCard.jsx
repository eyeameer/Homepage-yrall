import { useNavigate } from "react-router-dom"
export default function MoreBlogCard({title,category,color,image,id}){
    const navigate=useNavigate()
    return(
        <div className="flex items-center justify-center  flex-col -space-y-3 col-span-12 sm:col-span-6 xl:col-span-3">
                <img src={image} alt="" />
                <div className=" bg-white w-[62%] sm:w-[81%] lg:w-[68%] xl:w-auto capitalize px-4  py-[6%] flex flex-col gap-2 rounded-xl">
                <div className={`${color?`bg-[${color}]`:''} py-1 px-4 font-semibold text-xs rounded-full w-fit text-white uppercase`}>
                {category}
            </div>
                   <div className=" text-xl font-h2-tag-heading   lg:w-[70%]">
                    {title}
                   </div>
                    <a 
                    onClick={()=>{
                        navigate(`/blog/${id}`)
                    }}
                    className="text-sm font-semibold underline text-primary-colour capitalize" href="">
                    Read Now
                </a>
                </div>
                
        </div>
    )
}