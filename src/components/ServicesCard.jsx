export default function ServicesCard({position,title,description,image}){
    return(


       
        <div className="flex overflow-clip flex-col lg:flex-row lg:gap-10">
      {position==='left' &&  <div className="flex items-center justify-center mt-10 mb-10 lg:mt-0">{image}</div>}
      {position==='right' &&  <div className="flex lg:hidden  items-center justify-center mt-10 mb-10 lg:mt-0">{image}</div>}
      <div className="inline-flex flex-col items-start gap-[5px] relative">
        <div className="relative capitalize  lg:block w-fit mt-[-1.00px] bg-[linear-gradient(180deg,rgb(37,37,37)_0%,rgb(3,152,158)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-h3 font-[number:var(--h3-font-weight)] text-transparent text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
          {title}
        </div>
        <p className=" lg:w-[469.76px] text-justify lg:font-h2-description lg:font-[number:var(--h2-description-font-weight)]  lg:text-[length:var(--h2-description-font-size)] lg:text-justify lg:tracking-[var(--h2-description-letter-spacing)] leading-[var(--h2-description-line-height)] [font-style:var(--h2-description-font-style)]">
          {description}
        </p>
      </div>
      {position==='right' &&  <div className="lg:flex hidden  items-center justify-center mt-10 mb-10 lg:mt-0">{image}</div>}
      </div>
        
    )
}