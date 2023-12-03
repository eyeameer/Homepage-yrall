export default function HeadingCard({title,description}){
    return(
        <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-5">
            <h2 className="text-3xl capitalize font-bold text-center">
                {title}
            </h2>
            <p className="text-center text-[#252525] text-sm lg:mx-[20%] capitalize">
            {description}
            </p>
        </div>
        </div>
    )
}

