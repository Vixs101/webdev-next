import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/footer';
import DownloadApp from '@/components/downloadApp';
import Faq from '@/components/faqs';
import Agent from '@/components/agent';
import GettingStarted from '@/components/gettingStarted';
import Services from '@/components/services';
import Review from '@/components/review';
import Image from 'next/image';
import logo from '../public/images/logo.png';
import google from '../public/images/googleplay.png';
import apple from '../public/images/applestore.png';
import phones from '../public/images/phones.png';



export default function Home() {
  return (
    <main className='h-screen relative overflow-x-hidden'>
      {/* hero section */}
      <section className='flex flex-col gap-7 md:gap-0 md:justify-between px-5 md:px-14  w-full md:h-99 bg-cover bg-center' style={{backgroundImage:"url(/images/herosection.png)"}}>
      {/* nav bar */}
      <nav className='pt-9 flex md:items-center md:justify-between '>
      <div className='flex items-center justify-between w-full md:w-8'>
          <span className='cursor-pointer'>
            <Image 
              src={logo} 
              alt='Logo'
            />
          </span>
          <FontAwesomeIcon icon={faBars} className='w-7 h-7 text-white md:hidden' />
        </div>

        {/* navs */}  
        {/* i was supposed to use js to make the links appear onclick but i had issues with importing it which is part of the main reasons why i didn't breakdown the page into componenst cos when i tried importing i get an issue about client and server rendering.
        same thing with the fag section*/}
        <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 
        md:w-auto md:opacity-100 opacity-0 top-[-400px] transition-all ease-out duration-700 md:text-sm lg:text-lg'>

          <li className='mx-4 my-5 md:my-0 text-white font-semibold hover:border-b-2 hover:border-white'>
            <a href="http://" target="" rel="noopener noreferrer">
              Home</a>
          </li>
          <li className='mx-4 my-5 md:my-0 text-white font-semibold hover:border-b-2 hover:border-white'>
            <a href="#services">
              Our Services
              </a>
          </li>
          <li className='mx-4 my-5 md:my-0 text-white font-semibold hover:border-b-2 hover:border-white'>
            <a href="#agent">
              Become An Agent
              </a>
          </li>
          <li className='mx-4 my-5 md:my-0 text-white font-semibold hover:border-b-2 hover:border-white'>
            <a href="#faq">
              FAQ
              </a>
          </li>
          <li className='mx-4 my-5 md:my-0 text-white font-semibold hover:border-b-2 hover:border-white'>
            <a href="#contact">
              Contact Us
              </a>
          </li>
        </ul>

        <div className='hidden md:flex px-7 py-3 items-center justify-between bg-white w-52 duration-500  rounded-lg blue1 font-semibold'>
          <button>
            Download App 
          </button>
          <FontAwesomeIcon icon={faArrowRight} className='w-5 h-5' />        
        </div>
      </nav>
      {/* hero text and image */}

      <div className='flex flex-col items-center md:items-start md:flex-row md:justify-between gap-4 md:gap-28 md:mt-24 '
           style={{height: '69.886%'}}>
        {/* hero text */}
        <div className='text-white text-center md:text-left md:mt-10 leading-6'>
          <h1 className='text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold '>
            Manage and Pay Your Bills, All From One Place!
          </h1>
          <p className='md:leading-6 text-xs md:text-sm lg:text-base mt-3 md:mt-0'>
            Your Trusted VTU and Bill Payment Platform for Quick & Seamless Transactions. Anywhere, Anytime!
          </p>

          <div className='flex justify-center md:justify-normal gap-3 md:gap-7 md:mt-10 mt-3'>
            <Image 
              className=' w-1/3 h-10 md:w-36 md:h-12'
              src={google} 
              alt='google playstore'
            />
            <Image 
              className='w-1/3 h-10 md:w-36 md:h-12'
              src={apple} 
              alt='apple store'
            />
          </div>
        </div>
        {/* hero image */}
        <Image 
              className=' h-44 w-44  md:h-full md:w-1/2 '
              src={phones} 
              alt='phones'
            />
      </div>
      </section>

      {/* review section */}
      <Review />  
      < Services /> 
      <GettingStarted />
      <Agent />
      <Faq />
      <DownloadApp />
      <Footer />
    </main>
  )
}
