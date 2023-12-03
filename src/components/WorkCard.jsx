export default function WorkCard({img,title,description}){
    return(
        <div className='flex flex-col md:mx-[200px] lg:mx-auto border rounded-md gap-5 border-primaryColor p-4  justify-center items-center'>
            {img}
            <h2 className='font-semibold capitalize text-2xl text-center'>{title}</h2>
            <p className='text-sm w-[80%] '> {description} </p>
        </div>
    )
}