import Layout from "../components/Layout";
import logo from '../assets/default-logos/logo.svg'
import businessProblem from '../assets/homepage-images/businessProblem.svg'
import digitalMarketing from '../assets/homepage-images/digitalMarketing.svg'
import digitalMarketing_2 from '../assets/homepage-images/digitalMarketing_2.svg'
import logoImage from '../assets/homepage-images/logoImage.svg'
import learMoreIcon from '../assets/icons-svgs/learnMoreArrow.svg'
import longArrow from '../assets/homepage-images/longArrow.svg'
import CustomerForm from "../components/CustomerForm";
import CustomersComponent from "../components/CustomersComponent";
// import 'pretty-checkbox/dist/pretty-checkbox.min.css';
// import { CheckboxComp } from "../components/CheckboxComp";
export default function HomePage(){
    const inputStyle='bg-primaryColor lg:w-[280px] w-full border-white border-2 py-4 lg:py-2 px-2 w-[250px] rounded-md placeholder:text-white placeholder:lg:text-xs placeholder:text-md'

    return(
        <Layout>
            <section className="flex overflow-clip flex-col gap-20">
            <section className="flex flex-col text-center gap-12 lg:text-left lg:flex lg:flex-row lg:gap-10">
                <div className="flex flex-col gap-5 mx-5">
                    <div className="text-4xl xl:text-[46px] xl:leading-[70px] capitalize [font-family:'Poppins-SemiBold',Helvetica] font-semibold ">
                    Unlocking   <img className="text float-none inline-block" src={logo} alt="" />  our Service  Where Excellence Meets <span className="text-primaryColor">Expertise</span>
                    </div>
                    <div className="lg:w-[72%] text-[18px] lg:text-left text-center md w-full text-[#252525] capitalize">
                    Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </div>
                    <div>
                    <button className="bg-primaryColor px-9 py-[5%] md:py-[2%] text-md lg:py-[2%] rounded-md text-[16px] capitalize text-white">
                        get a quote
                    </button>
                    </div>
                </div>
                <div className="bg-primaryColor rounded-md px-4 py-4 lg:p-8 mx-2 md:mx-[20%] lg:mx-auto  text-white flex gap-6 items-center justify-center flex-col">
                    <div className="text-[34px] tracking-wide lg:tracking-normal lg:text-2xl [font-family:'Poppins-Bold',Helvetica] font-bold">Get In Touch</div>
                    <div className="lg:mx-auto text-center whitespace-break-spaces text-[16px] capitalize lg:text-[12px] font-poppinsLight">Horem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <input placeholder="Your Name" className={inputStyle} type="text"/>
                    <input placeholder="Your Email" className={inputStyle} type="text" />
                    <input placeholder="Phone Number" className={inputStyle} type="text" />
                    <button className="bg-white text-primaryColor py-[2%] mb-3 lg:mb-auto lg:py-[3%] lg:w-auto text-xl lg:text-base lg:text-normal w-full font-semibold px-6 rounded-[4px] ">Submit</button>
                </div>
            </section>
            
            <section className="flex flex-col  gap-10 mx-3 ">

        <div className="inline-flex  flex-col md:items-center lg:flex-row justify-center items-center mx-auto lg:relative lg:flex-[0_0_auto]">
          <img
            className="relative    border-primaryColor w-[496px] lg:w-[350px] xl:w-[496px] h-[547px] lg:h-[400px] xl:h-[547px] mt-[-5.00px] mb-[-5.00px] ml-[-5.00px] object-cover"
            alt="Rectangle"
            src={businessProblem}
          />
          <div className="-mt-[90px] mx-auto md:mx-[110px] lg:mx-auto -ml-1 lg:mt-0 inline-flex flex-col items-start gap-[10px]  p-[20px] relative flex-[0_0_auto] lg:ml-[-70px] bg-[#03989e] rounded-[5px]">
            <p className="relative xl:text-left text-center mx-10 lg:mx-auto xl:w-[405px]  lg:mt-[-1.00px] lg:text-xl xl:font-h2 font-[number:var(--h2-font-weight)] text-white text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
              We Help And Solve Your Business Problem.
            </p>
            <p className="xl:w-[414px] lg:w-[300px] text-center lg:text-left mx-2 xl:mx-auto [font-family:'Poppins-Regular',Helvetica] font-normal text-white relative text-[16px] lg:text-[16px] xl:text-[16px] leading-[25px] tracking-wider lg:tracking-[0] lg:leading-[20.0px]">
              Torem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.torem Ipsum Dolor Sit Amet, Consectetur Adipiscing
              Elit.torem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.torem Ipsum Dolor Sit Amet, Consectetur
              Adipiscing Elit.
            </p>
          </div>
        </div>
        {/* <div className="flex  flex-wrap xl:w-[1150px] items-center justify-center xxl:items-start xl:justify-between gap-[24px_24px] relative flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Oswald-Bold',Helvetica] font-bold text-[#ffdcd899]  text-[176px] tracking-[0] leading-[219.5px] whitespace-nowrap">
              01
            </div>
            <p className="w-[257px] ml-[-97px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#252525] relative text-[16px] tracking-[0] leading-[20.0px]">
              Torem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.torem Ipsum Dolor Sit Amet,
            </p>
          </div>
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="text-[#dec2ff99] relative w-fit mt-[-1.00px] [font-family:'Oswald-Bold',Helvetica] font-bold text-[176px] tracking-[0] leading-[219.5px] whitespace-nowrap">
              02
            </div>
            <p className="relative w-[257px] ml-[-122px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#252525] text-[16px] tracking-[0] leading-[20.0px]">
              Torem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.torem Ipsum Dolor Sit Amet,
            </p>
          </div>
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="text-[#b0eff299] relative w-fit mt-[-1.00px] [font-family:'Oswald-Bold',Helvetica] font-bold text-[176px] tracking-[0] leading-[219.5px] whitespace-nowrap">
              03
            </div>
            <p className="relative w-[257px] ml-[-122px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#252525] text-[16px] tracking-[0] leading-[20.0px]">
              Torem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.torem Ipsum Dolor Sit Amet,
            </p>
          </div>
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Oswald-Bold',Helvetica] font-bold text-[#ffdcd899] text-[176px] tracking-[0] leading-[219.5px] whitespace-nowrap">
              04
            </div>
            <p className="w-[257px] ml-[-98px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#252525] relative text-[16px] tracking-[0] leading-[20.0px]">
              Torem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.torem Ipsum Dolor Sit Amet,
            </p>
          </div>
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="text-[#dec2ff99] relative w-fit mt-[-1.00px] [font-family:'Oswald-Bold',Helvetica] font-bold text-[176px] tracking-[0] leading-[219.5px] whitespace-nowrap">
              05
            </div>
            <p className="relative w-[257px] ml-[-122px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#252525] text-[16px] tracking-[0] leading-[20.0px]">
              Torem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.torem Ipsum Dolor Sit Amet,
            </p>
          </div>
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="text-[#b0eff299] relative w-fit mt-[-1.00px] [font-family:'Oswald-Bold',Helvetica] font-bold text-[176px] tracking-[0] leading-[219.5px] whitespace-nowrap">
              06
            </div>
            <p className="relative w-[257px] ml-[-122px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#252525] text-[16px] tracking-[0] leading-[20.0px]">
              Torem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.torem Ipsum Dolor Sit Amet,
            </p>
          </div>
        </div> */}

 
    <div className="grid grid-cols-12  gap-[60px] sm:gap-[62px]  xl:gap-[80px]">
          <div className="xl:col-span-4  items-center  sm:col-span-6 col-span-12 relative">
            <div className=" w-fit mt-[-1.00px] [font-family:'Oswald-Bold',Helvetica] font-bold text-[#ffdcd899]  text-[176px] tracking-[0] leading-[219.5px] whitespace-nowrap">01</div>
            <p className="absolute text-sm top-20 left-20 w-[230px]">
            Torem ipsum dolor sit amet, consectetur adipiscing elit.Torem ipsum dolor sit amet, 
            </p>
          </div>
          <div className="xl:col-span-4 sm:col-span-6 col-span-12 relative">
            <div className=" text-[#dec2ff99] relative w-fit mt-[-1.00px] [font-family:'Oswald-Bold',Helvetica] font-bold text-[176px] tracking-[0] leading-[219.5px] whitespace-nowrap">02</div>
            <p className="absolute text-sm top-20 left-20 w-[230px]">
            Torem ipsum dolor sit amet, consectetur adipiscing elit.Torem ipsum dolor sit amet, 
            </p>
          </div>
          <div className="xl:col-span-4 sm:col-span-6 col-span-12 relative">
            <div className=" w-fit mt-[-1.00px] [font-family:'Oswald-Bold',Helvetica] font-bold text-[#b0eff299]  text-[176px] tracking-[0] leading-[219.5px] whitespace-nowrap">03</div>
            <p className="absolute text-sm top-20 left-20 w-[230px]">
            Torem ipsum dolor sit amet, consectetur adipiscing elit.Torem ipsum dolor sit amet, 
            </p>
          </div>
          
          <div className="xl:col-span-4 sm:col-span-6 col-span-12 relative">
            <div className=" w-fit mt-[-1.00px] [font-family:'Oswald-Bold',Helvetica] font-bold text-[#ffdcd899]  text-[176px] tracking-[0] leading-[219.5px] whitespace-nowrap">04</div>
            <p className="absolute text-sm top-20 left-20 w-[230px]">
            Torem ipsum dolor sit amet, consectetur adipiscing elit.Torem ipsum dolor sit amet, 
            </p>
          </div>
          <div className="xl:col-span-4 sm:col-span-6 col-span-12 relative">
            <div className=" text-[#dec2ff99] relative w-fit mt-[-1.00px] [font-family:'Oswald-Bold',Helvetica] font-bold text-[176px] tracking-[0] leading-[219.5px] whitespace-nowrap">05</div>
            <p className="absolute text-sm top-20 left-20 w-[230px]">
            Torem ipsum dolor sit amet, consectetur adipiscing elit.Torem ipsum dolor sit amet, 
            </p>
          </div>
          <div className="xl:col-span-4 sm:col-span-6 col-span-12 relative">
            <div className=" w-fit mt-[-1.00px] [font-family:'Oswald-Bold',Helvetica] font-bold text-[#b0eff299]  text-[176px] tracking-[0] leading-[219.5px] whitespace-nowrap">06</div>
            <p className="absolute text-sm top-20 left-20 w-[230px]">
            Torem ipsum dolor sit amet, consectetur adipiscing elit.Torem ipsum dolor sit amet, 
            </p>
          </div>
          
        </div>
            </section>
            
       <section className=" overflow-hidden lg:mx-auto lg:mt-auto flex flex-col lg:inline-flex lg:flex-col lg:items-center lg:gap-[40px] lg:relative">
      <div className="flex flex-col gap-4 lg:gap-0 lg:w-[644px] text-center lg:items-center lg:justify-center lg:relative">
      <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto]">
        <div className="relative capitalize w-fit mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-[#252525] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
        what is digital marketing ? 
        </div>
      </div>
      <p className="relative self-stretch font-h2-description font-[number:var(--h2-description-font-weight)] text-[#252525cc] text-[length:var(--h2-description-font-size)] text-center tracking-[var(--h2-description-letter-spacing)] leading-[var(--h2-description-line-height)] [font-style:var(--h2-description-font-style)]">
      Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
      </p>
    </div>
     
      <div className="flex flex-col lg:flex-row lg:gap-10">
      <div className="flex items-center justify-center mt-10 mb-10 lg:mt-0"><img className="lg:w-auto w-[280px]" src={digitalMarketing} alt="" /></div>
    <div className="inline-flex flex-col items-start gap-[5px] relative">
      <div className="relative hidden lg:block w-fit mt-[-1.00px] bg-[linear-gradient(180deg,rgb(37,37,37)_0%,rgb(3,152,158)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-h3 font-[number:var(--h3-font-weight)] text-transparent text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
        What Is Digital Marketing
      </div>
      <p className="relative lg:w-[469.76px] font-h2-description font-[number:var(--h2-description-font-weight)] text-[#252525] text-[length:var(--h2-description-font-size)] text-justify tracking-[var(--h2-description-letter-spacing)] leading-[var(--h2-description-line-height)] [font-style:var(--h2-description-font-style)]">
        Digital Marketing Is The Online Promotion Of Products Or Services Using Channels Like Social Media, Seo,
        Content, Email, And Advertising. It Aims To Connect With Target Audiences Through The Internet, Leveraging
        Precise Targeting And Real-time Engagement. Analytics And Data Are Crucial For Measuring And Optimizing Campaign
        Performance. Mobile Marketing, Focusing On Smartphones, Is Integral. Conversion Optimization Turns Online
        Interactions Into Actions Like Purchases. Staying Updated On Trends Is Essential In The Dynamic Digital
        Landscape. Integration With Traditional Marketing Is Common For A Comprehensive Approach. Email And Social Media
        Play Key Roles In Communication And Engagement. Digital Marketing Is Agile, Trackable, And A Vital Part Of
        Modern Business Strategies.
      </p>
    </div>
    </div>
      
      </section>
      <section className="overflow-hidden lg:mx-auto lg:mt-auto flex flex-col lg:inline-flex lg:flex-col lg:items-center gap-8 lg:gap-[40px] lg:relative">
      <div className="flex flex-col gap-3 lg:gap-0 text-center lg:w-[644px] items-center justify-center relative">
      <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto]">
        <div className="relative mx-5 capitalize leading-[50px] lg:mx-auto lg:w-fit mt-[-1.00px] font-h2 font-[number:var(--h2-font-weight)] text-[#252525] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] lg:leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
        why digital marketing is important
        </div>
      </div>
      <p className="relative self-stretch font-h2-description font-[number:var(--h2-description-font-weight)] text-[#252525cc] text-[length:var(--h2-description-font-size)] text-center tracking-[var(--h2-description-letter-spacing)] leading-[var(--h2-description-line-height)] [font-style:var(--h2-description-font-style)]">
      Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
      </p>
    </div>
      
      <div className="flex flex-col  lg:flex-row gap-20 xl:gap-20 lg:gap-10">
      <div className="flex lg:hidden items-center justify-center "><img className="lg:w-auto w-[280px]" src={digitalMarketing_2} alt="" /></div>
    <div className="inline-flex flex-col items-start  gap-[5px] relative">
      <div className="hidden lg:block relative w-fit mt-[-1.00px] capitalize bg-[linear-gradient(180deg,rgb(37,37,37)_0%,rgb(3,152,158)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-h3 font-[number:var(--h3-font-weight)] text-transparent text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
      why digital marketing is important
      </div>
      <p className="relative lg:w-[469.76px] font-h2-description font-[number:var(--h2-description-font-weight)] text-[#252525] text-[length:var(--h2-description-font-size)] text-justify tracking-[var(--h2-description-letter-spacing)] leading-[var(--h2-description-line-height)] [font-style:var(--h2-description-font-style)]">
      Digital marketing is essential for global reach, cost-effectiveness, and precise targeting. It breaks barriers, connects with a worldwide audience, and is budget-friendly. Targeting specific demographics ensures marketing resonates. Real-time analytics enable prompt, data-driven decisions. Social media and interactive content boost engagement. Online platforms operate 24/7 for constant availability. Effective digital marketing enhances brand visibility, staying top-of-mind. Personalization enriches the customer experience, fostering loyalty. Adaptability allows quick adjustments to stay relevant. It's a cornerstone for modern businesses.
      </p>
    
    </div>
    {/* <img className="hidden lg:block" src={digitalMarketing_2} alt="" /> */}
    <div className="flex items-center justify-center mt-10 mb-10 lg:mt-0"><img className="lg:w-auto w-[280px]" src={digitalMarketing_2} alt="" /></div>
      </div>
      </section> 
 
        <section className="bg-[#03989E1A] lg:bg-white py-5 lg:py-0 flex flex-col lg:flex-row gap-10 justify-center items-center">
      <div className="lg:w-[50%]">
      <div className="flex flex-col gap-4 lg:block">
        <div className="text-3xl capitalize font-bold">
          <div className="flex flex-col justify-center items-center lg:block">
          From 
          <div className="lg:hidden"><img src={longArrow} alt="" /></div>
          <span className="text-primaryColor "> clients to friends</span>
          </div>
        </div>
        <div>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
        <div className="flex gap-3 mt-5  hidden lg:block items-center">
          <div className="text-primaryColor">
            Learn More
          </div>
          <img src={learMoreIcon} alt="" />
        </div>
      </div>
      </div>
          <div className="grid grid-flow-row grid-cols-12 gap-5">
            <div className="col-span-4 hidden lg:block"></div>
            <img className="col-span-4 hidden lg:block" src={logoImage} alt="" />
            <img className="col-span-4 hidden lg:block" src={logoImage} alt="" />
            <img className="col-span-4 hidden lg:block" src={logoImage} alt="" />
            <img className="lg:col-span-4 col-span-12 " src={logoImage} alt="" />
            <div className="lg:hidden col-span-12 text-center font-extrabold text-4xl">Yrall</div>
            <img className="lg:col-span-4 col-span-12" src={logoImage} alt="" />
            <div className="lg:hidden col-span-12 text-center font-extrabold text-4xl">Yrall</div>
            <img className="lg:col-span-4 col-span-12" src={logoImage} alt="" />
            <div className="lg:hidden col-span-12 text-center font-extrabold text-4xl">Yrall</div>
            <img className="lg:col-span-4 col-span-12" src={logoImage} alt="" />
            <div className="lg:hidden col-span-12 text-center font-extrabold text-4xl">Yrall</div>
          </div>
        </section> 
      <CustomersComponent/>
        <CustomerForm/>
        </section>
        </Layout>
    )
}