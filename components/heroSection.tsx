'use client'
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import React from "react";
import Image from 'next/image';
import logo from '../public/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import google from '../public/images/googleplay.png';
import apple from '../public/images/applestore.png';
import phones from '../public/images/phones.png';
import Menu from './menu';

const HeroSection = () => {    
      const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };
    
      useEffect(() => {
        // Add a delay before starting the animation
        const delayTimeout = setTimeout(() => {
        }, 30);
    
        // Clear the timeout to avoid memory leaks
        return () => clearTimeout(delayTimeout);
      }, []);

    return (
        <section className='flex flex-col gap-7 md:gap-0 md:justify-between md:px-14 w-full md:h-99 bg-cover bg-center' style={{backgroundImage:"url(/images/herosection.png)"}}>
            {/* nav bar */}
            <nav className='py-2 md:py-5 px-5 md:px-0 blue2 md:bg-transparent w-full z-10 md:z-0 fixed md:static flex md:items-center md:justify-between '>
                <div className='flex items-center justify-between w-full md:w-8'>
                    <span className='cursor-pointer'>
                        <Image 
                            src={logo} 
                            alt='Logo'
                        />
                    </span>
                    {/* <FontAwesomeIcon icon={faBars} className='w-7 h-7 text-white md:hidden' /> */}
                    <Menu  />
                </div>
  
                <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 
                    md:w-auto md:opacity-100 opacity-0 top-[-400px] transition-all ease-out duration-700 md:text-sm lg:text-lg'>
  
                    <li className='mx-4 my-5 md:my-0 text-white font-semibold hover:border-b-2 hover:border-white'>
                        <a href="http://" target="" rel="noopener noreferrer">
                            Home
                        </a>
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
                    <li className='hidden md:flex px-7 py-3 items-center justify-between bg-white w-52 duration-500  rounded-lg blue1 font-semibold ml-36'>
                    <button>
                     Download App 
                    </button>
                    <FontAwesomeIcon icon={faArrowRight} className='w-5 h-5' /> 
                    </li>
                </ul>
            </nav>
            
           {/* hero text and image */}
  
            <motion.div
             initial="hidden"
             animate={'visible'}
             variants={variants}
             transition={{ duration: 0.8 }}   
             className='flex flex-col px-5 md:px-0 items-center md:items-start md:flex-row md:justify-between gap-4 md:gap-28 mt-20 md:mt-24 '
             style={{height: '69.886%'}}>
                {/* hero text */}
                <div className='text-white text-center md:text-left md:mt-10 leading-8 w-full'>
                    <h1 className='text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold'>
                        Manage and Pay Your Bills, All From One Place!
                    </h1>
                    <p className='md:leading-6 text-xs md:text-sm lg:text-base mt-3'>
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
            </motion.div>
        </section>
    );
};

export default HeroSection;