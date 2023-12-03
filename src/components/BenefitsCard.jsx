export default function BenefitsCard({numberImg,title,description}){
    return(
        <div className='flex flex-col col-span-12 lg:col-span-4 border-4  rounded-md gap-5 border-primaryColor p-4  justify-center items-center'>
        {numberImg}
        <h2 className='font-semibold capitalize text-2xl text-center'>{title}</h2>
        <p className='text-sm w-[80%]'> {description} </p>
    </div>
    )
}