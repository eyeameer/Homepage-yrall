
import phoneIcon from '../assets/icons-svgs/phoneIcon.svg'
import mailIcon from '../assets/icons-svgs/emailicon.svg'
import locationIcon from '../assets/icons-svgs/locationIcon.svg'
import xIcon from '../assets/icons-svgs/xIcon.svg'
import globe from '../assets/icons-svgs/globeIcon.svg'
import facebookIcon from '../assets/icons-svgs/facebookIcon.svg'
import instagramIcon from '../assets/icons-svgs/instagramIcon.svg'
import linkedInIcon from '../assets/icons-svgs/linkedInIcon.svg'
export default function Footer(){
    return(
        <footer>
                <div className="flex overflow-hidden flex-col  items-center justify-center gap-[10px] lg:px-[10px] py-0 relative bg-[#03989e]">
      <div className="flex flex-col lg:flex-row lg:w-[1152px] gap-3 items-start justify-between px-5 lg:px-[20px] py-[40px] relative flex-[0_0_auto]">
        <div className="flex flex-col lg:w-[412px] items-start justify-center gap-[15px] relative">
          <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[24px] text-center tracking-[0] leading-[normal]">
              About Yraal
            </div>
            {/* <Logo className="!h-[35.9px]" shape="image.png" shapeClassName="!mix-blend-multiply" /> */}
          </div>
          <div className="flex flex-col items-start justify-center gap-[20px] relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffffcc] text-xs lg:text-[16px] tracking-[0] leading-[normal]">
              Jorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero Et Velit&nbsp;&nbsp;Per
              Conubia Nostra, Per Inceptos Himenaeos.
            </p>
          </div>
        </div>
        <div className="inline-flex flex-col items-start gap-[20px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[24px] text-center tracking-[0] leading-[normal]">
            Useful Links
          </div>
          <div className="inline-flex  lg:flex-col lg:items-start gap-[10px] relative flex-[0_0_auto]">
            <a className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffffcc] text-[16px] text-center tracking-[0] leading-[normal]">
              Google
            </a>
            <a className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffffcc] text-[16px] text-center tracking-[0] leading-[normal]">
              Linkedin
            </a>
            <a className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffffcc] text-[16px] text-center tracking-[0] leading-[normal]">
              Dribbble
            </a>
          </div>
        </div>
        <div className="inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[24px] text-center tracking-[0] leading-[normal]">
            Contact Information
          </div>
          <div className="flex flex-col items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
              <img className="relative w-[24px] h-[24px]" alt="Email svgrepo com" src={mailIcon} />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffffcc] text-[16px] text-center tracking-[0] leading-[normal]">
                Example@suppourt.com
              </div>
            </div>
            <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
              <img className="relative w-[24px] h-[24px]" alt="Globe svgrepo com" src={globe} />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffffcc] text-[16px] text-center tracking-[0] leading-[normal]">
                Www.yoursite.com
              </div>
            </div>
            <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
              <img className="relative w-[24px] h-[24px]" alt="Map point svgrepo" src={locationIcon} />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffffcc] text-[16px] text-center tracking-[0] leading-[normal]">
                Madhapur ,telangana,500081
              </div>
            </div>
            <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
              <img className="relative w-[24px] h-[24px]" alt="Phone svgrepo com" src={phoneIcon} />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffffcc] text-[16px] text-center tracking-[0] leading-[normal]">
                +91 9876543210
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </footer>
    )
}