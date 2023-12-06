import MoreBlogCard from "./MoreBlogCard";

export default function MoreArticlesComp({relatedArticles}){
    return(
        <section className="flex flex-col items-center justify-center bg-[#E7FEFF] xl:p-[10%] p-[3%] gap-8 overflow-clip ">
            <h2 className="font-bold text-2xl capitalize text-center">
                Related Articles
            </h2>
            <section className="grid grid-cols-12  gap-10">
                {relatedArticles?.map((blog,i)=>(
                    <MoreBlogCard
                    key={i}
                    title={blog.title}
                    image={blog.image}
                    category={blog.category}
                    color={blog.color}
                    id={blog.id}
                    />
                ))}
            </section>
        </section>
    )
}