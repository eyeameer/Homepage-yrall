import {useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from '../assets/aboutPage-images/sliderImg1.svg'
import sliderImg1_2 from '../assets/aboutPage-images/sliderImg1-2.svg'
import sliderImg2_2 from '../assets/aboutPage-images/sliderImg2-2.svg'
import sliderImg3_2 from '../assets/aboutPage-images/sliderImg3-2.svg'
import sliderImg4_2 from '../assets/aboutPage-images/sliderImg4-2.svg'
import sliderImg5_2 from '../assets/aboutPage-images/sliderImg5-2.svg'
import sliderArrowRight from '../assets/aboutPage-images/sliderArrowRight.svg'
import sliderArrowLeft from '../assets/aboutPage-images/sliderArrowLeft.svg'

export default function DeveloperSlider({ }) {
    const sliderRef = useRef();
    const handlePrev = () => {
        const currentSlide = sliderRef.current.innerSlider.state.currentSlide;
        const count = sliderRef.current.innerSlider.state.slideCount;
        sliderRef.current.slickGoTo((currentSlide - 1 + count) % count);
      };
    
      const handleNext = () => {
        const currentSlide = sliderRef.current.innerSlider.state.currentSlide;
        const count = sliderRef.current.innerSlider.state.slideCount;
        sliderRef.current.slickGoTo((currentSlide + 1) % count);
      };
const developerInfo=[
    {
        title:'ui uix developer',
        name:'mahesh palada',
        image:sliderImg1,
        description:'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taconsectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.',
        image2:sliderImg1_2
    },
    {
        title:'ui uix developer',
        name:'mahesh palada',
        image:sliderImg1_2,
        image2:sliderImg2_2,
        description:'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taconsectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.'
    },
    {
        title:'ui uix developer',
        name:'mahesh palada',
        image:sliderImg2_2,
        image2:sliderImg3_2,
        description:'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taconsectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.'
    },
    {
        title:'ui uix developer',
        name:'mahesh palada',
        image:sliderImg3_2,
        image2:sliderImg4_2,
        description:'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taconsectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.'
    },
    {
        title:'ui uix developer',
        name:'mahesh palada',
        image:sliderImg4_2,
        image2:sliderImg5_2,
        description:'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taconsectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.'
    },
]
  const slideSettings =  {
    // customPaging: function (i) {
    //   return (
    //     <a>
    //       <img src={currentOrderDetails?.myGig?.gigImages[i]?.url} />
    //     </a>
    //   );
    // }
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    // <div  className="">
    <Slider className="mx-8" ref={sliderRef} {...slideSettings}>
    {developerInfo.map((developer, index) => (
      <div key={index} className="flex gap-10 text-white">
        <div className="flex  gap-10 text-white">
          <div className="flex flex-col md:flex-row p-2 w-fit gap-5 bg-primaryColor rounded-3xl py-5 px-4">
            <div className="relative flex flex-col gap-1">

                <img src={developer.image} alt="" />
    
              <div className="flex justify-center items-center flex-col gap-1">
              <h2 className="text-xl capitalize font-bold">{developer.name}</h2>
              <div className=" font-medium capitalize text-sm">{developer.title}</div>
              
            </div>
            <button className="absolute -bottom-4 -left-3 ">
            <img src={sliderArrowLeft} onClick={handlePrev} alt="" />
          </button>
            <button className="absolute block md:hidden -bottom-[2.4%] -right-3">
            <img src={sliderArrowRight} onClick={handleNext}  alt="" />
          </button>
            </div>
            <div className="text-white text-justify text-sm md:w-[50%] my-auto">
              {developer.description}
            </div>
          </div>
          <div className="md:flex flex-col relative gap-2 hidden bg-primaryColor rounded-3xl py-5 px-4">
            <img className="w-80" src={developer.image2} alt="" />
            <div className="flex justify-center items-center flex-col gap-q">
              <h2 className="text-xl capitalize font-bold">{developer.name}</h2>
              <div className=" font-medium capitalize text-[17px]">{developer.title}</div>
            </div>
            <button onClick={handleNext} className="absolute bottom-2 right-2 ">
            <img src={sliderArrowRight} alt="" />
          </button>
          </div>
          
        </div>
      </div>
    ))}
  </Slider>
    //  </div>
  );
}
