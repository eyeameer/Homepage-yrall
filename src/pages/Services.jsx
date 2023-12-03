import Layout from "../components/Layout";
import SpotlightCard from "../components/SpotlightCard";
import servicesHomeImg from '../assets/servicespage-images/servicesHomeImg.svg'
import HeadingCard from "../components/HeadingCard";
import uiDesignService from '../assets/servicespage-images/uiDesignService.svg'
import ServicesCard from "../components/ServicesCard";
import backendService from '../assets/servicespage-images/backendService.svg'
import digitalMarketingService from '../assets/servicespage-images/digitalMarketingService.svg'
import frontendService from '../assets/servicespage-images/frontendService.svg'
import graphicDesignService from '../assets/servicespage-images/graphicDesignService.svg'
import influencerMarketingService from '../assets/servicespage-images/influencerMarketingService.svg'
import BenefitsCard from "../components/BenefitsCard";
import oneImg from '../assets/servicespage-images/01.svg'
import twoImg from '../assets/servicespage-images/02.svg'
import threeImg from '../assets/servicespage-images/03.svg'
import fourImg from '../assets/servicespage-images/04.svg'
import fiveImg from '../assets/servicespage-images/05.svg'
import sixImg from '../assets/servicespage-images/06.svg'
import CustomersComponent from "../components/CustomersComponent";
import CustomerForm from "../components/CustomerForm";
export default function Services(){
    return(
        <Layout>
             <section className="flex overflow-hidden flex-col gap-20">
                <SpotlightCard
                title="Services"
                margins='mx-3 md:mx-[30%]'
                description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                image={<img className="w-auto md:w-96 xl:w-auto" src={servicesHomeImg} alt="" />}
                />
                        <section className=" overflow-hidden lg:mx-auto lg:mt-auto flex flex-col lg:inline-flex lg:flex-col lg:items-center lg:gap-[40px] lg:relative">

                        <HeadingCard 
                title='service we provide'
                description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                />
                <ServicesCard
                position="left"
                title='uI uX design'
                description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                image={<img className="lg:w-auto w-[280px]" src={uiDesignService} alt="" />}
                />
                <ServicesCard
                position="right"
                title='frontend'
                description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                image={<img className="lg:w-auto w-[280px]" src={frontendService} alt="" />}
                />
                <ServicesCard
                position="left"
                title='backend'
                description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                image={<img className="lg:w-auto w-[280px]" src={backendService} alt="" />}
                />
                <ServicesCard
                position="right"
                title='graphic designing'
                description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                image={<img className="lg:w-auto w-[280px]" src={graphicDesignService} alt="" />}
                />
                <ServicesCard
                position="left"
                title='digital marketing'
                description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                image={<img className="lg:w-auto w-[280px]" src={digitalMarketingService} alt="" />}
                />
                <ServicesCard
                position="right"
                title='influencer marketing'
                description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.vulputate libero et velit interdum, ac aliquet odio mattis.Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                image={<img className="lg:w-auto w-[280px]" src={influencerMarketingService} alt="" />}
                />
                        </section>
                        <section className=" overflow-hidden lg:mx-auto lg:mt-auto flex flex-col lg:inline-flex lg:flex-col lg:items-center lg:gap-[40px] lg:relative">
                            <HeadingCard title='benefits of work with us'
                            description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                            />
                            <div className="grid grid-cols-12 gap-4">
                                    <BenefitsCard
                                        numberImg={<img src={oneImg}/>}
                                        title='High Quality'
                                        description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                                    />
                                    <BenefitsCard
                                        numberImg={<img src={twoImg}/>}
                                        title='Creative Team'
                                        description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                                    />
                                    <BenefitsCard
                                        numberImg={<img src={threeImg}/>}
                                        title='Amazing Result'
                                        description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                                    />
                                    <BenefitsCard
                                        numberImg={<img src={fourImg}/>}
                                        title='Best Price'
                                        description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                                    />
                                    <BenefitsCard
                                        numberImg={<img src={fiveImg}/>}
                                        title='Innovation'
                                        description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                                    />
                                    <BenefitsCard
                                        numberImg={<img src={sixImg}/>}
                                        title='27/7 support'
                                        description='Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
                                    />
                            </div>
                            </section>
                            <CustomersComponent/>
                            <CustomerForm/>
             </section>
        </Layout>
    )
}