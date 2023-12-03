
import largeFbIcon from '../assets/icons-svgs/largeFbIcon.svg'
import largeInstaIcon from '../assets/icons-svgs/largeInstaIcon.svg'
import largeXIcon from '../assets/icons-svgs/largeXIcon.svg'
import laregLinkedinIcon from '../assets/icons-svgs/largeLinkedinIcon.svg'
import  newGlobeIcon from '../assets/icons-svgs/newGlobeIcon.svg'
export default function ProjectsCard({image,title,position,description}){
    return(
        <div className="flex flex-col lg:flex-row overflow-clip  justify-between">
            {position==='left' && <div className="flex justify-center items-center lg:justify-normal  flex-col gap-5 lg:gap-3">
                <div>
                    {image}
                </div>
                <div className="flex space-x-11">
                    <a href="">
                        <img src={largeXIcon} className='w-6' alt="" />
                    </a>
                    <a href="">
                        <img src={largeFbIcon} className='w-6' alt="" />
                    </a>
                    <a href="">
                        <img src={largeInstaIcon} className='w-6' alt="" />
                    </a>
                    <a href="">
                        <img src={laregLinkedinIcon} className='w-6' alt="" />
                    </a>
                    <a href="">
                        <img src={newGlobeIcon} className='w-6' alt="" />
                    </a>

                    
                </div>
            </div>}
            {position==='right' && <div className="flex justify-center items-center lg:hidden flex-col gap-5 lg:gap-3">
                <div>
                    {image}
                </div>
                <div className="flex space-x-11">
                    <a href="">
                        <img src={largeXIcon} className='w-6' alt="" />
                    </a>
                    <a href="">
                        <img src={largeFbIcon} className='w-6' alt="" />
                    </a>
                    <a href="">
                        <img src={largeInstaIcon} className='w-6' alt="" />
                    </a>
                    <a href="">
                        <img src={laregLinkedinIcon} className='w-6' alt="" />
                    </a>
                    <a href="">
                        <img src={newGlobeIcon} className='w-6' alt="" />
                    </a>

                    
                </div>
            </div>}
            <div className="flex flex-col gap-4 lg:w-[50%]">
                <h2 className=" capitalize text-3xl font-bold text-center lg:text-left lg:block lg:w-fit  bg-[linear-gradient(180deg,rgb(37,37,37)_0%,rgb(3,152,158)_100%)] bg-clip-text [-webkit-text-fill-color:transparent]  tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)]">{title}</h2>
                <div className="flex justify-center lg:justify-normal items-center gap-2 lg:gap-3">
                    <div className="py-1 px-4 rounded-full bg-primaryColor text-white">UI</div>
                    <div className="py-1 px-4 rounded-full bg-primaryColor text-white">Web App</div>
                    <div className="py-1 px-4 rounded-full bg-primaryColor text-white">Development</div>
                </div>
                <div className="text-[#252525] text-sm lg:text-base text-justify">{description}</div>
            </div>
            {position==='right' && <div className="lg:flex hidden flex-col gap-3">
                <div>
                    {image}
                </div>
                <div className="flex space-x-11">
                    <a href="">
                        <img src={largeXIcon} className='w-6' alt="" />
                    </a>
                    <a href="">
                        <img src={largeFbIcon} className='w-6' alt="" />
                    </a>
                    <a href="">
                        <img src={largeInstaIcon} className='w-6' alt="" />
                    </a>
                    <a href="">
                        <img src={laregLinkedinIcon} className='w-6' alt="" />
                    </a>
                    <a href="">
                        <img src={newGlobeIcon} className='w-6' alt="" />
                    </a>

                    
                </div>
            </div>}
        </div>
    )
}