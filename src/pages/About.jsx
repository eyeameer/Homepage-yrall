import Layout from "../components/Layout";
import teamImg from "../assets/aboutPage-images/teamImg.svg"
import logo from '../assets/default-logos/logo.svg'
import plusIcon from '../assets/default-logos/plusIcon.svg'
import experienceImg from '../assets/aboutPage-images/experienceImg.svg'
import largeFbIcon from '../assets/icons-svgs/largeFbIcon.svg'
import largeInstaIcon from '../assets/icons-svgs/largeInstaIcon.svg'
import largeXIcon from '../assets/icons-svgs/largeXIcon.svg'
import laregLinkedinIcon from '../assets/icons-svgs/largeLinkedinIcon.svg'
import WorkCard from "../components/WorkCard";
import chessKing from '../assets/aboutPage-images/chessKing.svg'
import { useState } from "react";
import businessMan from '../assets/aboutPage-images/businessMan.svg'
import Slider from "../components/Slider";
import SpotlightCard from "../components/SpotlightCard";
import HeadingCard from "../components/HeadingCard";
import large3 from '../assets/aboutPage-images/large3.svg'
import chooseUsLogo1 from '../assets/aboutPage-images/chooseUsLogo1.svg'
import chooseUsLogo2 from '../assets/aboutPage-images/chooseUsLogo2.svg'
import chooseUsLogo3 from '../assets/aboutPage-images/chooseUsLogo3.svg'
export default function About(){
    const [checked,setChecked]=useState(false)
    console.log(checked)
    return(
        <Layout>
            <section className="flex overflow-hidden flex-col gap-20 ">
                    {/* <section className="flex flex-col lg:flex-row">
                            <div className="animate-fade-in text-center">
                                About
                            </div>
                            <img src={teamImg} alt="" />
                    </section> */}
                    <SpotlightCard
                        title="About"
                        margins='mx-14 md:mx-[33%]'
                        description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                        image={<img src={teamImg} className="w-auto  md:w-96 xl:w-auto" alt="" />}
                    />
                    <section className="flex flex-col justify-center items-center lg:justify-normal  lg:flex-row gap-10 xl:gap-20">
                            <div className="flex flex-col  lg:w-[80%] xl:w-[50%]">
                                <div className="flex gap-3 items-center">
                                    <div className="text-2xl font-bold">
                                        About Us
                                    </div>
                                    <img src={logo} alt="" />
                                </div>
                               <div className="flex flex-col  gap-10 lg:gap-2 xl:gap-12">
                               <div className="text-sm text-justify text-[#252525]">
                                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </div>
                                <div className="flex gap-20">
                                    <div>
                                        <div className="font-bold flex gap-2 text-3xl">
                                            <img src={plusIcon} alt="" />
                                            100
                                        </div>
                                        <span className="font-semibold text-primaryColor">Projects</span>
                                    </div>
                                    <div>
                                        <div className="font-bold flex gap-2 text-3xl">
                                        <img src={plusIcon} alt="" />
                                            100
                                        </div>
                                        <span className="font-semibold text-primaryColor">Client</span>
                                    </div>
                                    
                                </div>
                                <div>
                                    <button className="rounded-sm bg-primaryColor p-4 px-8 text-white text-sm font-poppinsLight">
                                        Menu Item
                                    </button>
                                </div>
                               </div>
                            </div>
                            <div>
                                <img src={experienceImg} alt="" />
                            </div>
                    </section>
                    <section className="flex flex-col gap-9">
                        <div className="flex flex-col gap-5">
                            <h2 className="text-3xl capitalize font-bold text-center">
                                how we work
                            </h2>
                            <p className="text-center text-[#252525] text-sm lg:mx-[20%] capitalize">
                            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6 lg:flex-row">
                            <WorkCard img={<img src={chessKing} />} 
                            title='how we work'
                            description='Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora '
                            />
                            <WorkCard img={<img src={chessKing} />} 
                            title='how we work'
                            description='Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora '
                            />
                            <WorkCard img={<img src={chessKing} />} 
                            title='how we work'
                            description='Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora '
                            />
                        </div>
                    </section>
                    <section className="lg:mt-[170px]">
                        <div className="grid grid-cols-12 mb-5">
                            <div className="col-span-6"></div>
                        <div className="flex flex-col md:gap-1 lg:gap-3 col-span-6">
                        <div className="flex gap-2">
                            <img className="lg:w-auto w-6 md:w-10" src={large3} alt="" />
                            <div className="flex flex-col md:gap-2">
                                <div className="lg:text-2xl md:text-md capitalize text-sm font-semibold drop-shadow-md text-[#656565]">reasons</div>
                                <div className=" lg:text-4xl md:text-xl text-sm font-h2-tag-heading uppercase drop-shadow-md">to choose</div>
                            </div>
                        </div>
                        <div className="md:text-[10px] text-[7px] md:w-[75%] w-[95%] text-[#252525]">
                        Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora 
                        </div>
                        </div>
                        </div>
                     
                            <div className="relative" id="chooseUsDiv">
                            <img className="absolute -bottom-3  left-0 lg:left-0 md:-bottom-20 w-56 md:w-96 lg:w-auto " src={businessMan} alt="" />
                            <div className="grid grid-cols-12 text-white">
                                <div className="col-span-6"></div>
                                <div className="col-span-6 flex flex-col gap-4 md:gap-0 justify-around h-[200px] md:h-[320px] xl:h-[400px]">
                                <div className=" flex md:gap-8">
                                       <img className="md:w-auto w-5" src={chooseUsLogo1} alt="" />
                                       <div className="flex flex-col md:text-base xl:gap-3">
                                        <div className="xl:text-2xl text-[9px] md:text-xs  font-semibold capitalize">
                                        adjustable strategies
                                        </div>
                                        <div className="xl:text-xs text-[6px] md:text-[9px] lg:w-[75%]">
                                        Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora 
                                        </div>
                                       </div>
                                </div>
                                <div className=" flex md:gap-8">
                                       <img className="md:w-auto w-5" src={chooseUsLogo2} alt="" />
                                       <div className="flex flex-col md:text-base xl:gap-3">
                                        <div className="xl:text-2xl text-[9px] md:text-xs  font-semibold capitalize">
                                        adjustable strategies
                                        </div>
                                        <div className="xl:text-xs text-[6px] md:text-[9px] lg:w-[75%]">
                                        Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora 
                                        </div> 
                                       </div>
                                </div>
                                <div className=" flex md:gap-8">
                                       <img className="md:w-auto w-5" src={chooseUsLogo3} alt="" />
                                       <div className="flex flex-col  md:text-base xl:gap-3">
                                        <div className="xl:text-2xl text-[9px] md:text-xs   font-semibold capitalize">
                                        adjustable strategies
                                        </div>
                                        <div className="xl:text-xs text-[6px] md:text-[9px] lg:w-[75%]">
                                        Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora 
                                        </div>
                                       </div>
                                </div>
                                </div>
                                
                            </div>

                            </div>
                            <div className="grid grid-cols-12">
                                <div className="col-span-6"></div>
                            <button className="col-span-6 text-primaryColor text-sm border-2 py-1 px-4 w-fit border-primaryColor rounded-sm mt-2 font-semibold lg:text-md">Contact Us</button>
                            </div>
                    </section>
                    <section className="flex flex-col gap-9">
                    <HeadingCard
                    title='our team'
                    description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                    />
                                     
                                     <Slider/>
                    </section>
                 
                    <section id='aboutpageBg' className="flex flex-col md:flex-row gap-20 justify-center  items-center">
                        <div className="flex flex-col md:gap-3 text-center mx-2 md:mx-0 md:w-[50%]">
                            <h2 className="font-bold text-center text-2xl text-primaryColor capitalize">find us online</h2>
                            <p className="text-sm">Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        </div>
                        <div className="flex space-x-6">
                            <img className='xl:w-auto w-12' src={largeXIcon} alt="" />
                            <img className='xl:w-auto w-12' src={largeFbIcon} alt="" />
                            <img className='xl:w-auto w-12' src={largeInstaIcon} alt="" />
                            <img className='xl:w-auto w-12' src={laregLinkedinIcon} alt="" />
                        </div>
                    </section>

             
                   
            </section>
        </Layout>
    )
}