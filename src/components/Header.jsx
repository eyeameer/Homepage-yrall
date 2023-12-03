import locationIcon from '../assets/icons-svgs/locationIcon.svg'
import phoneIcon from '../assets/icons-svgs/phoneIcon.svg'
import mailIcon from '../assets/icons-svgs/emailIcon.svg'
import xIcon from '../assets/icons-svgs/xIcon.svg'
import facebookIcon from '../assets/icons-svgs/facebookIcon.svg'
import instagramIcon from '../assets/icons-svgs/instagramIcon.svg'
import linkedInIcon from '../assets/icons-svgs/linkedinIcon.svg'
import logo from '../assets/default-logos/logo.svg'
import { Link,useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BsX, BsTelephoneFill, BsList } from "react-icons/bs";
import menuIcon from '../assets/default-logos/menuIcon.svg'
export default function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation().pathname
   
    const toggleMobileNav = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia("(max-width: 900px)").matches);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <header className=' shadow-bottom mr-0'>
            {
                isMobile ?
                    <div className='p-5 w-full shadow-bottom bg-white !z-[200] fixed flex justify-between items-center'>
                        <Link to='/' className=''>
                            <img src={logo} width={55} alt="" />
                        </Link>
                        <nav
                            id='menuBgImg'
                            className={`${isOpen ? "translate-x-0" : "-translate-x-full"
                                } absolute !z-[80]  flex justify-center border-y-primaryColor border-r-primaryColor border-4 borderl-none rounded-r-3xl top-0 left-0 min-h-screen w-64 bg-white text-primaryColor  transform transition duration-200 ease-in-out`}
                        >
                            <div className=" w-full flex flex-col space-y-12 ">
                                <Link to='/' className="pt-12 ml-2 w-full flex gap-4 justify-center items-center ">
                                    <img className='bg-' src={logo} width={45} alt="" />
                                </Link>
                                <ul className="flex space-y-8 mr-auto flex-col pl-9 w-full ">
                                    
                                        <div className="block p-2 flex gap-6 justify-center  items-center rounded-md hover:bg-gray-700">
                                                    
                                            <Link className={`${location==='/'?'text-white bg-primaryColor p-3 rounded-md':''}`} to="/">Home</Link>
                                        </div>
                                 
       
                                        <div className="block p-2 flex gap-6 justify-center items-center rounded-md hover:bg-gray-700">
                                 
                                            <Link className={`${location==='/about'?'text-white bg-primaryColor p-3 rounded-md':''}`} to="/about">About</Link>
                                        </div>
                                    

                                        <div className="block p-2 flex gap-6 justify-center items-center rounded-md hover:bg-gray-700">
                                         
                                            <Link className={`${location==='/services'?'text-white bg-primaryColor p-3 rounded-md':''}`} to="/services">Services</Link>
                                        </div>
   
          
                                        <div className="block p-2 flex gap-6 justify-center items-center rounded-md hover:bg-gray-700">
                                        
                                            <Link className={`${location==='/portfolio'?'text-white bg-primaryColor p-3 rounded-md':''}`} to="/portfolio">Portfolio</Link>
                                        </div>
                                   
                                    <li className={`${location === '/contact-us' ? 'bg-[#1E0552] rounded-full' : ''}`}

                                    >
                                        <div className="block p-2 flex gap-6 justify-center items-center rounded-md hover:bg-gray-700">
                                          
                                            <Link className={`${location==='/blogs'?'text-white bg-primaryColor p-3 rounded-md':''}`} to="/blogs">Blogs</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <button
                                onClick={toggleMobileNav}
                                className="absolute bottom-20 text-black text-primaryColor text-3xl right-6"
                            >
                                <BsX />
                            </button>
                        </nav>
                        {!isOpen ? <button
                            className="text-white  rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >

                            <img src={menuIcon} className="h-6 w-6" aria-hidden="true" />

                        </button> :
                            <button

                                onClick={toggleMobileNav}
                            //   className="absolute bottom-8 text-3xl right-6"
                            >
                                <BsX className="h-10 w-10 text-primaryColor font-bold" aria-hidden="true" />
                            </button>}
                    </div>
                    :

                    <div className="flex flex-col">
                        <div className="bg-[#03989E] py-1 lg:px-[100px] xl:px-[200px] flex justify-between">
                            <div className='flex gap-5 text-[#ffffffcc]  text-xs '>
                                <div className='flex justify-center items-center gap-2 capitalize '>
                                    <img className='' src={locationIcon} alt="" />
                                    <div className=''>madhapur ,telangana ,500081</div>
                                </div>
                                <div className='flex justify-center items-center gap-2 '>
                                    <img className='' src={mailIcon} alt="" />
                                    <div className=''>example@suppourt.com</div>
                                </div>
                                <div className='flex justify-center items-center gap-2 '>
                                    <img className='' src={phoneIcon} alt="" />
                                    <div className=''>+919876543210</div>
                                </div>

                            </div>
                            <div className='flex justify-center items-center gap-4'>
                                <a href="#">
                                    <img src={xIcon} alt="" />
                                </a>
                                <a href="#">
                                    <img src={facebookIcon} alt="" />
                                </a>
                                <a href="#">
                                    <img src={instagramIcon} alt="" />
                                </a>
                                <a href="#">
                                    <img src={linkedInIcon} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className='xl:px-[200px] lg:px-[100px]  pt-8 pb-3 flex justify-between items-center'>
                            <Link to='/' className=''>
                                <img src={logo} alt="" />
                            </Link>
                            <nav className='flex gap-8'>
                                <Link className={`${location==='/'?'text-primaryColor':""}  text-[18px]`} to='/'>Home</Link>
                                <Link className={`${location==='/about'?'text-primaryColor':""} text-[18px]`} to='/about'>About</Link>
                                <Link className={`${location==='/services'?'text-primaryColor':""} text-[18px]`} to='/services'>Services</Link>
                                <Link className={`${location==='/portfolio'?'text-primaryColor':""} text-[18px]`} to='/portfolio'>Portfolio</Link>
                                <Link className={`${location==='/blogs'?'text-primaryColor':""} text-[18px]`} to='/blogs'>Blogs</Link>
                            </nav>
                        </div>
                    </div>
            }
        </header>
    )
}