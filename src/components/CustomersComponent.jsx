import { ReviewCard } from "./ReviewCard"
export default function CustomersComponent(){
    return(
        <section className="flex flex-col gap-10 items-center justify-center">
        <div className="text-center flex flex-col gap-5">
          <div className="capitalize  text-3xl font-bold mx-10 lg:leading-normal leading-[50px] lg:mx-auto">
          what our customers are saying
          </div>
          <div className="text-[#252525CC] lg:w-[710px] capitalize">
          Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </div>
        </div>
        <div className="grid grid-cols-12 gap-7">
  {[1,2,3,4].map((card)=>{
    return(
      <div key={card} className="col-span-12 lg:col-span-6"><ReviewCard /></div>
    )
  })}
</div>
</section>
    )
}