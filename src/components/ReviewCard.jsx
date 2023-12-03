import React from "react";
import reviewUser from '../assets/homepage-images/reviewUser.svg'
import ellipse from '../assets/homepage-images/ellipse.svg'
import reviewStars from '../assets/homepage-images/reviewStars.svg'
export const ReviewCard = () => {
  return (
    <div className=" flex items-center  flex-col lg:inline-flex lg:flex-row lg:items-start gap-[20px] xl:gap-[20px] lg:gap-0 relative">
      <div className="relative w-[139px] h-[110px]">
        <div className="relative h-[110px]">
          <img className="absolute w-[110px] xl:w-[110px] h-[110px] xl:h-[110px] lg:w[70px] lg:h-[70px] top-0 left-0" alt="Ellipse" src={ellipse} />
          <img className="absolute w-[80px] xl:w-[80px] lg:w-[60px] lg:h-[60px] h-[80px] xl:h-[80px] top-0 left-[59px]" alt="Rectangle" src={reviewUser} />
        </div>
      </div>
      <div className="inline-flex flex-col items-center lg:items-start gap-[15px] relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
          <div className="relative mx-auto lg:mx-0 lg:text-md w-fit mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-center tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
            Mark Zuck
          </div>
          <p className="relative lg:text-xs w-[308px] xl:w-[308px] lg:w-[250px] [font-family:'DM_Sans-Regular',Helvetica] xl:[font-family:'DM_Sans-Regular',Helvetica] font-normal xl:font-normal text-transparent text-[16px] xl:text-[16px] tracking-[0] leading-[20px]">
            <span className="text-[#03989e]">@thetenantconnect</span>
            <span className="text-black font-poppinsRegular tracking-tight">
              {" "}
              was the simplest and easiest insurance I’ve ever purchased, “old” insurance companies need to step into
              the current century!!! 👏 👏 👏
            </span>
          </p>
        </div>
        <img className="relative flex-[0_0_auto]" alt="Frame" src={reviewStars} />
      </div>
    </div>
  )
}