import { ReviewCard } from "./ReviewCard"
import reviewUser from '../assets/homepage-images/reviewUser.svg'
const reviews=[
  {
    name:'Mark Zuck',
    description:'was the simplest and easiest insurance I’ve ever purchased, “old” insurance companies need to step into the current century!!! 👏 👏 👏',
    mention:'@thetenantconnect',
    pfp:reviewUser
  },
  {
    name:'Mark Zuck',
    description:'was the simplest and easiest insurance I’ve ever purchased, “old” insurance companies need to step into the current century!!! 👏 👏 👏',
    mention:'@thetenantconnect',
    pfp:reviewUser
  },
  {
    name:'Mark Zuck',
    description:'was the simplest and easiest insurance I’ve ever purchased, “old” insurance companies need to step into the current century!!! 👏 👏 👏',
    mention:'@thetenantconnect',
    pfp:reviewUser
  },
  {
    name:'Mark Zuck',
    description:'was the simplest and easiest insurance I’ve ever purchased, “old” insurance companies need to step into the current century!!! 👏 👏 👏',
    mention:'@thetenantconnect',
    pfp:reviewUser
  },
]
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
  {reviews.map((review,i)=>{
    return(
      <div key={i} className="col-span-12 lg:col-span-6">
        <ReviewCard 
          userPfp={review.pfp}  
          name={review.name}
          description={review.description}
          mention={review.mention}
      />
      </div>
    )
  })}
</div>
</section>
    )
}