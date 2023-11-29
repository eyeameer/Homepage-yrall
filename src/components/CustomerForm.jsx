import formImage from '../assets/homepage-images/formImage.svg'
import Checkbox  from "@/components/ui/checkbox"
import CheckboxComp from './CheckboxComp';
export default function CustomerForm(){
    const customerInput='bg-primaryColor border border-white rounded-md py-[2.8%] px-2'
    const checkBoxStyle=''
    return(
        <section className="flex flex-col font-poppinsLight gap-10 items-center justify-center">
        <div className="text-center flex flex-col gap-5">
          <div className="capitalize text-3xl [font-family:'Poppins-SemiBold',Helvetica] font-bold">
          get a quote
          </div>
          <div className="text-[#252525CC] lg:w-[710px] capitalize">
          Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <img className='lg:w-auto' src={formImage} alt="" />
          <form className="bg-primaryColor text-white grid grid-flow-row grid-cols-12 gap-3 px-6 py-[3%]">
             <div className="col-span-6"> 
             <div className="flex flex-col">
                Name
              <input className={customerInput} type="text" />
              </div>
             </div>
             <div className="col-span-6"> 
             <div className="flex flex-col">
                Email
              <input className={customerInput} type="text" />
              </div>
             </div>
             <div className="col-span-6"> 
             <div className="flex flex-col">
                Phone Number
              <input className={customerInput} type="text" />
              </div>
             </div>
             <div className="col-span-6"> 
             <div className="flex flex-col">
                City
              <input className={customerInput} type="text" />
              </div>
             </div>
             <div className="col-span-6"> 
             <div className="flex flex-col">
                Project budget
              <select className='bg-primaryColor border border-white rounded-md py-[2.8%] px-2' type="text" >
                <option value="aaaa">100$-200$</option>
              </select>
              </div>
             </div>
             <div className="col-span-6"> 
             <div className="flex flex-col">
                Project Time Frame
                <select className='bg-primaryColor border border-white rounded-md py-[2.8%] px-2' type="text" >
                <option value="aaaa">2-4 Weeks</option>
                </select>
              </div>
             </div>
             <CheckboxComp/>
              <div className="col-span-12 flex flex-col lg:flex-row gap-5 mb-2 mx:-mb-5 items-center">
                  <div id='gradient-bg-div' className="px-2 py-1 flex justify-center items-center gap-2  rounded-full text-sm">

                    <Checkbox  className='border-2 border-white rounded-sm'/>
                   <span> Get 5% Discount</span>
                  </div>
                  <div>
                    <button className="lg:px-20 px-5 py-[2.5%] font-semibold text-lg lg:text-xl tracking-wider rounded-md bg-white text-primaryColor">Grow Your Bossiness</button>
                  </div>
              </div>
          </form>
        </div>
</section>
    )
}