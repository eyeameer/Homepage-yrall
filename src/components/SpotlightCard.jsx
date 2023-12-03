

export default function SpotlightCard({image,title,description,margins}){
    return (
        <section className="flex flex-col lg:justify-between lg:items-center  gap-20 lg:flex-row">
    
       <div className=' flex flex-col z-[50] gap-40 lg:gap-[120px] xl:gap-40'>
       <div className={`${margins}  text-center  lg:mx-0`}>
       <div className="xl:text-[100px]  text-[80px]  lowercase font-h2-tag-heading bg-gradient-to-r from-primaryColor to-green-400 bg-clip-text text-transparent animate-title">
            {title}
          </div>
          <div className="xl:text-[100px] text-[80px]  lowercase font-h2-tag-heading bg-gradient-to-r from-primaryColor to-blue-400 bg-clip-text text-transparent animate-title2">
            {title}
          </div>
          <div className="xl:text-[100px] text-[80px]  lowercase font-h2-tag-heading bg-gradient-to-r from-primaryColor to-[#000033] bg-clip-text text-transparent animate-title3">
            {title}
          </div> 
        </div>       
        
          <div className="captalize text-center md:mx-20 lg:mx-0 lg:text-left xl:w-[80%] text-sm text-[#252525] z-10 animate-slide-down">
            {description}
          </div>
       </div>
       
        <div className="flex justify-center items-center lg:justify-normal">{image}</div>
      </section>
      );
    }
    
{/* <div className="flex w-[1152px] items-center justify-between relative">
<div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
  <TextAnimation
    className="!bg-white"
    nameOfTheSection="services"
    overlapGroupClassName="!w-[917px]"
    state="two"
  />
  <div className="relative w-[455px] h-[72px] -mt-px" />
</div> */}
{/* <img
  className="relative w-[569.59px] h-[327.27px]"
  alt="Undraw progressive"
  src="undraw-progressive-app-m-9-ms-1.svg"
/> */}
{/* {image}
</div> */}